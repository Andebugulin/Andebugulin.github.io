#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_ENTRIES 2000

typedef struct {
    char *raw;
    int year, month, day;
} Entry;

int extract_int(const char *s) {
    while (*s && !isdigit(*s)) s++;
    return atoi(s);
}

void parse_date(const char *e, Entry *out) {
    out->year = out->month = out->day = 0;

    const char *y = strstr(e, "year={");
    const char *m = strstr(e, "month={");
    const char *d = strstr(e, "day={");

    if (y) out->year  = extract_int(y + 6);
    if (m) out->month = extract_int(m + 7);
    if (d) out->day   = extract_int(d + 5);
}

int cmp_desc(const void *a, const void *b) {
    const Entry *x = a;
    const Entry *y = b;

    if (x->year  != y->year)  return y->year  - x->year;
    if (x->month != y->month) return y->month - x->month;
    return y->day - x->day;
}

char *read_block(FILE *f, char *first_line) {
    size_t cap = 4096, len = 0;
    char *buf = malloc(cap);
    buf[0] = '\0';

    do {
        size_t l = strlen(first_line);
        if (len + l + 1 > cap) {
            cap *= 2;
            buf = realloc(buf, cap);
        }
        memcpy(buf + len, first_line, l);
        len += l;
        buf[len] = '\0';

        if (strchr(first_line, '}') && first_line[0] == '}')
            break;

    } while (fgets(first_line, 1024, f));

    return buf;
}

int main(void) {
    FILE *in = fopen("_bibliography/papers.bib", "r");
    if (!in) {
        perror("open input");
        return 1;
    }

    Entry entries[MAX_ENTRIES];
    int n = 0;

    char *strings = NULL;
    size_t strings_len = 0;

    char line[1024];

    while (fgets(line, sizeof(line), in)) {
        if (strncmp(line, "@journal", 8) == 0) {
            char *block = read_block(in, line);
            entries[n].raw = block;
            parse_date(block, &entries[n]);
            n++;
        } else if (strncmp(line, "@string", 7) == 0) {
            size_t l = strlen(line);
            strings = realloc(strings, strings_len + l + 1);
            memcpy(strings + strings_len, line, l);
            strings_len += l;
            strings[strings_len] = '\0';
        }
    }

    fclose(in);

    qsort(entries, n, sizeof(Entry), cmp_desc);

    FILE *out = fopen("_bibliography/papers_sorted.bib", "w");
    if (!out) {
        perror("open output");
        return 1;
    }

    fprintf(out, "---\n---\n\n");

    for (int i = 0; i < n; i++) {
        fputs(entries[i].raw, out);
        fputc('\n', out);
        free(entries[i].raw);
    }

    if (strings) {
        fputc('\n', out);
        fputs(strings, out);
        free(strings);
    }

    fclose(out);
    return 0;
}

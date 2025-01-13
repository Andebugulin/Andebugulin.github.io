#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX_ENTRIES 1000
#define MAX_LINE_LENGTH 1024

typedef struct {
    char *raw_text;
    int year;
    int month;
    int day;
} BibEntry;

int parse_int(const char *str) {
    while (*str && !isdigit(*str)) str++; // Skip non-digit characters
    return atoi(str);
}

int parse_entry(const char *entry, int *year, int *month, int *day) {
    *year = *month = *day = 0;
    const char *year_ptr = strstr(entry, "year={");
    const char *month_ptr = strstr(entry, "month={");
    const char *day_ptr = strstr(entry, "day={");

    if (year_ptr) *year = parse_int(year_ptr + 6);
    if (month_ptr) *month = parse_int(month_ptr + 7);
    if (day_ptr) *day = parse_int(day_ptr + 5);

    return (year_ptr && month_ptr && day_ptr);
}

int compare_entries(const void *a, const void *b) {
    BibEntry *entry_a = (BibEntry *)a;
    BibEntry *entry_b = (BibEntry *)b;

    if (entry_a->year != entry_b->year) {
        return entry_b->year - entry_a->year;
    }
    if (entry_a->month != entry_b->month) {
        return entry_b->month - entry_a->month;
    }
    return entry_b->day - entry_a->day;
}

void free_entries(BibEntry *entries, int count) {
    for (int i = 0; i < count; i++) {
        free(entries[i].raw_text);
    }
}

int main() {
    FILE *input = fopen("_bibliography/papers.bib", "r");
    if (!input) {
        perror("Failed to open input file");
        return 1;
    }

    BibEntry entries[MAX_ENTRIES];
    int entry_count = 0;

    char line[MAX_LINE_LENGTH];
    char entry_buffer[MAX_LINE_LENGTH * 10]; // Buffer for a single entry
    int in_entry = 0, buffer_pos = 0;

    while (fgets(line, sizeof(line), input)) {
        if (strstr(line, "@journal") || strstr(line, "@string")) {
            if (in_entry && buffer_pos > 0) {
                // End of the previous entry
                entry_buffer[buffer_pos] = '\0';

                entries[entry_count].raw_text = strdup(entry_buffer);
                if (!parse_entry(entry_buffer, &entries[entry_count].year,
                                 &entries[entry_count].month,
                                 &entries[entry_count].day)) {
                    fprintf(stderr, "Warning: Failed to parse date for entry %d\n", entry_count + 1);
                }
                entry_count++;
                buffer_pos = 0;
            }
            in_entry = 1;
        }

        if (in_entry) {
            strcpy(&entry_buffer[buffer_pos], line);
            buffer_pos += strlen(line);
        }
    }

    // Add the last entry
    if (in_entry && buffer_pos > 0) {
        entry_buffer[buffer_pos] = '\0';
        entries[entry_count].raw_text = strdup(entry_buffer);
        if (!parse_entry(entry_buffer, &entries[entry_count].year,
                         &entries[entry_count].month,
                         &entries[entry_count].day)) {
            fprintf(stderr, "Warning: Failed to parse date for entry %d\n", entry_count + 1);
        }
        entry_count++;
    }

    fclose(input);

    // Sort entries
    qsort(entries, entry_count, sizeof(BibEntry), compare_entries);

    // Write sorted entries to a new file
    FILE *output = fopen("_bibliography/papers.bib", "w");
    if (!output) {
        perror("Failed to open output file");
        free_entries(entries, entry_count);
        return 1;
    }

    fprintf(output, "---\n---\n\n");


    for (int i = 0; i < entry_count; i++) {
        fprintf(output, "%s", entries[i].raw_text);
    }

    fclose(output);

    free_entries(entries, entry_count);

    printf("Sorted bibliography saved to 'papers_sorted.bib'\n");
    return 0;
}

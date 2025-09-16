#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_INPUT 1024

// to compile:
// gcc add_entry.c -o add_entry
// to run: 
// ./add_entry

void getInput(char *prompt, char *output, int max_size) {
    printf("%s", prompt);
    if (fgets(output, max_size, stdin) != NULL) {
        size_t len = strlen(output);
        if (len > 0 && output[len-1] == '\n') {
            output[len-1] = '\0';  // Remove trailing newline
        }
    }
}

void appendBibtexEntry(const char *filepath) {
    FILE *file = fopen(filepath, "a");
    if (file == NULL) {
        perror("Unable to open file");
        return;
    }

    char title[MAX_INPUT] = "";
    char abstract[MAX_INPUT] = "";
    char year[MAX_INPUT] = "";
    char month[MAX_INPUT] = "";
    char day[MAX_INPUT] = "";
    char html[MAX_INPUT] = "";
    char pdf[MAX_INPUT] = "";
    char selected[MAX_INPUT] = "";
    char preview[MAX_INPUT] = "";

    getInput("Enter title: ", title, MAX_INPUT);
    getInput("Enter abstract: ", abstract, MAX_INPUT);
    getInput("Enter year: ", year, MAX_INPUT);
    getInput("Enter month: ", month, MAX_INPUT);
    getInput("Enter day: ", day, MAX_INPUT);
    getInput("Enter html: ", html, MAX_INPUT);
    getInput("Enter pdf: ", pdf, MAX_INPUT);
    getInput("Enter selected (true/false): ", selected, MAX_INPUT);
    getInput("Enter preview: ", preview, MAX_INPUT);

    fprintf(file, "\n@journal{user_entry,\n");
    if (strlen(title) > 0) fprintf(file, "  title={%s},\n", title);
    if (strlen(abstract) > 0) fprintf(file, "  abstract={%s},\n", abstract);
    if (strlen(year) > 0) fprintf(file, "  year={%s},\n", year);
    if (strlen(month) > 0) fprintf(file, "  month={%s},\n", month);
    if (strlen(day) > 0) fprintf(file, "  day={%s},\n", day);
    if (strlen(html) > 0) fprintf(file, "  html={%s},\n", html);
    if (strlen(pdf) > 0) fprintf(file, "  pdf={%s},\n", pdf);
    if (strlen(selected) > 0) fprintf(file, "  selected={%s},\n", selected);
    if (strlen(preview) > 0) fprintf(file, "  preview={%s},\n", preview);
    fprintf(file, "}\n");

    fclose(file);
}

int main() {
    const char *filepath = "_bibliography/papers.bib";
    appendBibtexEntry(filepath);
    printf("Entry added to %s\n", filepath);
    return 0;
}

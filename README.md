## Note-maker

> If you are not me, this CLI tool is likely to provide *zero* value

A tool for creating the skeleton of Markdown notes (based on templates) in the current directory and then optionally opening them in `$EDITOR`.

### Usage

```
npm install -g @Joe8Bit/note-maker
(cd into whichever directory you choose)
note-maker
```

The tool will then run you through a short config to populate the template.

Assuming you run through the template, a Markdown file will be generated in the current directory with a filename in the following format `[MMM Do YYYY] - [title from wizrd].md`

Optionally, you can pass the `-e` argument to the `note-maker` command and it will open the written file in your `$EDITOR`.

There are also several environment variables that can be configured to control `note-maker` behaviour:

* `NOTE_TEMPLATE_PATH` which tells the tool where to look for it's template directory, it overrides the default
  * It will try to find templates in that directory, as specified during the wizard in the `[template_name].md.ejs` format
* `NOTE_SAVE_PATH` which overrides the `process.cwd()` call and will always save notes in this directory if it is set
* `NOTE_TEMPLATE_SUFFIX` which overrides the suffix for a template

### License

MIT
# Eleventy Playground

My first project build with 11ty. Just having some fun.

## Notes

### Creating templates
```echo 'file content goes here' > filename.ext```

### Compiling content templates
To compile content templates in current directory or subdirectories into the output folder (defaults to _site):
```npx @11ty/eleventy```

### To start hot-loading a local web server
```npx @11ty/eleventy --serve```

### Configuration
Config is done via single js file name .eleventy.js. This step is optional.

The default for Eleventy is that it will search through all files in the input directory with a file extension listed in your cofig file as a template format. For example, if youve listed njk files in your config then it will look for those files. If a file format is not recognized, it will be ignored and not copied.

Notes: 
- If build time is slow, there is a manual option to passthrough files.
- If significant config changes, re-start hot loading

More about config:[Eleventy Docs - Passthrough File Copy](https://www.11ty.dev/docs/copy/) 

### 11ty Docs
[Eleventy Documentation](https://www.11ty.dev/docs/resources/)

### 11ty Starter Article on dev.to
[Eleventy in eleven minutes by Lea Rosema @ dev.to](https://dev.to/s2engineers/eleventy-in-eleven-minutes-2mno)

### Eleventy base blog project example
[Eleventy Base Blog Project](https://github.com/11ty/eleventy-base-blog)

## Project Notes/Plans

Project: A portfolio of all my tech articles

### MVP:
- Listing of all tech articles in one place
- Links to articles
- Accessible
- Styled (minimal)
- Add tags to show where published

### Stretch:
- Pull in images using scraper
- Scrape and pull articles dynamically (may not be possible with Eleventy?)
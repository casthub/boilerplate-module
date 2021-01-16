# CastHub Module Boilerplate

This Boilerplate is a great place to start for more advanced Modules or for those who'd like to split their Modules in to separate files and use a build process. It provides:

- Typescript support
- External SCSS/CSS support
- Module bundling via Rollup
- Automatic uploading & publishing to CastHub

Be sure to check out our [Developer Documentation](https://docs.casthub.app)

## Building

```
yarn build # Builds the Module for Production
yarn dev # Watches for changes and builds for Development
```

## FAQ

**Why Rollup with a CommonJS export?**
CastHub Modules are required to be exported via CommonJS (`module.exports =`).

**Can I bundle images, audio or video?**
No - CastHub currently only supports text-based exports.

**But I want to use LESS/PostCSS/Other**
Just remove the SCSS plugin and add a Rollup Plugin for your favorite preprocessor.

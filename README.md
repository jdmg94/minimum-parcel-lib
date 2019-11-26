# Minimum Parcel Lib
A boilerplate for react libraries bundled with parcel

Hi, Thanks for stopping by! This project is a small collection of scripts and boilerplate code that will help anyone present their brainchilds to the world. It comes with react by default but it supports Vue, Angular, Typescript and others;


## How To Use

**MPL**(Minimum Parcel Lib) works with [parceljs](https://parceljs.org) this means that you can work on top of all the goodies that parcel has built-in like Hot Module Replacement, Automagically installed dependencies, code-splitting, tree shaking, etc.

Since this package is focused on NPM libraries I've included a `.babelrc` with basics like the transform runtime plugin and features like class properties and object spread. If you need any more plugins, presets, etc, just add the to the file, they will auto-install.

There's also an `.editorconfig` file with a small set of rules to help with env consistency, any extra rules you can add them right there.

Finally, I've included an `autobuild.hook` file that can be used to clean, build, generate sourcemaps, and add to source control. This file is used to feed the `pre-commit` hook, which is off by default. To turn it on just run `yarn autobuild:on`, you can disable it with `yarn autobuild:off`.

## Scripts

- `clean` cleans dist folder
- `clean:demo` cleans example dist folder
- `start` compiles lib with HMR
- `start:demo` compiles demo with HMR
- `build` build lib in production mode
- `build:demo` build demo in production mode
- `autobuild:on` enables pre-commit autobuild
- `autobuild:off` removes the pre-commit hook
- `sourcemap` generates an HTML representation of your source map
- `deploy` deploys your demo site to github pages

2019 Jose Muñoz

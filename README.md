# react-pony

> Boilerplate for publishing modern React modules with Rollup and example usage via create-react-app.

[![NPM](https://img.shields.io/npm/v/react-pony.svg)](https://www.npmjs.com/package/react-pony) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Intro

*Note*: this is a sample react-component, based upon react modern boilerplate... 
Learn more here about the [orignal repo](https://www.npmjs.com/package/react-modern-library-boilerplate).

## Walkthrough

Check out the accompanying [blog post](https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7) which gives more in-depth explanations on how to create an example component using this boilerplate.

On this page, we'll give a quick rundown of the essential steps.

#### Getting Started

The first step is to clone this repo and rename / replace all boilerplate names to match your custom module. In this example, we'll be creating a module named `react-pony`.

```bash
# clone the repo
git clone https://github.com/asabaylus/react-pony.git
```

#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` and `lib/` whenever you make changes.

```bash
# run example to start developing your new component against
yarn link # the link commands are important for local development
yarn install # disregard any warnings about missing peer dependencies
yarn start # runs rollup with watch flag
yarn build # create production packages
```

We'll also be running our `example/` create-react-app that's linked to the local version of your `react-poop-emoji` module.

```bash
# (in another tab)
cd example
npm link react-pony
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your component in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`. Then publish as per usual.

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
yarn publish
```

#### Github Pages

Deploying the example to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
yarn deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

## License

MIT © [Asa Baylus](https://github.com/asabaylus)

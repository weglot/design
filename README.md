# Weglot Design

Weglot Design provides a set of classes allowing you to easily reproduce the Weglot dashboard design.


## Installation

Because this package is hosted on GitHub Registry, you need to [generate a Personal Access Token ](https://github.com/settings/tokens/new) with the `write:packages ` -> `read:packages` scope. Keep the token, you'll need it.

Next, create a `.npmrc` file in the root of your project folder and past the following code :

```bash
# Authentication to Github packages
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_TOKEN

# Set the registry for "@weglot" packages
@weglot:registry=https://npm.pkg.github.com
```
Don't forget to replace `YOUR_PERSONAL_TOKEN` by your token.

Finally, install the package :

```bash
npm install @weglot/design
```

## Usage

### With cdn
No need install to use this method, just include dist css file in yout html.

```html
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/weglot/design/dist/css/main.css">

// With version
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/weglot/design@1.0.27/dist/css/main.css">
```

### With sass
```scss
@import "~@weglot/design/scss/main";
```
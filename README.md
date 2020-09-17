# Core-css

Core-css provides a set of classes allowing you to easily reproduce the Weglot dashboard design.


## Installation

Because this package is private, you need to [generate a Personal Access Token ](https://github.com/settings/tokens/new) with the `read:packages` scope. Keep the token, you'll need it.

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
npm install @weglot/core-css
```

## Development
### Update

All SCSS files are located in the /scss/ folder and the generated css file in /dist/css/. 
Once your modifications are done, build with this command :

```bash
npm run build
```
 
### Publish
To be able to publish Weglot private packages, you need to [generate a Personal Access Token ](https://github.com/settings/tokens/new) with the `repo`, `read:packages` and `write:packages` scopes.

Next, login to npm :

```bash
npm login --registry=https://npm.pkg.github.com --scope=@weglot
```

Executing this query will ask for username and password. Username is your github username. Password is the Personal Access Token that you have previously generated.

Finally, run :

```bash
npm publish
```

# Description

I'm trying to use [riteway](https://github.com/ericelliott/riteway) as testing framework for a React Native application.

To run the tests i launch the following command

```shell
node -r @babel/register app.test.js
```

However, since React Native doesn't transpile its modules, I need to manually include the react-native modules inside the `node_modules`

## REPRODUCE THE PROBLEM

```shell
node -r ./babel-register-start.js app.test.js
```

i created a simple `babel-register-start.js` file to make babel include the `react-native` files (it doesn't work if put in `babel.config.js`)

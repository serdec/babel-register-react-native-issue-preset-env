require('@babel/register')({
  ignore: [/node_modules\/(?!(react-native))/],
  presets: [['@babel/preset-env', {loose: true}], '@babel/preset-flow', '@babel/preset-react', ["module:metro-react-native-babel-preset", { "loose": true }]],
});
global.__DEV__ = true;
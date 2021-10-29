require('@babel/register')({
  ignore: [/node_modules\/(?!(react-native))/],
  presets: ['@babel/preset-env'],
});

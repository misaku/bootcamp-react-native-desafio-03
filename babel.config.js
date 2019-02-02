module.exports = (api) => {
  api.cache(true);
  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
        rootPathPrefix: '~',
      },
    ],
  ];
  const env = {
    production: {
      plugins,
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};

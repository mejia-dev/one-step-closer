module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-module-resolver',
        {
          alias: {
            "^@/(.+)": "./src/\\1"
          }
        }
      ],
      [
        'babel-plugin-root-import',
        {
          rootPathSuffix: 'src'
        }
      ],
      [
        'babel-plugin-transform-imports',
        {
          '@material-ui/core': {
            transform: '@material-ui/core/${member}',
            preventFullImport: true
          },
          '@material-ui/icons': {
            transform: '@material-ui/icons/${member}',
            preventFullImport: true
          },
          'lodash': {
            transform: 'lodash/${member}',
            preventFullImport: true
          }
        }
      ],
      'react-native-reanimated/plugin', // Add this line if you're using react-native-reanimated
      [
        'babel-plugin-transform-scss',
        {
          preprocess: true
        }
      ]
    ]
  };
};

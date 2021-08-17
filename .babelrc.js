module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@utils': './src/utils',
          '@components': './src/component',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@res': './src/res',
          '@service': './src/service'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};

module.exports = {
  presets: [
    'babel-preset-es2015',
    'babel-preset-stage-2',
    'babel-preset-react'
  ].map(require.resolve)
};

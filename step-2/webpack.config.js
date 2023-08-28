const { join } = require('path');
// import { join } from 'path';

const config = {
  mode: "development",
  entry: {
    scripts: join(__dirname, 'step2.ts'),
  },
  output: {
    path: __dirname,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          },
        ],
      },
    ],
  },
};

// export default config;
module.exports = config;

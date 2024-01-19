import path from 'path';
import { Argv, CallableOption, WebpackConfiguration } from 'webpack-cli/lib/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';

type Mode = 'production' | 'development';

interface ArgvMode {
  mode?: Mode;
}

const getConfig: CallableOption = (env, argv: Argv & ArgvMode) => {
  const isDev = argv.mode === 'development';

  const config: WebpackConfiguration = {
    mode: argv.mode ?? 'production',
    entry: path.join(__dirname, 'ts', 'step2.ts'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'step2.js',
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
          extractComments: false,
          terserOptions: {
            ecma: 5,
          },
        }),
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    devtool: isDev ? 'eval-source-map' : false,
    devServer: isDev
      ? {
        port: 3000,
        open: true,
        static: {
          directory: path.join(__dirname),
        },
      }
      : undefined,
  };
  return config;
};

export default getConfig;

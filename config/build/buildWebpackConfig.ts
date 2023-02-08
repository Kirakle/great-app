import webpack from 'webpack';
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined, //чтобы в случае ошибки можно было отследить в каком файле она произошла
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html, //путь к темплейт файлу финального index.html + плагин для этого
    }),
    new webpack.ProgressPlugin(), //плагин для указания прогресса в процессе сборки бандла
    // чтобы создавались свои файлы стилей, иначе они будут в js бандле
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ];
}

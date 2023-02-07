import path from 'path';
import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

//вместо export config экспортируем функцию, которая его возвращает, затем что она в env принимает переменные окружения

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};

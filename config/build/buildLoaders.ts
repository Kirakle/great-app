import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // если не использовать тайпскрипт, то нужен babel-loader для обработки jsx файла

  const typescriptLoader = {
    test: /\.tsx?$/, // лоадер для обработки файлов ts и tsx (задано регуляркой)
    use: 'ts-loader', // лоадер устанавлиевается через npm i typescript ts-loader
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // если на билд, создаем отдельные css
      // Translates CSS into CommonJS
      // Лоадер можно подключить строкой, а можно объектом с параметрами
      {
        loader: 'css-loader',
        options: {
          // modules: true, // позволяет использовать ***.module.css
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [typescriptLoader, cssLoader];
}

import { BuildOptions } from './types/config';
import { ResolveOptions } from 'webpack';

export default function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], //расширения файлов, которые можно импортировать без указания расширения import name from './index(не указываю расширение)'
    preferAbsolute: true, // абсолютные пути в приоритете
    modules: [options.paths.src, 'node_modules'],
    alias: {},
    mainFiles: ['index'],
  };
}

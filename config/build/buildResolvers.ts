import { ResolveOptions } from 'webpack';

export default function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], //расширения файлов, которые можно импортировать без указания расширения import name from './index(не указываю расширение)'
  };
}

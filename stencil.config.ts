import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  copy: [
    { src: '_redirects' },
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: 'https://angular-austria.at/',
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/sass/abstracts/variables.scss', 'src/sass/abstracts/mixins.scss'],
      includePaths: ['src/sass'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  enableCache: false,
  devServer: { openBrowser: false },
};

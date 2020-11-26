const path = require('path');

// module.exports = {
//   plugins: [
//     [
//       '@snowpack/plugin-babel',
//     ],
//   ],
//   alias: {
//     '@shared': path.resolve(__dirname, 'src/shared'),
//     '@pages': path.resolve(__dirname, 'src/pages'),
//   },
//   compilerOptions: {
//     module: 'esnext',
//     target: 'esnext',
//     moduleResolution: 'node',
//     jsx: 'preserve',
//     baseUrl: './',
//     paths: { '*': ['web_modules/.types/*'] },
//     allowSyntheticDefaultImports: true,
//     importsNotUsedAsValues: 'error',
//     /* more strict checking for errors that per-file transpilers like `esbuild` would crash */
//     isolatedModules: true,
//     /* noEmit - We only use TypeScript for type checking. */
//     noEmit: true,
//     /* Additional Options */
//     strict: true,
//     skipLibCheck: true,
//     forceConsistentCasingInFileNames: true,
//     resolveJsonModule: true,
//   },
// };


/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@pages': path.resolve(__dirname, 'src/pages'),
  },
};
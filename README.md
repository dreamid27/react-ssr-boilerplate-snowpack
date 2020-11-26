# React SSR Boilerplate with Snowpack

This repository is starter pack for development react app with ssr (server side rendering), build with :

[react](https://reactjs.org/)

[webpack](https://webpack.js.org/)

[emotion](http://emotion.sh/)

[snowpack](https://www.snowpack.dev/)

[express](https://expressjs.com/)
 

## Installation

Use the node package manager `node v12` or you can install `volta` for get great experience to install.

I'm recommended you install with pnpm, but if you still want to use npm, upon you.

```bash
npm install
```

or with pnpm
```bash
pnpm install
```


## Usage
This app has flexible how to you running it. you can running on `server mode`, `client mode` or `client mode with snowpack`. I recommend you to running on `client mode` when you on development phase, that's make great experience when develop, or you can use `client mode with snowpack` that's very2 fast with HMR feature.

but if you want to check some functionallity or SEO, you can use server side. 

running on server mode / ssr
```bash
npm run dev:server
```

running on client mode
```bash
npm run dev:client
```

running on client mode with snowpack
```bash
npm run dev:snowpack
```

## Build
```bash
npm run build
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

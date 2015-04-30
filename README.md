# redsunsoft/simple-react-gallery

Simple image gallery built with React and Webpack Hot Loader
Based on webpack/react-starter

## Local Installation

Install [node.js](https://nodejs.org) or [io.js](https://iojs.org)

Just clone this repo and change the `origin` git remote.

``` text
npm install
```

## Development server

``` text
# start the webpack-dev-server
npm run dev-server
# wait for the first compilation is successful

# in another terminal/console
# start the node.js server in development mode
npm run start-dev

# open this url in your browser
http://localhost:3000/

# To initialize/reset the DB
http://localhost:3000/api/init

```

The configuration is `webpack-dev-server.config.js`.

It automatically recompiles and refreshes the page when files are changed.

Also check the [webpack-dev-server documentation](http://webpack.github.io/docs/webpack-dev-server.html).


## Hot Module Replacement development server

``` text
# start the webpack-dev-server in HMR mode
npm run hot-dev-server
# wait for the first compilation is successful

# in another terminal/console
# start the node.js server in development mode
npm run start-dev

# open this url in your browser
http://localhost:3000/
```

The configuration is `webpack-hot-dev-server.config.js`.

It automatically recompiles when files are changed. When a hot-replacement-enabled file is changed (i. e. stylesheets or React components) the module is hot-replaced. If Hot Replacement is not possible the page is refreshed.

Hot Module Replacement has a performance impact on compilation.


## Production compilation and server

``` text
# build the client bundle and the prerendering bundle
npm run build

# start the node.js server in production mode
npm run start

# open this url in your browser
http://localhost:3000/
```

The configuration is `webpack-production.config.js`.

The server is at `lib/server.js`

The production setting builds two configurations: one for the client (`build/public`) and one for the serverside prerendering (`build/prerender`).


## Legacy static assets

Assets in `public` are also served.


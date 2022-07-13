<p align="center">
  <img src="https://github.com/JBostelaar/react-prime/blob/master/src/static/images/prime-logo.png" alt="prime-logo" width="250px" />
</p>

# Dashboard Next Front-end

## Quick start
```
npm install
npm start
```

## Features
* [TypeScript](https://www.typescriptlang.org/)
* [NextJS](nextjs.org/)
* [React](https://reactjs.org/)
* [NextAuth](https://next-auth.js.org/)
* [React Hook Form](https://react-hook-form.com/)
* [React-Query](https://react-query.tanstack.com/)
* [Styled-Components](https://www.styled-components.com)
* [ESLint](http://eslint.org) to maintain a consistent code style
* Refer to `package.json` for more details

## NPM Scripts
* Start develop server: `$ npm start` or `$ npm run dev`
* Create production build: `$ npm run build`
* Start server: `$ npm run server`
* Run ESLint: `$ npm run lint`
* Type check: `$ npm run typecheck`
* Run ESLint and type check: `$ npm test`
* Run webpack-bundle-analyzer: `$ npm run analyze`

## Deployment
Make sure all modules are installed:
`$ npm install`

Create a build for production, this will add a `/dist` folder to the root with the bundled code.
`$ npm run build`

Run the server file to start server:
`$ npm run server`

For production I recommend to use [PM2](http://pm2.keymetrics.io/) to run the server with advanced process management.

## Development Workflow
### Components
The components are separated in `Modules` and `Common`. Modules are bundled components which depend on each other. Common components are components that are self-contained and can be used through the entire app.

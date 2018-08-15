<p align="center">
    <h3 align="center">RAML mocking service using React, Webpack, Cypress and Ramlizer <br></h3>
</p>

Ever wanted a mock server that you could switch responses? Ever wanted to use RAMl files as a basis for these mocking? Every wanted to do both at the same time? This project is for you.

Based almost entirely on https://github.com/ReactJSResources/react-webpack-babel.git

### What we are using

- React 16
- Webpack 3
- React Router 4
- SASS
- Babel Cli
- Hot Module Reloading
- Jest 21
- Enzyme 3 for testing
- Cypress for end to end testing
- Ramlizer for mock server switching

### Features

- Simple src/index.jsx and src/index.css (local module css).
- Webpack configuration for development (with hot reloading) and production (with minification).
- CSS module loading, so you can include your css by `import styles from './path/to.css';`.
- Both js(x) and css hot loaded during development.
- [Webpack Dashboard Plugin](https://github.com/FormidableLabs/webpack-dashboard) on dev server.
- Uses Ramlizer to turn RAML files into endpoint mocking calls.

### To run

- You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
- Fork and clone the project:

```
git clone https://github.com/ReactJSResources/react-webpack-babel.git
```

- Then install the dependencies:

```
npm install
```

- Run development server:

```
npm start
```

- Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To test

To run unit tests:

```
npm test
```

Tests come bundled with:

- Jest
- Enzyme
- React Test Utils
- React Test Renderer

### To build the production package

```
npm run build
```

### Running build locally

```
npm run serve:build
```

### Nginx Config

Here is an example Nginx config:

```
server {
	# ... root and other options

	gzip on;
	gzip_http_version 1.1;
	gzip_types text/plain text/css text/xml application/javascript image/svg+xml;

	location / {
		try_files $uri $uri/ /index.html;
	}

	location ~ \.html?$ {
		expires 1d;
	}

	location ~ \.(svg|ttf|js|css|svgz|eot|otf|woff|jpg|jpeg|gif|png|ico)$ {
		access_log off;
		log_not_found off;
		expires max;
	}
}
```

### Eslint

There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

To run cypress end to end tests tests:

```
npm run cypress:run
```

To run Ramlizer, Cypress and webpack altogether

```
npm run test:e2e
```

### Notes on importing css styles

- styles having /src/ in their absolute path considered part of the application and exported as local css modules.
- other styles considered global styles used by components and included in the css bundle directly.

### Contribute

Please contribute to the project if you know how to make it better, including this README :)

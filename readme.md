# Hapi Plugin Boilerplate in ES6

- ES6 to ES5 transpile: [Babel](https://github.com/babel/babel)
- Test Utility: [Lab](https://github.com/hapijs/lab) 
- Assertion Lib: [Code](https://github.com/hapijs/code)
- Lint: [eslint](https://github.com/eslint/eslint) with [babel-eslint](https://github.com/babel/babel-eslint)


## Get started

1. Clone this repository `git@github.com:ubaltaci/hapi-plugin-boilerplate.git`
2. Install dependencies `npm install`
3. Check `src/index.es6` file, its a simple plugin adds a route to hapi server. 
4. Run `npm run compile`, transpiled file will located in `dist/index.js`
5. Run test with `npm run test`

## Structure

* `src` folder contains all ES6 source 
* `dist` folder contains transpiled ES5 code
* `test` folder contains ES6 tests with `transformer.js` to tell `lab` how to transpile ES6 files.


## NPM scripts

* **lint** `npm run lint` execute `eslint` on `src` folder with `babel-eslint` parser and reports.
* **compile** `npm run compile` execute `babel` on `src` folder and outputs to `dist` folder.
* **test** `npm run test` execute `lab` on test folder with custom transpile information.
* **coverage** `npm run coverage` coverage report by Lab.
* **prepublish** called before `npm publish` just in case to forget to compile before publish.

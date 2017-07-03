# hapi-plugin-boilerplate

[![npm](https://img.shields.io/npm/v/hapi-plugin-boilerplate.svg)](http://npmjs.org/package/hapi-plugin-boilerplate) [![travis-status](https://img.shields.io/travis/g-div/hapi-plugin-boilerplate.svg)](https://travis-ci.org/g-div/hapi-plugin-boilerplate)

hapi plugin

[![nodei.co](https://nodei.co/npm/hapi-plugin-boilerplate.png?downloads=true&downloadRank=true&stars=true)](http://npmjs.org/package/hapi-plugin-boilerplate)

[![](https://david-dm.org/g-div/hapi-plugin-boilerplate/status.svg)](https://david-dm.org/g-div/hapi-plugin-boilerplate)
[![](https://david-dm.org/g-div/hapi-plugin-boilerplate/dev-status.svg)](https://david-dm.org/g-div/hapi-plugin-boilerplate)

## Install

`npm install --save hapi-plugin-boilerplate`

## Use

```javascript
var Hapi = require('hapi');

var server = new Hapi.Server();

var options = {};

server.register({register: require('hapi-plugin-boilerplate'), options: options}, function(err) {

});
```

### Options


## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel-cli](https://www.npmjs.com/package/babel-cli) | ^6.2.0 | ✔
[babel-core](https://www.npmjs.com/package/babel-core) | ^6.2.1 | ✔
[babel-eslint](https://www.npmjs.com/package/babel-eslint) | ^5.0.0-beta4 | ✔
[babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015) | ^6.1.18 | ✔
[code](https://www.npmjs.com/package/code) | ^2.0.1 | ✔
[hapi](https://www.npmjs.com/package/hapi) | ^11.1.2 | ✔
[husky](https://www.npmjs.com/package/husky) | ^0.10.2 | ✔
[lab-babel](https://www.npmjs.com/package/lab-babel) | ^1.1.1 | ✔
[lab](https://www.npmjs.com/package/lab) | ^8.0.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[npm-run-all](https://www.npmjs.com/package/npm-run-all) | ^1.3.2 | ✔


## Contribute

Contributions are welcome!
Open an [issue](https://github.com/g-div/hapi-plugin-boilerplate/issues) to report bugs or request features. 
To contribute with code:
- clone this repository
- install the dependencies with ```npm install```
- make your changes to the files in the ```src/``` folder
- write tests using [lab](https://github.com/hapijs/lab) and [code](https://github.com/hapijs/code/) in the ```test/``` folder
- run tests with ```npm test```. try to keep test coverage about 100%
- edit the ```.README.md``` file and build the project again (```npm run compile```)
- send a pull request against the master branch

## Author

[g-div](https://github.com/g-div)

## License

 - **MIT** : http://opensource.org/licenses/MIT

# hapi-plugin

[![npm](https://img.shields.io/npm/v/hapi-plugin.svg)](http://npmjs.org/package/hapi-plugin) [![travis-status](https://img.shields.io/travis/g-div/hapi-plugin.svg)](https://travis-ci.org/g-div/hapi-plugin)

hapi plugin

[![nodei.co](https://nodei.co/npm/hapi-plugin.png?downloads=true&downloadRank=true&stars=true)](http://npmjs.org/package/hapi-plugin)

[![](https://david-dm.org/g-div/hapi-plugin/status.svg)](https://david-dm.org/g-div/hapi-plugin)
[![](https://david-dm.org/g-div/hapi-plugin/dev-status.svg)](https://david-dm.org/g-div/hapi-plugin)

## Install

`npm install --save hapi-plugin`

## Use

```javascript
var Hapi = require('hapi');

var server = new Hapi.Server();

var options = {};

server.register({register: require('hapi-plugin'), options: options}, function(err) {

});
```

### Options


## Dependencies

Package | Version | Dev
--- |:---:|:---:
[babel](https://www.npmjs.com/package/babel) | ^5.2.6 | ✔
[code](https://www.npmjs.com/package/code) | ^1.4.0 | ✔
[hapi](https://www.npmjs.com/package/hapi) | ^11.1.1 | ✔
[husky](https://www.npmjs.com/package/husky) | ^0.10.2 | ✔
[lab](https://www.npmjs.com/package/lab) | ^5.8.0 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔
[npm-run-all](https://www.npmjs.com/package/npm-run-all) | ^1.3.1 | ✔


## Author

g-div

## License

 - **MIT** : http://opensource.org/licenses/MIT

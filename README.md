# Node.js Express API Scaffold

[![Build Status](https://travis-ci.org/danielrohers/nodejs-express-api-scaffold.svg?branch=master)](https://travis-ci.org/danielrohers/nodejs-express-api-scaffold)
[![Code Climate](https://codeclimate.com/github/danielrohers/nodejs-express-api-scaffold/badges/gpa.svg)](https://codeclimate.com/github/danielrohers/nodejs-express-api-scaffold)
[![Dependency Status](https://david-dm.org/danielrohers/nodejs-express-api-scaffold.svg)](https://david-dm.org/danielrohers/nodejs-express-api-scaffold)
[![devDependency Status](https://david-dm.org/danielrohers/nodejs-express-api-scaffold/dev-status.svg)](https://david-dm.org/danielrohers/nodejs-express-api-scaffold#info=devDependencies)
## Setup

### Requirements

> [Install MongoDB](https://www.mongodb.org/downloads)

> [Install Node.js](https://nodejs.org/en/download)

### Install dependencies
```bash
$ [sudo] npm install
```
or
```bash
$ yarn
```

## Launching

First start MongoDB if you don't have a running instance
```bash
$ mongod
```

#### Development
```bash
$ npm start
```
or use [nodemon](https://www.npmjs.com/package/nodemon)
```bash
$ npm run nodemon
```

#### Production
```bash
$ node bin/www
```

[Running Example](https://nodejs-express-api-scaffold.herokuapp.com)

## TODO

* Authentication
* [ACL](https://en.wikipedia.org/wiki/Access_control_list)

## License

[Licence](https://github.com/danielrohers/nodejs-express-api-scaffold/blob/master/LICENSE)

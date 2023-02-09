  <p align="center">This project was built with <a href="http://nodejs.org" target="_blank">Node.js</a> framework called <a href="https://nestjs.com/" target="_blank">Nest</a></p>
    <p align="center">

Your code will now support:
- Nest application and typescript support
- Eslint rules
- Docker support
- Config setup
- Example route (including module, controller and service)

## Install packages

```bash
$ npm install
```

## Running the app
### Locallly:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# private mode
$ npm run start:private

# debug mode
$ npm run start:debug

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# test watch mode
$ npm run test:watch

# test coverage
$ npm run test:cov

# test debug mode
$ npm run test:debug

```

## Scripts Overview

| Script  | Description   |
|---|---|
| `start` | Run project with ts-node |
| `start:dev` | Run project with ts-node on dev env |
| `start:private` | Run project with ts-node on private env |
| `start:debug` | Run project with ts-node and watch for changes as well as open debug port and attach to process |
| `start:prod` | Run project with ts-node on prod env |
| `lint` | Find any linting problems |
| `lint:fix` | Try to automatically fix any linting problems |
| `test` | Lint and unit test the project |
| `test:watch` | Watch and rebuild the project on save, then re-run relevant tests |
| `test:cov` | Rebuild, run tests, then create and open the coverage report |
| `test:debug` | Rebuild, run tests and open debug port and attach to process |

## Before You Push

- Please make sure the following commands run successfully:
```bash
# build the code
$ npm run build

# check your code
$ npm test

# check your code coverage
$ npm run test:cov

# check your code is working
$ npm run start:dev 
# or
$ npm run start:private
```
- Please make sure you `git pull` / `fetch` before pushing your changes, so you'll be completely up-to-date.

## Typescript

This project uses [TypeScript](https://www.typescriptlang.org) and has been preconfigured for use with Visual Studio Code. Other editors are also supported.

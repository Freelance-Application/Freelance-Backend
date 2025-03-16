## Description

Freelance Application Repository Backend

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# create a file .env like .env.example changing variables

# you can use docker to instance a postgres database using docker-compose
$ docker-compose up -d
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
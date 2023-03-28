# NestJS example for bug in GraphQL field middleware

## Description

This repository is used to show the bug with GraphQL Fields middleware in NestJS.

Based on [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# start (in watch mode)
$ npm run start:dev

# open playground
$ open https://localhost:3000/graphql

# send query
query {
  getLowerCase(input: {str: "Test"})
}
```

The expected result would be
```json
{
  "data": {
    "getLowerCase": "test"
  }
}
```

But the following result is returned:
```json
{
  "data": {
    "getLowerCase": "Test"
  }
}
```

"test" vs "Test"

In addition, no logs are output. What would be expected:
```bash
FieldMiddleware toLowerCase
value: Test
```

## Install history
```bash
npm i -g @nestjs/cli
nest new graphql-field-middleware
cd graphql-field-middleware
npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql
```

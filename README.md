# react-helmet-example

This is an example of using [react-helmet](https://github.com/nfl/react-helmet)
with [React](https://github.com/facebook/react)
and [react-router](https://github.com/rackt/react-router)
in a universal (client/server) context.

## Usage

Check out this repo (or simply copy the code)
and then, from inside the codebase, follow these steps:

1. Install requirements:

```shell
$ npm install
```

2. Run `webpack` to create the client-side script

```shell
$ webpack
```

3. Start the Express server

```shell
$ npm start
```

4. Visit [http://localhost:8080](http://localhost:8080) and check out
    the document's `<head>` node in its source.
    Then, change pages and watch as `react-helmet` keeps `<head>`
    in sync with the current route.

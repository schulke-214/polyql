# PolyQL

[![dependencies Status](https://david-dm.org/schulke-214/polyql/status.svg)](https://david-dm.org/schulke-214/polyql)
[![devDependencies Status](https://david-dm.org/schulke-214/polyql/dev-status.svg)](https://david-dm.org/schulke-214/polyql?type=dev)
[![npm](https://img.shields.io/npm/v/polyql.svg)](https://www.npmjs.com/package/polyql)
[![license](https://img.shields.io/github/license/schulke-214/polyql.svg)]()

An modern simple GraphQL-Client powered by the Fetch API.

> **Warning:** This library is very unstable at the moment. I'd suggest only playing around with it until it's stable (v1.0.0 upwards).

## Installation

```
yarn add polyql
```

## Documentation

The documentation is available [here](https://schulke-214.github.io/polyql).

## Quickstart

```ts
import { fetch } from 'polyql';

const query = `
    {
        Movie(title: "Inception") {
            releaseDate
            actors {
                    name
            }
        }
    }
`;

fetch('https://api.graph.cool/simple/v1/movies', query).then(data => console.log(data));
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Credits

The primary inspiration to build this library came from [graphql-request](https://github.com/prisma-labs/graphql-request) and [lokka](https://github.com/kadirahq/lokka). The only reason i built a client myself was that i really missed the out-of-the-box support for queries via `GET` / QueryString. No simple client were able to support that, without me configuring alot of stuff.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

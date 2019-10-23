# PolyQL

[![dependencies Status](https://david-dm.org/schulke-214/polyql/status.svg)](https://david-dm.org/schulke-214/polyql)
[![devDependencies Status](https://david-dm.org/schulke-214/polyql/dev-status.svg)](https://david-dm.org/schulke-214/polyql?type=dev)
[![npm](https://img.shields.io/npm/v/polyql.svg)](https://www.npmjs.com/package/polyql)
[![license](https://img.shields.io/github/license/schulke-214/polyql.svg)]()
[![dependabot](https://img.shields.io/badge/dependabot-enabled-brightgreen.svg?style=plastic&logo=dependabot)]()

An extremely simple GraphQL-Client powered by the Fetch API.

## Features

-   Unbeliveable simple to use
-   Easily extendable and therefore supports many different usecases
-   Modern promise-based API (`async` / `await`)
-   Typescript Support

## Installation

```sh
yarn add polyql
```

## Quickstart

Send a GraphQL query with a single line of code.

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

## API

### Setup

```ts
import { fetch, GraphQLClient } from 'polyql';

// run queries as a function
fetch(url, query, variables).then(data => console.log(data));

// ... or create a client which can be reused
const client = new GraphQLClient({ url, fetch: { headers: {} } });
const { data } = client.fetch(query, variables).then(data => console.log(data));
```

### Basic Querying

You can execute Queries with the `client.fetch` function. It takes the query as first and the variables as second parameter.

It returns a Promise which resolves to a `GraphQLResponse`:

```ts
interface GraphQLResponse {
	data?: any;
	errors?: GraphQLError[];
	extensions?: any;
	status: number;
}
```

<!-- prettier-ignore -->
```ts
const { data } = await client.fetch(`
    {
        allUsers {
            id
            name
        }
    }
`)

console.log(data.allUsers);
```

### Mutations

Mutations work pretty much the same.

<!-- prettier-ignore -->
```ts
const mutation = `
    mutation ($id: ID!, $name: String!) {
        actor: updateActor( id: $id, name: $name ) {
            name
        }
    }
`;

const variables = {
    id: 'ckjxb4324erhol324o32b4',
    name: 'John Cena'
}

const { data } = await client.fetch(mutation, variables)

console.log(data.actor);
```

### Fragments

You may have guessed it already.. string interpolation!

<!-- prettier-ignore -->
```ts
const actor = `
    on Actor {
        name
    }
`

const query = `
    query {
        allActors {
            ...${actor}
        }
    }
`;

const { data } = await client.fetch(query)

console.log(data.allActors);
```

## Advanced Usage

### Client Configuration

<!-- prettier-ignore -->
```ts
import { GraphQLClient } from 'polyql';

const client = new GraphQLClient({
    // the endpoint of the graphql api you want to speak to
    url: process.env.API_URL,
    // these options are passed directly to fetch
    fetch: {
        headers: {
            Authorization: `Token ${process.env.YOUR_TOKEN}`
        }
	}
});

const { data } = client.fetch(query, variables).then(data => console.log(data));
```

### Transporters

Transporters are the abstraction over raw HTTP requests. This Architecture is heavily inspired by [Lokka](https://github.com/kadirahq/lokka).

These transporters allow you to swap out the request execution. This allows you to opt into this library at a very low level to support your usecase.

Lets first look at the way you can swap out the default `HTTPBodyTransporter` with other built ins.

<!-- prettier-ignore -->
```ts
import { GraphQLClient, HTTPQueryStringTransporter } from 'polyql';

const url = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

const client = new GraphQLClient({
	// if the transporter is provided, 'url' and 'fetch' are ignored
    transporter: new HTTPQueryStringTransporter(url, options)
});
```

This `client` would now execute all queries as `GET`request and parameterize the query and the variables.

This allows you to build your own small Transporter for your specific usecase. You should still take a look at the already implemented Transporters - maybe one of them already fits your neeeds.

| Usage                                          | Description                                                                             |
| :--------------------------------------------- | :-------------------------------------------------------------------------------------- |
| `new HTTPBodyTransporter(url, options)`        | This is the default Transporter which serves most of the usecase you will encounter.    |
| `new HTTPQueryStringTransporter(url, options)` | This executes all queries as `GET`request and parameterize the query and the variables. |

#### Building your own Transporter

<!-- prettier-ignore -->
```ts
import { GraphQLTransporter, FetchOptions } from 'polyql';

class YourAwesomeTransporter implements GraphQLTransporter {
    url: string;
    options: FetchOptions;

    constructor(url: string, options: FetchOptions = {}) {
        this.url = url;
        this.options = options;
    }

    public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
        // here you can do what ever you want as long as you return a GraphQLResponse
    }
}
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

PolyQL use [SemVer](http://semver.org/) for versioning.

## Credits

The primary inspiration to build this library came from [graphql-request](https://github.com/prisma-labs/graphql-request) and [lokka](https://github.com/kadirahq/lokka). The only reason i built a client myself was that i really missed the out-of-the-box support for queries via `GET` / QueryString. No simple client were able to support that, without me configuring alot of stuff.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.

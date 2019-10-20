# micro-graphql-client

An extremely simple GraphQL-Client powered by the Fetch API.

## Features

-   Unbeliveable simple to use
-   Easily extendable and therefore supports many different usecases
-   Modern promise-based API (`async` / `await`)
-   Typescript Support

## Install

```sh
yarn add micro-graphql-client
```

## Quickstart

Send a GraphQL query with a single line of code.

```js
import { fetch } from 'micro-graphql-client';

const query = `{
	Movie(title: "Inception") {
		releaseDate
		actors {
			name
		}
	}
}`;

fetch('https://api.graph.cool/simple/v1/movies', query).then(data => console.log(data));
```

## Usage

```js
import { fetch, GraphQLClient } from 'micro-graphql-client';

// Run GraphQL queries/mutations using a static function
fetch(url, query, variables).then(data => console.log(data));

// ... or create a GraphQL client instance to send requests
const client = new GraphQLClient({ url, fetch: { headers: {} } });
client.fetch(query, variables).then(data => console.log(data));
```

## Examples

### Authentication via HTTP header

```js
import { GraphQLClient } from 'micro-graphql-client';

(async () => {
	const client = new GraphQLClient({
		url: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
		fetch: {
			headers: {
				Authorization: 'Token MY_TOKEN'
			}
		}
	});

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

	const data = await client.fetch(query);
	console.log(data);
})().catch(console.error);
```

<!-- [TypeScript Source](examples/authentication-via-http-header.ts) -->

### Passing more options to fetch

```js
import { GraphQLClient } from 'micro-graphql-client';

(async () => {
	const client = new GraphQLClient({
		url: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
		fetch: {
			credentials: 'include',
			mode: 'cors'
		}
	});

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

	const data = await client.fetch(query);
	console.log(data);
})().catch(console.error);
```

<!-- [TypeScript Source](examples/passing-more-options-to-fetch.ts) -->

### Using variables

```js
import { fetch } from 'micro-graphql-client';

(async () => {
	const url = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

	const query = `
		query getMovie($title: String!) {
			Movie(title: $title) {
				releaseDate
				actors {
					name
				}
			}
		}
	`;

	const variables = {
		title: 'Inception'
	};

	const data = await fetch(url, query, variables);
	console.log(data));
})().catch(console.error);
```

[TypeScript Source](examples/using-variables.ts)

### Error handling

```js
import { fetch } from 'micro-graphql-client';

(async () => {
	try {
		const data = await fetch(url, query);
		console.log(data));
	} catch (error) {
		console.error(error));
	}
})().catch(console.error);
```

[TypeScript Source](examples/error-handling)

### Using `require` instead of `import`

```js
const { fetch } = require('micro-graphql-client');

(async () => {
	const url = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

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

	const data = await request(url, query);
	console.log(data);
})().catch(console.error);
```

## FAQ

## Credits

The primary inspiration to build this library came from [micro-graphql-client]() and [lokka](). The only reason i built a client myself was that i really missed the out-of-the-box support for queries via `GET` / QueryString. No simple client were able to support that, without me configuring alot of stuff.

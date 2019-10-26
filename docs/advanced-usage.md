# Advanced Usage

## Client Configuration

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

## Transporters

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

### Building your own Transporter

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

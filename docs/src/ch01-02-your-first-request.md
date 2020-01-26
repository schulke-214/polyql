# Your First Request

Let's dive right into it:

```js
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

Whats happening here? We're using the `fetch` function to send a POST request with the serialized query as body to the endpoint we passed as first argument.

The definition of `fetch` looks like the following:

```js
async function fetch(url: string, query: string, variables?: Variables): Promise<GraphQLResponse>
```

Ignore the `GraphQLResponse` and the `Variables` type for now. We'll dive deeper into that in [another chapter](./ch03-00-advanced-usage.md). We can break down what happens inside the `fetch` function into 2 small steps:

-   We create a new `GraphQLClient` with the most common settings and the provided url and variables.
-   We use the client to send the request and return the promise.

That's all - pretty easy huh!?

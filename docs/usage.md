# Usage

## Setup

```ts
import { fetch, GraphQLClient } from 'polyql';

// run queries as a function
fetch(url, query, variables).then(data => console.log(data));

// ... or create a client which can be reused
const client = new GraphQLClient({ url, fetch: { headers: {} } });
const { data } = await client.fetch(query, variables);
```

## Basic Querying

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

## Mutations

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

## Fragments

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

# Introduction

PolyQL is a modern and lightweight GraphQL Client with a modern promise based API - built for `async` / `await`. With a bundlesize of less than `7KB` PolyQL is a lot smaller and simpler than [relay][relay] and [apollo][apollo]. Yet powerful enough to power medium sized projects. Due to it's simplicity you can easily implement your own set of features needed for your specific usecase. A well documented [API](./ch04-00-api-reference.md) built with plugins in mind supports you doing that.

## Quickstart

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

[relay]: https://github.com/facebook/relay
[apollo]: https://github.com/apollographql/apollo-client

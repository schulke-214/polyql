---
actionText: Get Started →
description: A modern and lightweight GraphQL Client.
features:
    - title: Lightweight
      details: With less than 7kb bundle size PolyQL is a perfect fit for smaller apps.
    - title: Extendable
      details: Easily extendable so you can make it work for your specific usecase.
    - title: Modern
      details: Really simple modern promise based API - built for async / await.
---

## Quickstart

Send a GraphQL query with a single line of code.

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

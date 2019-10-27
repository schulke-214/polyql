---
home: true
heroImage: logo.svg
actionText: Get Started →
actionLink: /usage
description: A modern and lightweight GraphQL Client.
features:
    - title: Lightweight
      details: With less than 3kb bundle size PolyQL is a perfect fit for smaller apps.
    - title: Extendable
      details: Easily extendable so you can make it work for your specific usecase.
    - title: Modern
      details: Really simple modern promise based API - built for async / await.
footer: MIT Licensed
---

## Installation

:::warning
This library is very unstable at the moment. I'd suggest only playing around with it until it's stable (v1.0.0 upwards).
:::

```
yarn add polyql
```

```html
<script src="https://unpkg.com/polyql@latest/lib/polyql.umd.js" />
```

:::tip
If you include the umd module the `polyql` variable will be available on the window object.
:::

## Quickstart

Send a GraphQL query with a single line of code.

<<< @/examples/quickstart.ts

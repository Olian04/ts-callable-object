# ts-callable-object

```ts
import { callableObject } from 'ts-callable-object';

const math = callableObject((a: number, b: number) => {
  return a + b
}, {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mult: (a, b) => a * b,
  div: (a, b) => a / b,
})

math(4, 2) // ts-ok, js-ok, returns 6
math.add(4, 2) // ts-ok, js-ok, returns 6
math.sub(4, 2) // ts-ok, js-ok, returns 2
math.mult(4, 2) // ts-ok, js-ok, returns 8
math.div(4, 2) // ts-ok, js-ok, returns 2
```

**ts-ok** means that typescript doesn't throw any errors and provides full type support.<br>
**js-ok** means that the code runs, doesn't throw any runtime exceptions, and returns the expected value.

## Install

**NPM:** [`npm i ts-callable-object`](https://www.npmjs.com/package/ts-callable-object)

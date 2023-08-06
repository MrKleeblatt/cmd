# Better info, debug, warn and error

## **WARNING**

This **will** change the default behaviour of:

- console.info
- console.debug
- console.warn
- console.error

## How to use

To use this library, simply import it at the beginning of your project. You can either import some functions from the
library, or just import the `mod.ts` file, which it self will modify the console behaviour on program startup.

```ts
import "https://raw.githubusercontent.com/MrKleeblatt/cmd/master/mod.ts";
import * as Cmd from "https://raw.githubusercontent.com/MrKleeblatt/cmd/master/mod.ts";
import { customLog } from "https://raw.githubusercontent.com/MrKleeblatt/cmd/master/mod.ts";
```

# Typescript Simplified   <img src = "./uploads/TypeScript.png" width = "60" height = "60" style = "border-radius: 20px"> 

### *By reading and then having practical implementation of these concepts you can learn typescript, an easiest guide you'll find to learn, understand & implement typescript!*

⚠️ **Before you continue make sure that you have:**

```
- Learnt JS thoroughly & you're comfortable in it
- You have gone through the reasons and shortcomings due to which TS was made
```

` This tutorial divides Typescript in 9 sections each of them dependent on prevoius one, tailored in a way so that concepts will be easily absorbable.`

## PHASES: 

### PHASE 1 *--The Type system (Core)*:
+ `Type Annotations` (variables, params, return types)

+ Primitive types (`string`, `number`, `boolean`, `null`, `undefined`)

+ Use of `any`, `unknown`, `void`, `never`

+ Type `inference` (what TS figures out at its own)

+ `Union` types (number `|` string | unknown)

+ `Intersection` types (string `&` number)

+ `Literal types` (`"value 1"` | `"value 2"`)

+ Type Aliases (type)
---

### PHASE 2 *--Structuring Data*:
+ `Interfaces`

+ `Type` vs `Interface` (difference between them, when to use which)

+ Optional properties (use of optional modifier "`?`")

+ Use & purpose of `Readonly` properties

+ Use & purpose of `Index signatures`

+ Nested object types

+ `Arrays` & `Tuple` types
---

### PHASE 3 *--Functions in Typescript*:
+ Typed function parameters & return types

+ Optional & default parameters

+ Function overloads

+ Use of `Void` vs `Never` in functions

+ Typing `callbacks` & `higher-order functions`
---

### PHASE 4 *--Generics*:
+ What `generics` are & why they exist?

+ Generic functions

+ Generic `interfaces` & `types`

+ Generic constraints (`extends`)

+ Default generic `types`
---

### PHASE 5 *--Narrowing & Type Gurads*:
+ `typeof` narrowing

+ `instanceof` narrowing

+ `in` operator narrowing

+ Custom Type Guard functions (`is`)

+ Discriminated `Unions`
---

### PHASE 6 *--Classes in Typescript*:
+ Class basics with types

+ Access modifiers (`public`, `private`, `protected`)

+  `readonly` in classes

+  Implementing interfaces

+  Abstract classes

+  Typing `this`
---

### PHASE 7 *--Utility Types*:
+ **`Partial <T>`**

+ **`Required <T>`**

+ **`Readonly <T>`**

+ **`Pick <T,K>`**

+ **`Omit <T,K>`**

+ **`Record <K,V>`**

+ **`ReturnType<T>`**, **`Parameters<T>`**
---

### PHASE 8 *--Modules & declaration files*:
+ ES Modules in TS

+ **`@types`** packages (e.g. **`@types/express`**)

+ **`.d.ts`** declaration files -- what are they?

+ **`tsconfig.json`** -- must know points
---

### PHASE 9 *--Advanced Types*:
+ Mapped Types

+ Conditional Types (**`T extends U ? X : Y`**)

+ Template literal Types

+ **`infer`** Keyword

+ **`keyof`** & **`typeof`** operators
---

### PHASE 10 *--TS in Node.js/Express.js*:
+ Typing Express **`Request`**, **`Response`**, **`NextFunction`**

+ Extending Express types (custom **`req.user`** etc.)

+ Typing async-await & Promises

+ Typing environment variables 

+ Typing RDB query results 

+ Error handling patterns in **`TS`**



<hr style = "margin-top:40px; padding:1px; background:white;">
<hr style = " padding:1px; background:white;">

<span style = "font-size:36px;"> DETAILED TUTORIAL OF EACH CONCEPT</span>
<hr style = " padding:1px; background:white;">
<hr style = "margin-bottom:40px; padding:1px; background:white;">

<span style = "font-size:25px;"> Concept 1:</span>
<hr style = " padding:0.01px; background:grey;">

**`Type Annotations`** (variables, params, return types)

<p style = " font-size:16px;">In Typescript you've to specify the types for variables, function parameters & returns (fun()=>returnedValue). Syntax of type anotating is:</p>

```javascript
// variable example:

const name: string = ""; 

//:string is type annotation for variable name (which is now of string type!)
```

```javascript
// parameters example:

const myFun = (name:string, age: number)=> {
    //:string is type annotation for name parameter & :number is type annotation for age parameter
} 
```

```javascript
// return type example:

const myFun = (name:string, age: number) : string => {

    return `Hi Mr. ${name}, your age is ${age}.`

    //Here function is bound to return a string only.
} 

//:string is type annotation which this function will return!
```

<span style = "font-size:25px;"> Concept 2:</span>
<hr style = " padding:0.01px; background:grey;">

**`Type Annotations`** (variables, params, return types)








































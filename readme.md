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

<span style = "font-size:25px;"> **Concept 1**:</span>
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

**`Primitive types`** (variables, params, return types)

+ **`string`**

Usage example:
```javascript
const name: string = "Qasim";
//Name is now of type string
```


+ **`number`**

Usage example:
```javascript
const height: number = 6;
//Height is now of type number
```


+ **`boolean`**

Usage example:
```javascript
const isAdmin: boolean = false;
//isAdmin is now of type boolean
```


+ **`null`**


Usage example:
```javascript
let result: null = null;
//result is now of type null
```


+ **`undefined`**

Usage example:
```javascript
let score: undefined = undefined;
//score is now of type undefined
```


<span style = "font-size:25px;"> Concept 3:</span>
<hr style = " padding:0.01px; background:grey;">

**`Use of`** (any, unknown, never, void)

+ **`any`**:

**`⚠️ Note`** any is most tricky type available in TS. Wherever it is used, it turns off Type checking for that very data. This can be dangerous as well, be cautious before using **`any`**, it's quite rarely used.

Usage example:
```javascript
let data: any = 42;
data = "hello"; // allowed
data = true;    // allowed
data.foo.bar.baz(); // TS (as turned off due to any) won't complain — but this will crash at runtime
```


+ **`unknown`**:

Unknown is used at places were you don't know the type in advance but you prepare for type-safety at runtime.

Usage example:
```javascript
let input: unknown = getUserInput();

input.toUpperCase(); 
// TS ERROR — you haven't verified it's a string

if (typeof input === "string") {
  input.toUpperCase(); 
  // Now TS allows it — you proved it's a string
}
```

+ **`void`**:

Void is used with function which determines that a function returns nothing (at application level).


Usage example:
```javascript
    function logMessage(msg: string): void {
  console.log(msg);
  
  // no return statement — that's the point
}

```

+ **`never`**:

never means the function never returns — it either throws or runs infinitely.


Usage example:
```javascript
  function throwError(msg: string): never {
  throw new Error(msg);
  // nothing after this executes — ever
}

```


<span style = "font-size:25px;"> Concept 4:</span>
<hr style = " padding:0.01px; background:grey;">

**`Type inference   `** (the ability of TS to figure out types on its own when the value is obvious.)

Usage example:
```javascript

let port = 3000; // TS infers: number
let name = "john"; // TS infers: string
let active = true; // TS infers: boolean

```


**`⚠️ Important`:** 

Infered types are locked, you can't reassign different typed value to already infered one!


Usage example:
```javascript

let port = 3000;
port = "hello"; 

// TS ERROR — it already inferred port is a number

```

<span style = "font-size:25px;"> Concept 5:</span>
<hr style = " padding:0.01px; background:grey;">

**`Union Types, usage of | `** (A variable can be of either type)

Usage example:
```javascript
let id: string | number;

id = 101;     // allowed
id = "u_101"; // allowed
id = true;    // TS ERROR

//function based example (params with union)

function findUser(id: string | number) {
  // id could come as integer from DB or string from URL param
}
```

<span style = "font-size:25px;"> Concept 6:</span>
<hr style = " padding:0.01px; background:grey;">

**`Intersection Types`** (A value must satisfy all of these types simultaneously)

Usage example:
```javascript
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const user: Person = {
  name: "john", // required — from HasName
  age: 25       // required — from HasAge
};

```

<span style = "font-size:25px;"> Concept 7:</span>
<hr style = " padding:0.01px; background:grey;">

**`Literal Types`** (makes sure that these strings are permissible only)

Usage example:
```javascript
let method: "GET" | "POST" | "PUT" | "DELETE";

method = "GET";    // allowed
method = "PATCH";  
// TS ERROR — PATCH is not in the allowed list
```

<span style = "font-size:25px;"> Concept 8:</span>
<hr style = " padding:0.01px; background:grey;">

**`Type aliases`** (Act as variables for types)

Usage example:
```javascript

type UserId = string | number;
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type Status = "active" | "inactive" | "banned";

let id: UserId = 42;
let method: HttpMethod = "POST";
let userStatus: Status = "active";
```

<span style = "font-size:25px;"> Phase 1 Map:</span>
<hr style = " padding:0.01px; background:grey;">

`Type Annotations     → you label what type a variable/param/return is`

`Primitive Types      → the basic building blocks`


`any/unknown/never/void → special-purpose types with specific jobs`


`Type Inference       → TS figures it out when it's obvious`


`Union Types          → value can be A OR B`


`Intersection Types   → value must be A AND B`


`Literal Types        → value must be this exact thing`


`Type Aliases         → name your types, reuse them`



<span style = "font-size:25px;"> Concept 9:</span>
<hr style = " padding:0.01px; background:grey;">

**`Interfaces`** (makes sure every user object  must have these exact properties with these exact types.)

Usage example:
```javascript
interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "john",
  email: "john@example.com"
};
```
Interface strictly ensures that mentioned properties are not missed, wrongly typed, or any extra properties are injected.



<span style = "font-size:25px;"> Concept 10:</span>
<hr style = " padding:0.01px; background:grey;">

**`type`** vs **`interface`** (variables, params, return types)

**`⚠️ Important`:** 

The difference between types and interface confuses most no. of people.

For objects — they're mostly identical:


Usage example:
```javascript
// Both work the same way for objects

interface User {
  id: number;
  name: string;
}

type User = {
  id: number;
  name: string;
}
```
The real differences:

| Feature               | interface          | type                  |
|-----------------------|--------------------|-----------------------|
| Extending             | `extends` keyword  | `&` intersection      |
| Primitives / Unions   |  Cannot          |  Can                |
| Declaration Merging   | Yes            |  No                 |
| Best used for         | Object shapes      | Everything else       |





Declaration merging — only interfaces can do this:



Usage example:

```javascript
interface User { id: number; }
interface User { name: string; }
 // TS merges both — valid

type User = { id: number; }
type User = { name: string; } 
// TS ERROR — duplicate identifier
```

<span style = "font-size:25px;"> Concept 11:</span>
<hr style = " padding:0.01px; background:grey;">

**`Optional properties`** (Not every property is always present. A user might not have a profile picture. A request body might have optional fields.)

Usage example:
```javascript

//Add ? after the property name:

interface User {
  id: number;
  name: string;
  avatar?: string; // optional — may or may not exist
}

const user1: User = { id: 1, name: "john" };              //allowed

const user2: User = { id: 2, name: "jane", avatar: "url" };                 //allowed
```


<span style = "font-size:25px;"> Concept 12:</span>
<hr style = " padding:0.01px; background:grey;">

**`Readonly Properties`** (Some properties should never change after creation. A user's id from the database should never be reassigned.)


Usage example:
```javascript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "john" };
user.name = "jane"; //  allowed
user.id = 99;      
 //  TS ERROR — id is readonly
```

`readonly` = "set once, never again."


<span style = "font-size:25px;"> CONCEPT 13  :</span>
<hr style = " padding:0.01px; background:grey;">

**`Index Signatures`** (Sometimes you don't know all the property names in advance — like storing dynamic query params or config objects.)


Usage example:
```javascript
interface QueryParams {
  [key: string]: string;
}

const params: QueryParams = {
  page: "1",
  limit: "10",
  search: "john"
};
  // any string key with string value — all valid
```

<span style = "font-size:25px;"> Concept 14:</span>
<hr style = " padding:0.01px; background:grey;">

**`Nested Object Types`** (Real data is never flat. A user has an address. An order has a product. A request has a nested body.)


Usage example:
```javascript
interface Address {
  city: string;
  country: string;
}

interface User {
  id: number;
  name: string;
  address: Address; 
  // nested interface
}

const user: User = {
  id: 1,
  name: "john",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};
```

Or inline if used only once:
```javascript

interface User {
  id: number;
  address: {
    city: string;
    country: string;
  };
}

```



<span style = "font-size:25px;"> Concept 15:</span>
<hr style = " padding:0.01px; background:grey;">

**` Arrays & Tuple Types`** 

Usage example of arrays:
```javascript
// Two equivalent syntaxes

const ids: number[] = [1, 2, 3];
const ids: Array<number> = [1, 2, 3];
 // generic syntax — you'll understand this in Phase 4
```


Usage example of arrays of objects:
```javascript

// Two equivalent syntaxes
const ids: number[] = [1, 2, 3];
const ids: Array<number> = [1, 2, 3]; // generic syntax — you'll understand this in Phase 4
```

Tuples: "An array with fixed length and fixed types at each position"


Usage example:
```javascript
const entry: [number, string] = [1, "john"];

entry[0] // number, allowed
entry[1] // string, allowed
entry[2] // TS ERROR — tuple only has 2 positions

//Function based example:

// A function returning both a value and an error — like Go-style error handling
function getUser(): [User | null, string | null] {

  // returns [user, null] on success
  // returns [null, errorMessage] on failure
}
```


<span style = "font-size:25px;"> Phase 2 Map:</span>
<hr style = " padding:0.01px; background:grey;">

`Interface          → contract for object shape`

`type vs interface  → interface for objects, type for everything else`

`Optional (?)       → property may or may not exist`

`Readonly           → property set once, never changed`

`Index Signatures   → dynamic keys with known value types`

`Nested Objects     → objects inside objects`

`Arrays & Tuples    → arrays with types, tuples with fixed positions`






























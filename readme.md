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

### PHASE 10 *--TS in Node.js/Express.js (optional)*:
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



<span style = "font-size:25px;"> Concept 15:</span>
<hr style = " padding:0.01px; background:grey;">

**`Functions in TypeScript`** (In TS we've to define a function's contract — what goes in, what comes out, no surprises like JS.)

Usage example:
```javascript
function createUser(name: string, age: number): boolean {
  // TS enforces: name must be string, age must be number
  // return value must be boolean
  return true;
}

// Arrow function (same rules):

const createUser = (name: string, age: number): boolean => {
  return true;
};

```

<span style = "font-size:25px;"> Concept 16:</span>
<hr style = " padding:0.01px; background:grey;">

**`Optional Parameters`** (? is used with a parameter)

Usage example:
```javascript
function getUsers(limit?: number): void {
  // limit is number | undefined
  // caller can pass it or not
}

getUsers(10); // allowed
getUsers();   // allowed
```

Optional parameters must always come after required ones, this is because JS maintains position of parameters:

Usage example:
```javascript
function getUsers(filter: string, limit?: number) {} // allowed
function getUsers(limit?: number, filter: string) {} // TS ERROR
```

**Default Parameters**

Provide a fallback value when none is passed:

Usage example:
```javascript
function getUsers(limit: number = 10): void {
  // if caller passes nothing, limit = 10
}

getUsers();    // limit = 10
getUsers(25);  // limit = 25
```


<span style = "font-size:25px;"> Concept 17:</span>
<hr style = " padding:0.01px; background:grey;">

**`Function Overloads`** 

(Same function name, different parameter combinations, different return types depending on input)

Usage example:
```javascript
// Overload signatures — define all valid combinations

function formatId(id: number): string;
function formatId(id: string): number;

// Implementation signature — handles all cases

function formatId(id: number | string): string | number {
  if (typeof id === "number") return `user_${id}`;
  return parseInt(id);
}
```

**Without Overload signatures:**

Usage example:
```javascript
function formatInput(arg: number | string): string | number {
  if (typeof arg === 'number') return `${arg}`;
  return parseInt(arg);
}

const result = formatInput(42);

// TS thinks: result is string | number — imprecise

result.toUpperCase(); 

// TS ERROR — might be number
```

**With Overload Signatures**

Usage example:
```javascript
function formatInput(arg: number): string;

function formatInput(arg: string): number;

function formatInput(arg: number | string): string | number {
  if (typeof arg === 'number') return `${arg}`;
  return parseInt(arg);
}

const result = formatInput(42);
// TS knows: result is string — precise
result.toUpperCase();
 // — TS is certain it's a string
```





<span style = "font-size:25px;"> Concept 18:</span>
<hr style = " padding:0.01px; background:grey;">

**`void`** vs **`never`** in Functions

Usage example:
```javascript
// void — completes, returns nothing useful
function logError(msg: string): void {
  console.error(msg);
}

// never — never completes
function throwError(msg: string): never {
  throw new Error(msg);
}

// Combined — real Express pattern
function validateToken(token: string | undefined): void {
  if (!token) throwError("No token provided"); 
  // never returns
  // TS knows: if we reach here, token is definitely string
}
```

<span style = "font-size:25px;"> Concept 19:</span>
<hr style = " padding:0.01px; background:grey;">

**`Typing Callbacks & Higher-Order Functions`** 

(A function that receives another function as an argument — both need to be typed.)

**Typing a callback:**

Usage example:
```javascript
// The callback type: takes a string, returns void

function processUser(id: number, callback: (name: string) => void): void {
  const name = db.getUserName(id);
  callback(name);
}

// Usage
processUser(1, (name) => {
  console.log(name);
// TS knows name is string — inferred from callback type
});
```

**Higher-order functions:**

Usage example:
```javascript
// A function that returns a function
function createMultiplier(factor: number): (value: number) => number {
  return (value) => value * factor;
}

const double = createMultiplier(2);
double(5); // 10 — TS knows this returns number
```

**HOF That TAKES a Function**

Usage example:
```javascript
//↓ this parameter is a function

function run(callback: (name: string) => void): void {
  callback("john");

   // call the function passed in
}
```

**Explanation:**

+ run takes one argument called callback
+ callback is a function that accepts a string and returns void
+ run itself returns void


Usage example:
```javascript
run((name) => {
  console.log(name);
   // TS already knows name is string — already specified above
});
```

<span style = "font-size:25px;"> Phase 3 Map:</span>
<hr style = " padding:0.01px; background:grey;">



`Typed params & returns   → define the contract at both ends`

`Optional parameters      → caller can skip them — type becomes T | undefined`

`Default parameters       → fallback value — no ? needed`

`Function overloads       → same name, multiple valid signatures`

`void vs never            → completes-but-returns-nothing vs never-completes`

`Callbacks & HOF          → type the function being passed, type what it returns`



<span style = "font-size:25px;"> Concept 20:</span>
<hr style = " padding:0.01px; background:grey;">

**`What Generics Are & Why They Exist`** 

(generics are like a type placeholder — like a variable but for types.)

example:
```javascript
function getFirstItem <T> (arr: T[]): T {
  return arr[0];
}
```

**T is not a real type. It's a slot — TS fills it in when you call the function:**


Usage example:
```javascript

getFirstItem([1, 2, 3]);        
  // T = number → returns number

getFirstItem(["a", "b", "c"]);   
  // T = string → returns string

getFirstItem([{id: 1}, {id: 2}]); 
  // T = {id: number} → returns {id: number}

```

**One function. Works for every type. Full type safety preserved.**

<p>T is just a convention — stands for "Type." You can name it anything: T, K, V, TData, TResponse.</p>



<span style = "font-size:25px;"> Concept 21:</span>
<hr style = " padding:0.01px; background:grey;">

**`Generic Functions:`**


Usage example:
```javascript
// Single generic
function wrap<T>(value: T): T[] {
  return [value];
}

wrap(42);      // returns number[]
wrap("hello"); // returns string[]
```

**Multiple generics:**

Usage example:
```javascript
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

pair("id", 42);     
  // returns [string, number]
pair("name", "john"); 
  // returns [string, string]

```

<span style = "font-size:25px;"> Concept 22:</pan>
<hr style = " padding:0.01px; background:grey;">

**` Generic Interfaces & Types:`**

example:
```javascript

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

``` 

**Using it with any data shape:**


Usage example:
```javascript
// User response
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "john", email: "j@j.com" },
  status: 200,
  message: "success"
};

// String response
const errorResponse: ApiResponse<string> = {
  data: "something went wrong",
  status: 400,
  message: "error"
};

```

<span style = "font-size:25px;"> Concept 23:</span>
<hr style = " padding:0.01px; background:grey;">

**` Generic Constraints `** (extends)

**Problem which occurs:**


 example:
```javascript
function getLength<T>(value: T): number {
  return value.length; 
  //  TS ERROR — T might be number, boolean, anything
}
```

**TS doesn't know T has a .length property. It could be anything.**

**The fix Constrain T**

example:
```javascript
function getLength<T extends { length: number }>(value: T): number {
  return value.length; 
  //  — TS knows T has .length
}

getLength("hello");     
//  string has .length
getLength([1, 2, 3]);   
//  array has .length
getLength(42);          
//  TS ERROR — number has no .length
```

**Constraining to an interface:**

Usage example:
```javascript
interface HasId {
  id: number;
}

function logId<T extends HasId>(entity: T): void {
  console.log(entity.id); 
  //  guaranteed to exist
}

logId({ id: 1, name: "john" }); 
// 
logId({ name: "john" });        
//  TS ERROR — no id property
```


<span style = "font-size:25px;"> Concept 24:</span>
<hr style = " padding:0.01px; background:grey;">

**`Default Generic Types`**
 (just like default parameters in functions  generics can have defaults:)

Usage example:
```javascript

interface ApiResponse <T = string> {
  data: T;
  status: number;
}

// Without specifying T — defaults to string

const response: ApiResponse = {
  data: "success message",
  status: 200
};

// Specifying T explicitly
const response: ApiResponse <User> = {
  data: { id: 1, name: "john", email: "j@j.com" },
  status: 200
};

```

<span style = "font-size:25px;"> Phase 4 Map:</span>
<hr style = " padding:0.01px; background:grey;">

`What generics are    → type placeholders filled at call time`

`Generic functions    → write once, works for any type`

`Generic interfaces   → one interface, infinite type variations`

`Constraints          → T must have at least these properties`

`Default generics     → fallback type when none is specified`



<span style = "font-size:25px;"> Concept 25:</span>
<hr style = " padding:0.01px; background:grey;">

**`typeof`** Narrowing 

JS example:
```javascript
function process(value: string | number): void {
  if (typeof value === "string") {
    value.toUpperCase(); 
    //  TS knows it's string here
  } else {
    value.toFixed(2); 
    //  TS knows it's number here
  }
}
```

**TS reads typeof check and narrows the type inside each block.**

TS example:
```javascript
function handleId(id: string | number): string {
  if (typeof id === "number") {
    return `user_${id}`;
  }
  return id.toUpperCase();
}
```

<span style = "font-size:25px;"> Concept 26:</span>
<hr style = " padding:0.01px; background:grey;">

**`instanceof`** Narrowing 

**It is used when working with classes and objects — not primitives.**


Usage example:
```javascript

class ApiError {
  message: string;
  statusCode: number;
  constructor(message: string, statusCode: number) {
    this.message = message;
    this.statusCode = statusCode;
  }
}


class ValidationError {
  field: string;
  constructor(field: string) {
    this.field = field;
  }
}


function handleError(error: ApiError | ValidationError): void {
  if (error instanceof ApiError) {
    console.log(error.statusCode); 
    //  TS knows it's ApiError
  } else {
    console.log(error.field); 
    //  TS knows it's ValidationError
  }
}

```


<span style = "font-size:25px;"> Concept 27:</span>
<hr style = " padding:0.01px; background:grey;">

**`in`**  Operator Narrowing 

**It is used when working with plain objects, not class instances. Checks if a property exists on an object.**

Usage example:
```javascript

interface Admin {
  role: string;
  permissions: string[];
}

interface Guest {
  sessionId: string;
}


function handleUser(user: Admin | Guest): void {
  if ("permissions" in user) {
    console.log(user.permissions);
     // TS knows it's Admin
  } else {
    console.log(user.sessionId);
     // TS knows it's Guest
  }
}

```


**in = "Does this property exist on this object?"**


<span style = "font-size:25px;"> Concept 28:</span>
<hr style = " padding:0.01px; background:grey;">

**`Custom Type Guard Functions`** 

**Sometimes typeof, instanceof, and in aren't enough. We need custom logic to determine a type.**

Problem:
```javascript

function processUser(user: Admin | Guest): void {
  if (complexValidation(user)) {
    user.permissions; 

    //  TS still doesn't know — it can't read your logic
  }
}

```

Solution:
```javascript

//  user is Admin" — called a type predicate

function isAdmin(user: Admin | Guest): user is Admin {
  return "permissions" in user;
}

function processUser(user: Admin | Guest): void {
  if (isAdmin(user)) {
    user.permissions; 
    // TS now knows — isAdmin proved it
  }
}

```


<span style = "font-size:25px;"> Concept 29:</span>
<hr style = " padding:0.01px; background:grey;">

**`Discriminated Unions`** 

**Add a common property to each type in a union — use that property to tell them apart.**


Problem without it:
```javascript

interface Circle { radius: number; }
interface Square { side: number; }

function getArea(shape: Circle | Square): number {
  // How do we know which one it is?
  // No shared property to check
}

```


Fix of this problem:
```javascript

interface Circle {
  kind: "circle"; // discriminant — unique literal type
  radius: number;
}

interface Square {
  kind: "square"; // discriminant — unique literal type
  side: number;
}

function getArea(shape: Circle | Square): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2; 
    // TS knows it's Circle
    case "square": return shape.side ** 2;             
    // TS knows it's Square
  }
}

```

<span style = "font-size:25px;"> Phase 5 map:</span>
<hr style = " padding:0.01px; background:grey;">


`typeof narrowing       → for primitives — string, number, boolean
`

`instanceof narrowing   → for class instances
`

`in narrowing           → for plain objects — check property existence`


`Custom type guards     → custom logic + type predicate (is keyword)`

`Discriminated unions   → shared literal property tells types apart`


<span style = "font-size:25px;"> Concept 36:</span>
<hr style = " padding:0.01px; background:grey;">

**`Partial<T>`** 

**When updating a user — you don't always send every field. Only the changed ones.**

Usage example:
```javascript

// Without Partial — you'd have to redefine a whole new interface

interface UpdateUser {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
}

// With Partial — TS does it for you

type UpdateUser = Partial<User>;

// Every property becomes optional automatically

```


<span style = "font-size:25px;"> Concept 37:</span>
<hr style = " padding:0.01px; background:grey;">

**`Required<T>`**

**The exact opposite of Partial. Forces every property to be present, even optional ones.**


Usage example:
```javascript

interface Config {
  host?: string;
  port?: number;
  timeout?: number;
}

type StrictConfig = Required<Config>;
// host, port, timeout — all now mandatory

```

<span style = "font-size:25px;"> Concept 38:</span>
<hr style = " padding:0.01px; background:grey;">

**`Readonly<T>`** 

**Prevents any property from being modified after creation.**


Usage example:
```javascript

type FrozenUser = Readonly<User>;

const user: FrozenUser = {
  id: 1,
  name: "john",
  email: "j@j.com",
  password: "hashed",
  role: "admin"
};

user.name = "jane"; 

// TS ERROR — all properties are readonly

```

<span style = "font-size:25px;"> Concept 39:</span>
<hr style = " padding:0.01px; background:grey;">

**`Pick<T, K>`** 

**Having a full interface but only need specific properties from it.**

Usage example:
```javascript

// Only need id and name — not the full User
type UserPreview = Pick<User, "id" | "name">;

// Equivalent to writing:
interface UserPreview {
  id: number;
  name: string;
}

```

<span style = "font-size:25px;"> Concept 40:</span>
<hr style = " padding:0.01px; background:grey;">

**`Omit<T, K>`** 

**Opposite of Pick. Take everything except specified properties.**


Usage example:
```javascript

// Everything except password

type SafeUser = Omit<User, "password">;

// Equivalent to:

interface SafeUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

```


<span style = "font-size:25px;"> Concept 41:</span>
<hr style = " padding:0.01px; background:grey;">

**`Record <K, V>`** 


**Used when we create an object type where you know the key type and value type — but not specific key names.**


Usage example:
```javascript

// An object where every key is a string and every value is a number

type ScoreBoard = Record<string, number>;

const scores: ScoreBoard = {
  john: 95,
  jane: 87,
  alex: 91
};

```


Usage example:
```javascript

type Role = "admin" | "user" | "guest";

type RolePermissions = Record<Role, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  user: ["read"],
  guest: []
  // Missing any role → TS ERROR
};

```

<span style = "font-size:25px;"> Concept 42:</span>
<hr style = " padding:0.01px; background:grey;">

**`ReturnType<T> & Parameters<T>`** 

**ReturnType<T> — extract what a function returns:**

Usage example:
```javascript

function getUser(): { id: number; name: string } {
  return { id: 1, name: "john" };
}

type UserResult = ReturnType<typeof getUser>;


// UserResult = { id: number; name: string }
// You didn't need to define this separately

```

**Parameters T extract a function's parameter types:**

Usage example:
```javascript

function createUser(name: string, age: number, role: string): void {}

type CreateUserParams = Parameters<typeof createUser>;

// CreateUserParams = [string, number, string]
// A tuple of all parameter types

```

**ReturnType T = "Give me the type that T returns."**

**ParametersT = "Give me the types of T's parameters as a tuple."**

<span style = "font-size:25px;"> Phase 6 Map:</span>
<hr style = " padding:0.01px; background:grey;">

**Partial < T >      → all properties optional**

**Required < T >     → all properties mandatory**

**Readonly < T >     → all properties locked**

**Pick<T, K>      → only these properties**

**Omit<T, K>      → everything except these**

**Record<K, V>    → object with typed keys and values**

**ReturnType< T >   → extract return type from function**

**Parameters < T >   → extract parameter types from function**





<span style = "font-size:25px;"> Concept 43:</span>
<hr style = " padding:0.01px; background:grey;">

**`ES Modules in TypeScript`** 

**TS uses ES Module syntax, same as modern JS**


JS example:
```javascript

// Importing

import express from "express";
import { Router } from "express";
import type { Request, Response } from "express"; // type-only import

// Exporting

export const PORT = 3000;
export function createServer() { ... }
export default app;

```

**import type, what is it?**

Usage example:
```javascript

import type { Request, Response } from "express";

```


<span style = "font-size:25px;"> Concept 44:</span>
<hr style = " padding:0.01px; background:grey;">

**`@types Packages`** 

Usage example:
```javascript

npm install --save-dev @types/express
npm install --save-dev @types/node
npm install --save-dev @types/mysql2

```


After installing — TS immediately knows:

+ What `Request` looks like

+ What `Response` looks like

+ What `app.get()` expects

+ What `next()` does


**Three situations exist in TS**


Usage example:
```javascript

// 1. Package has built-in types — nothing needed

import Zod from "zod"; 
// zod ships its own types

// 2. Package needs @types — install separately

import express from "express"; 
// needs @types/express

// 3. Package has no types anywhere — you write them yourself

import oldPackage from "old-package";
 // no types exist — your job now

```


<span style = "font-size:25px;"> Concept 45:</span>
<hr style = " padding:0.01px; background:grey;">

**`.d.ts`** Declaration Files

Usage example:
```javascript

// user.d.ts — pure type information
declare interface User {
  id: number;
  name: string;
  email: string;
}

declare function getUser(id: number): User;

```

When to Write Them?

**A situation: JS package with no types:**

Usage example:
```javascript

// no @types/old-package exists
// you create: old-package.d.ts

declare module "old-package" {
  export function doSomething(value: string): boolean;
  export const version: string;
}

```


**Now TS understands old-package completely.**

**Another situation: If there are JS files in a TS project:**


Usage example:
```javascript

// legacy.js — old file you can't convert yet

// legacy.d.ts — type cover for it

declare function processData(input: any): string;

```


<span style = "font-size:25px;"> Concept 46:</span>
<hr style = " padding:0.01px; background:grey;">

**`tsconfig.json`** 

Usage example:
```javascript

{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}

```

**Every option explained:**

| Option          | What It Does                                                              |
|-----------------|---------------------------------------------------------------------------|
| target          | Which JS version to compile to — ES2020 for modern Node                   |
| module          | Module system — commonjs for Node.js                                     |
| outDir          | Where compiled JS goes — keep it in /dist                                |
| rootDir         | Where your TS source lives — keep it in /src                             |
| strict          | Enables all strict type checks — always true in production                |
| esModuleInterop | Lets you import express from "express" instead of import * as express    |
| skipLibCheck    | Skips type checking of .d.ts files — speeds up compilation               |



**strict: true — What It Actually Enables**

**One flag — enables all of these simultaneously:**


`strictNullChecks      → null and undefined are not assignable to other types`


`strictFunctionTypes   → stricter function type checking`


`noImplicitAny         → variables can't silently become any`


`strictPropertyInitialization → class properties must be initialized`

<span style = "font-size:25px;"> Phase 7 Map:</span>
<hr style = " padding:0.01px; background:grey;">


`ES Modules       → import/export syntax, import type for type-only imports`

`@types packages  → type definitions for JS libraries`

`.d.ts files      → pure type declarations, no implementation`

`tsconfig.json    → compiler control — strict, target, module, paths`




<span style = "font-size:25px;"> Concept 47:</span>
<hr style = " padding:0.01px; background:grey;">

**Typing Express `Request`, `Response`, `NextFunction`** 

**After installing @types/express — these three types become available:**

Usage example:
```javascript

import { Request, Response, NextFunction } from "express";

function getUser(req: Request, res: Response): void {
  const id = req.params.id;           // string
  const body = req.body;              // any — by default
  res.status(200).json({ id });
}

```


**Typing req.params and req.body precisely:**


Usage example:
```javascript

// Define the shape of params
interface UserParams {
  id: string; // params are always strings in Express
}

// Define the shape of request body
interface CreateUserBody {
  name: string;
  email: string;
  password: string;
}

// Pass them as generics to Request
function createUser(
  req: Request<{}, {}, CreateUserBody>,
  res: Response
): void {
  const { name, email, password } = req.body; // fully typed
  res.status(201).json({ name });
}

```


**`Request` generic signature:**

Usage example:
```javascript

Request <Params, ResBody, ReqBody, Query>

```


<span style = "font-size:25px;"> Concept 48:</span>
<hr style = " padding:0.01px; background:grey;">

**Extending `Express Types`** 

**The Problem:**

**When adding user data to req in auth middleware:**

example:
```javascript

req.user = { id: 1, role: "admin" }; 
//  TS ERROR
// Property 'user' does not exist on type 'Request'

```



**For fixing Declaration Merging is done**


**Creating a file: src/types/express.d.ts**


Usage example:
```javascript

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        role: string;
      };
    }
  }
}

```


**Now throughout the project:**

Usage example:
```javascript

req.user?.id;   // TS knows it exists
req.user?.role; // fully typed

```

<span style = "font-size:25px;"> Concept 49:</span>
<hr style = " padding:0.01px; background:grey;">

**Typing `Async/Await`  &  `Promises`:** 

**Basic async function:**

 example:
```javascript

async function getUser(id: number): Promise <User> {
  const user = await db.query(`SELECT * FROM users WHERE id = ?`, [id]);
  return user;
}

```

**Promise< User > = this function eventually resolves to a User.**



**With Express:**

Usage example:
```javascript

async function getUser(req: Request, res: Response): Promise<void> {
  const user = await userService.findById(Number(req.params.id));
  res.json(user);
}

```


**Return type is Promise< void > — not just void — because it's async.**

**Handling async errors properly:**

Usage example:
```javascript

async function getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await userService.findById(Number(req.params.id));
    res.json(user);
  } catch (error) {
    next(error);
    // pass to Express error handler
  }
}

```

<span style = "font-size:25px;"> Concept 50:</span>
<hr style = " padding:0.01px; background:grey;">

**`Typing Environment Variables`** 


**The problem we face:**

Usage example:
```javascript

const port = process.env.PORT;
 // type: string | undefined

```


**process.env always returns string | undefined. Passing it to a function expecting a number — TS error.**


**Solution:**

example (pattern 1):
```javascript

const port = Number(process.env.PORT) || 3000;

```


**Validated config object (production standard):**

Usage example:
```javascript

interface EnvConfig {
  PORT: number;
  DB_HOST: string;
  DB_PASSWORD: string;
  JWT_SECRET: string;
}

function loadEnv(): EnvConfig {
  const { PORT, DB_HOST, DB_PASSWORD, JWT_SECRET } = process.env;

  if (!PORT || !DB_HOST || !DB_PASSWORD || !JWT_SECRET) {
    throw new Error("Missing required environment variables");
  }

  return {
    PORT: Number(PORT),
    DB_HOST,
    DB_PASSWORD,
    JWT_SECRET
  };
}

const env = loadEnv();

// fully typed, validated at startup

```

<span style = "font-size:25px;"> Concept 51:</span>
<hr style = " padding:0.01px; background:grey;">

**`Typing MySQL Query Results`** 

**MySQL2 returns any by default. You fix that with generics.**

Usage example:
```javascript

import { Pool, RowDataPacket } from "mysql2/promise";

interface User extends RowDataPacket {
  id: number;
  name: string;
  email: string;
}

async function getUserById(pool: Pool, id: number): Promise<User | null> {
  const [rows] = await pool.query<User[]>(
    "SELECT * FROM users WHERE id = ?",
    [id]
  );
  return rows[0] ?? null;
}

```


<span style = "font-size:25px;"> Concept 52:</span>
<hr style = " padding:0.01px; background:grey;">

**`Error Handling Patterns in TypeScript`** 

**The problem we face:**

Usage example:
```javascript

try {
  await riskyOperation();
} catch (error) {
  error.message; 
  // TS ERROR — error is 'unknown' in strict mode
}

```
**`⚠️ Important:`**

**In strict TS — caught errors are unknown. You must narrow before using.**

**Pattern 1: `instanceof`**

Usage example:
```javascript

try {
  await riskyOperation();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message); // works!
  }
}

```

**Pattern 2  Custom error classes (production standard):**

Usage example:
```javascript

class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = "AppError";
  }
}

// Express error handler
function errorHandler(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: "Internal server error" });
}


```


<span style = "font-size:25px;"> Concept 8 Map:</span>
<hr style = " padding:0.01px; background:grey;">


**`Typing Request/Response  → Request <Params, ResBody, ReqBody, Query>`**

**`Extending Express types  → declaration merging via .d.ts — req.user, req.auth`**

**`Async/Await typing       → Promise <T> as return type`**

**`Environment variables    → validate at startup, return typed config object`**

**`MySQL query results      → extend RowDataPacket, pass as generic to query<T[]>`**

**`Error handling           → unknown in catch, instanceof narrowing, custom error classes`**


# React.js Training 🚀

## **Day 1: Modern JavaScript (ES6+) Essentials**

*A complete, beginner‑friendly guide covering all ES6 fundamentals needed before learning React.*

React heavily depends on ES6 features. Before building components, hooks, and UI, you must understand modern JavaScript features introduced from ES6 onwards.

This guide explains:

- let & const (block scope)
- arrow functions
- template literals
- destructuring
- spread & rest operators
- default parameters
- OOP concepts in JS
- modules (import/export)
- promises
- generators
- fetch API
- ⭐ Additional important modern JS concepts for React

---

## 1) let & const (Block Scope)

## 1.1 `let`

- Block‑scoped (available only inside `{}`)
- Can be updated, **cannot** be re‑declared in same scope

### Example: `var` vs `let` inside loops

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);  // prints: 4, 4, 4
  }, 1000);
}
```

### Why? Because `var` is **function‑scoped**, all callbacks share same `i`

Using `let`:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);  // prints: 1, 2, 3
  }, 1000);
}
```

Each iteration gets a new block‑scoped `i`.

---

## 1.2 `const`

- Block‑scoped
- Must be assigned at declaration
- Value **cannot** be re‑assigned (but objects/arrays can mutate)

```js
const user = { name: 'karthik' };
user.name = 'Praveen';  // allowed
user = {};              // ❌ not allowed
```

---

## 2) Arrow Functions

Short syntax for functions and automatically **lexically bind `this`**.

```js
const add = (a, b) => a + b;
```

### Multi‑line arrow function

```js
const greet = (name) => {
  return `Hello, ${name}`;
};
```

---

## 3) Template Literals (Backticks)

Allows string interpolation.

```js
const name = 'Karthik';
console.log(`Welcome ${name}!`);
```

Supports multi‑line strings.

```js
console.log(`Line 1
Line 2`);
```

---

## 4) Destructuring

Extract values from arrays/objects easily.

### Array destructuring

```js
const arr = [10, 20, 30];
const [a, b] = arr; // 10, 20
```

### Object destructuring

```js
const user = { name: 'karthik', age: 30 };
const { name, age } = user;
```

Used everywhere in React props & hooks:

```js
const [count, setCount] = useState(0);
```

---

## 5) Spread & Rest Operators (`...`)

Same syntax, two purposes.

## 5.1 Spread → expand values

```js
const nums = [1, 2, 3];
const newArr = [...nums, 4];  // [1,2,3,4]
```

Spread in objects (important in React):

```js
const user = { name: 'karthik', age: 30 };
const updated = { ...user, age: 31 };
```

## 5.2 Rest → collect remaining values

```js
function sum(...values) {
  return values.reduce((a, b) => a + b);
}
```

Rest in destructuring:

```js
const { a, ...rest } = { a: 1, b: 2, c: 3 };  // rest = {b:2, c:3}
```

---

## 6) Default Parameters

```js
function greet(name = 'Guest') {
  console.log(`Hello ${name}`);
}
```

---

## 7) OOP Concepts in JavaScript

JavaScript is prototype‑based but ES6 introduced `class`.

### Class example

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }
}

const p = new Person('Karthik', 30);
p.speak();
```

### Inheritance

```js
class Student extends Person {
  constructor(name, age, roll) {
    super(name, age);
    this.roll = roll;
  }
}
```

---

## 8) Modules (import/export)

Used everywhere in React.

### Export

```js
export const add = (a, b) => a + b;
export default function greet() {
  console.log('Hello');
}
```

### Import

```js
import greet, { add } from './utils.js';
```

---

## 9) Promises

Used for asynchronous programming.

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
});

promise.then((msg) => console.log(msg));
```

---

## 10) Generators (`function*`)

Generates values one at a time.

```js
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value);
```

---

## 11) Fetch API (browser-side HTTP calls)

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 12) ⭐ Additional Core ES6 Features (Important for React)

## 12.1 Array methods (very important)

React works heavily with immutable arrays.

Useful functions:

- `map()`
- `filter()`
- `reduce()`
- `find()`
- `some()`, `every()`
- `includes()`

Example:

```js
const users = ['a','b','c'];
users.map(u => u.toUpperCase());
```

---

## 12.2 Optional Chaining (`?.`)

```js
const user = { profile: { name: 'karthik' }};
console.log(user.profile?.name);  // safe access
```

---

## 12.3 Nullish Coalescing (`??`)

```js
let val = null;
console.log(val ?? 'default');
```

---

## Summary

✔ let & const (block scope)
✔ arrow functions
✔ template literals
✔ destructuring
✔ spread & rest
✔ default parameters
✔ OOP + classes
✔ modules
✔ promises
✔ generators
✔ fetch API
✔ array functions, optional chaining, nullish coalescing

**All essential concepts before starting React.**

---

## **Day 2: Arrow Functions, Template Literals, Map/forEach, Destructuring & More**

*A complete, beginner‑friendly explanation of all Day‑2 topics with examples and missing core concepts added.*

---

## 0) Overview

Day 2 focuses on JavaScript features heavily used in React components, props, hooks, and state updates:

- Arrow functions (difference from regular functions)
- Template literals
- JavaScript `Map` object (set, get, has, delete)
- `map()` and `forEach()` array methods
- Destructuring (objects & arrays)
- ⭐ Important extra concepts (added for React beginners)

---

## 1) Arrow Functions — Why they matter in React

Arrow functions behave differently from regular functions because they do **NOT** create their own `this`.

### ✔ Regular Function Example

```js
function regularFunction() {
  this.name = 'karthi';

  setTimeout(function () {
    console.log(this.name); // undefined or window.name
  });

  setTimeout(() => {
    console.log(this.name); // 'karthi'
  });
}

regularFunction();
```

### 🚨 Why this happens?

- **Regular function** → `this` depends on how function is called (dynamic binding)
- **Arrow function** → does NOT define its own `this`; it borrows from parent (lexical binding)

This is extremely important in React when passing functions to components.

Example:

```jsx
<button onClick={this.handleClick}>Click</button>
```

If `handleClick` is a regular function, you often need `.bind(this)`.
Arrow functions eliminate that need.

---

## 2) Template Literals (Backticks)

Used everywhere in React for dynamic values.

```js
const name = 'karthi';
console.log(`Hello ${name}, welcome!`);
```

### ✔ Multiline Support

```js
console.log(`Line 1
Line 2
Line 3`);
```

---

## 3) JavaScript Map Object (key–value store)

`Map` is different from plain objects `{}`.

### Benefits of Map

- Keys can be **any type** (object, array, number)
- Maintains insertion order
- Has methods: `set()`, `get()`, `has()`, `delete()`, `clear()`, `size`

### Example

```js
let myMap = new Map();
myMap.set('name', 'karthi');
myMap.set('age', 30);

console.log(myMap.get('name')); // 'karthi'
console.log(myMap.has('age'));  // true

myMap.delete('age');
console.log(myMap.size);        // 1
```

---

## 4) `map()` vs `forEach()` — VERY IMPORTANT FOR REACT

### ✔ `forEach()`

- Does NOT return a new array
- Just loops over array

```js
[1,2,3].forEach(n => console.log(n));
```

### ✔ `map()`

- Returns a **new** transformed array
- Used constantly in React to render lists

```jsx
const items = ['a','b','c'];
const list = items.map((item, index) => <li key={index}>{item}</li>);
```

React uses `map()` because JSX must return values.
`forEach()` returns `undefined`, so it's not suitable for rendering lists.

---

## 5) Destructuring

React relies heavily on destructuring props, state, hook values.

### ✔ Array Destructuring

```js
const arr = [10, 20, 30];
const [a, b] = arr;  // a=10, b=20
```

### ✔ Object Destructuring

```js
const user = { name: 'karthi', age: 30 };
const { name, age } = user;
```

### ✔ Destructuring props (React)

```jsx
function Profile({ name, age }) {
  return <h2>{name} — {age}</h2>;
}
```

### ✔ Destructuring useState

```jsx
const [count, setCount] = useState(0);
```

---

## 6) ⭐ Additional Important Concepts for React Beginners

These weren't in your list but are **essential for Day 2 React**.

## 6.1 Array Methods — `filter`, `find`, `reduce`

Used heavily in UI rendering + state updates.

### filter example

```js
const arr = [1,2,3,4];
const evens = arr.filter(n => n % 2 === 0);  // [2,4]
```

### find example

```js
const user = users.find(u => u.id === 3);
```

---

## 6.2 Optional Chaining (`?.`)

Used frequently when accessing nested API data.

```js
console.log(user?.profile?.email);
```

---

## 6.3 Spread Operator with React State

```jsx
setUser(prev => ({ ...prev, age: 31 }));
```

---

## Day 2 Summary

| Topic              | Why It Matters in React                  |
| ------------------ | ---------------------------------------- |
| Arrow functions    | Avoid `this` binding, clean callbacks  |
| Template literals  | Dynamic strings in JSX and logic         |
| Map object         | Key–value storage for caching, metadata |
| `map()`          | Rendering dynamic lists                  |
| `forEach()`      | Simple loops (NOT for rendering)         |
| Destructuring      | Essential for props, hooks, objects      |
| Extra ES6 concepts | Needed for real-world React apps         |

---

## **Day 3: Spread/Rest, Classes, Promises, Generators & Real-Time ES6 Use Cases**

*A complete Day‑3 guide with explanations, examples, and enterprise-level ES6 use cases.*

---

## 0) Topics Covered

- Spread & Rest operators
- Classes (OOP in JavaScript)
- Promises & Asynchronous Programming
- Generator functions (pause/resume execution)
- Real-time ES6 use cases in an **E‑Commerce Application**

---

## 1) Spread Operator (`...`)

Spread expands array or object values.

### ✔ Array Spread Example

```js
const cart = ["mobile", "laptop"];
const newCart = [...cart, "headphones"];
console.log(newCart); // ['mobile', 'laptop', 'headphones']
```

### ✔ Object Spread (important for React state updates)

```js
const user = { name: "karthi", age: 30 };
const updated = { ...user, age: 31 };
console.log(updated);
```

Spread helps maintain **immutability**, which React requires.

---

## 2) Rest Operator (`...`)

Rest collects multiple values into one array.

```js
function applyDiscount(...codes) {
    console.log(codes);
}
applyDiscount("NEW10", "SALE20", "FESTIVE30");
```

---

## 3) Classes (OOP in JavaScript)

JavaScript classes are templates for creating objects.

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} — ₹${this.price}`;
  }
}

const p = new Product("Laptop", 45000);
console.log(p.getDetails());
```

### ✔ Inheritance Example

```js
class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }
}
```

---

## 4) Promises & Asynchronous Programming

Promises help handle async operations (API calls, DB operations, timers).

### ✔ Promise Syntax

```js
const promise = new Promise((resolve, reject) => {
   // async code
});
```

### ✔ Explanation Diagram

```bash
Promise constructor → (resolve, reject)
                            |     |
                            |     └── reject(reason)
                            └── resolve(value)

.then() handles success
.catch() handles error
```

---

## Example (from your class)

```js
const makePayment = (amount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 1000) {
        resolve("payment successfully");
      } else {
        reject("payment failed");
      }
    }, 2000);
  });
};

makePayment(1500)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

---

## 5) Generator Functions — Pause & Resume

Generators allow pausing execution using `yield`.

### ✔ Normal Function

```js
function normalFn() {
  console.log("A");
  console.log("B");
}
```

### ✔ Generator Function

```js
function* genFn() {
  console.log("A");
  yield;
  console.log("B");
}

const g = genFn();
g.next(); // prints A
g.next(); // prints B
```

Useful in:

- Redux‑Saga (React apps)
- Complex async workflows

---

## 6) Real-Time ES6 Use Cases (E‑Commerce Application)

Below is the document you requested, structured and formatted professionally.

---

## 📄 Real-Time Use Case Scenarios for JavaScript ES6 Features

## 1. Introduction

**Project Name:** E-Commerce Web Application
**Technology:** JavaScript ES6
**Purpose:** Demonstrate how ES6 improves readability, performance & maintainability.

---

## 2. Business Scenario Overview

An enterprise E‑Commerce platform allows users to:

- Browse products
- Add items to cart
- Apply coupons & discounts
- Manage user profiles
- Process orders

ES6 features help simplify these operations.

---

## 3. ES6 Feature‑Based Real-Time Use Cases

### 3.1 Arrow Functions — *Total Cart Price Calculation*

```js
const getTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);
```

✔ Short syntax
✔ Automatic lexical `this`

---

### 3.2 let & const — *Manage User Session*

```js
let isLoggedIn = true;
const TOKEN_KEY = "auth_token";
```

✔ Prevent re‑declaration
✔ Block scope control

---

### 3.3 Template Literals — *Order Confirmation Message*

```js
const msg = `Hello ${name}, your order ${orderId} was placed successfully.`;
```

✔ Clean string building

---

### 3.4 Default Parameters — *Default Shipping Charge*

```js
const calculateShipping = (amount, shipping = 50) => amount + shipping;
```

✔ Avoid undefined errors

---

### 3.5 Destructuring — *Extract Product Details from API*

```js
const { title, price, rating } = product;
```

✔ Cleaner variable extraction

---

### 3.6 Spread Operator — *Add New Product to Cart*

```js
const newCart = [...cart, newItem];
```

✔ Immutable updates (important for React)

---

### 3.7 Rest Operator — *Apply Multiple Discount Codes*

```js
function applyDiscounts(...codes) {
  console.log(codes);
}
```

✔ Accept unlimited parameters

---

### 3.8 Classes — *Product Entity*

```js
class Product {
  constructor(id, title, price) {
    this.id = id;
    this.title = title;
    this.price = price;
  }
}
```

✔ OOP structure for product management

---

### 3.10 Promises — *Fetch Product Data*

```js
function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productsData), 1000);
  });
}
```

✔ Handles asynchronous operations

---

### 3.11 Map & Set — *Store Unique Coupon Codes*

```js
const coupons = new Set(["NEW10", "SALE20"]);
coupons.add("FIRST50");
```

✔ Avoid duplicates

---

### 3.12 for...of — *Iterate Over Cart Items*

```js
for (let item of cart) {
  console.log(item.name);
}
```

✔ Clean iteration over arrays/maps/sets

---

## 4. Non‑Functional Benefits

| Feature         | Benefit                         |
| --------------- | ------------------------------- |
| Arrow Functions | Less boilerplate                |
| Let/Const       | Better variable control         |
| Modules         | Maintainable architecture       |
| Classes         | OOP structure                   |
| Promises        | Better async handling           |
| Spread/Rest     | Functional style & immutability |

---

## **Day 4: Generators, React Core Concepts, JSX, Virtual DOM, CRA Setup**

*A complete Day‑4 guide with explanations, examples, and missing core concepts added.*

---

## 4.0) Topics Covered

- JavaScript Generator functions (pause/resume execution)
- Real generator examples (value iteration + pagination)
- What is React?
- React Core Concepts (UI library, Components, Virtual DOM, JSX, One‑Way Binding)
- Creating a React App using CRA

---

## 1) JavaScript Generators (`function*`)

Generators allow pausing and resuming function execution using `yield`.

### 1.1 Basic Generator Example

```js
function* fname() {
  yield 'step 1'; // pause
  yield 'step 2'; // pause
}

var obj = fname();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
```

#### Output

```bash
{ value: 'step 1', done: false }
{ value: 'step 2', done: false }
{ value: undefined, done: true }
```

A generator returns an iterator. Each call to `.next()`:

- returns `{ value: ..., done: ... }`
- continues execution until next `yield`

---

### 1.2 Example 1 — Multi‑Value Generator (`test.js`)

```js
function* testGenerate() {
  yield "first value";
  yield "Second value";
  yield "third value";
  return "done";
}

var gen = testGenerate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

#### Output1.2

```bash
{ value: 'first value', done: false }
{ value: 'Second value', done: false }
{ value: 'third value', done: false }
{ value: 'done', done: true }
```

---

### 1.3 Example 2 — Pagination Using Generator (`test2.js`)

Generators shine when creating data streams.

```js
function* pagination(items, pageSize) {
  for (let i = 0; i < items.length; i += pageSize) {
    yield items.slice(i, i + pageSize);
  }
}

const items = ["a", "b", "c", "d", "e", "f", "g"];
const pageSize = 3;
const paginator = pagination(items, pageSize);

console.log(paginator.next().value); // ["a","b","c"]
console.log(paginator.next().value); // ["d","e","f"]
console.log(paginator.next().value); // ["g"]
console.log(paginator.next().value); // undefined
```

---

## 2) React — A JavaScript Library for Building UI

React is not a framework — it's a **UI library**.

### 2.1 What is React?

- A JavaScript **library** for building user interfaces
- Developed by **Facebook/Meta**
- Used for: SPAs, dashboards, portals, mobile apps (React Native)

---

## 3) Core Features of React

### 3.1 Component-Based Architecture

React UI = small, reusable components.

```jsx
function Welcome() {
  return <h1>Hello User</h1>;
}
```

Each component:

- has its own UI logic
- is reusable across application

---

### 3.2 Virtual DOM

React does **NOT** update the real browser DOM directly.

Instead:

1. React creates a lightweight copy → **Virtual DOM**
2. Compares changes → **Diffing Algorithm**
3. Updates **only what changed** in the Real DOM (efficient)

🔍 Visualizer tool used in class: `https://bioub.github.io/dom-visualizer/`

---

### 3.3 JSX (JavaScript XML)

JSX lets you write HTML + JavaScript together.

```jsx
const element = <h2>Welcome {user}</h2>;
```

JSX is NOT HTML — it compiles to `React.createElement()`.

---

### 3.4 One-Way Data Binding

Data flows from **parent → child**.

Example:

```jsx
function Greeting(props) {
  return <h3>Hello {props.name}</h3>;
}

<Greeting name="Karthi" />
```

Child cannot modify parent data directly → ensures predictable UI.

---

## 4) Creating a New React App

React apps are created using **Create React App (CRA)**.

### 4.1 Create normal React app

```bash
npx create-react-app appName
```

### 4.2 Create React app with TypeScript

```bash
npx create-react-app appName --template typescript
```

---

## 5) Important Core Concepts (Added)

These concepts are important for beginners and not explicitly mentioned in class.

### 5.1 React Rendering Rules

- Components must start with **capital letter**
- Must return a **single parent element**
- Must be **pure functions** (no modification of props)

---

### 5.2 Props vs State

| Props                    | State                       |
| ------------------------ | --------------------------- |
| Read-only                | Mutable                     |
| Passed by parent         | Managed by component        |
| Cannot change internally | Can use setState / useState |

---

### 5.3 Functional vs Class Components (modern React uses functional)

### Functional Component

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

### Class Component

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

---

## Day 4 Summary

✔ Generators (`yield`, next(), pause/resume)
✔ Pagination using Generators
✔ React basics: UI library, Component Architecture, JSX
✔ Virtual DOM explained
✔ One-Way Data Binding
✔ Creating React App (CRA + TypeScript)
✔ Additional important React fundamentals included

---

## **Day 5: Components, State, Props & Lifecycle Basics**

*A complete Day‑5 guide with explanations, examples, and missing core concepts added.*

---

## 0) What You Learn Today

- Components → the building blocks of React UI
- Functional Components (Stateless → Stateful using Hooks)
- Class Components (Stateful + Lifecycle methods)
- State and Props (Core React concepts)
- Exporting and Naming components

---

## 1) Components – The Building Blocks of React

React applications are built using **components**.
A component is:

- Reusable
- Independent
- Returns UI (JSX)

React has two types of components:

1. **Functional Components** → (Modern, hook-based)
2. **Class Components** → (Older, stateful)

---

## 2) Functional Components (Stateless → Stateful using Hooks)

Before React v16.8, functional components were **stateless**, meaning no internal state.

Now, with **Hooks**, they can use state:

### Example2

```jsx
function Greeting() {
  return <h1>Hello User</h1>;
}
```

### With State (using useState)

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

---

## 3) Class Components (State + Lifecycle)

Class components were traditionally used for complex logic.

### Syntax

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "abc" }; // initial state
  }

  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}
```

### Updating State

```jsx
this.setState({ name: "updated" });
```

### Lifecycle Methods (core ones)

- `componentDidMount()` → runs after UI is rendered
- `componentDidUpdate()` → runs after update
- `componentWillUnmount()` → cleanup before removal

Modern React uses **useEffect()** hook instead.

---

## 4) Naming Components – Must Start With Uppercase

React differentiates between:

- lowercase → HTML tag
- Uppercase → React Component

✔ Correct

```jsx
function Header() {}
```

❌ Incorrect

```jsx
function header() {}
```

---

## 5) Exporting Components

### Single Component Export

```jsx
export default Header;
```

### Named Export

```jsx
export function Header(){}
export function Footer(){}
```

### Importing

```jsx
import Header from './Header';
```

---

### 6) State vs Props

React data flow relies on **State** and **Props**.

## 6.1 State

State belongs **inside** the component.
Used for dynamic values.

### In Class Components

```jsx
this.state = { name: "abc" }; // initial state
this.setState({ name: "xyz" }); // update
```

### In Functional Components

```jsx
const [name, setName] = useState("abc");
```

State triggers re-render when updated.

---

## 6.2 Props

Props are used to pass data from **parent → child**.
Props are **read-only**.

### Example6.2

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}

<Welcome name="Karthi" />
```

Props can't be changed inside the child.

---

## 7) Additional Important Concepts (Added)

### 7.1 Pure Components (Class Component Optimization)

```jsx
class PureComp extends React.PureComponent {}
```

Prevents unnecessary re-rendering.

### 7.2 useEffect (Functional Component Lifecycle)

```jsx
useEffect(() => {
  console.log("mounted or updated");
}, []);
```

### 7.3 Conditional Rendering

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

### 7.4 Lists Rendering

```jsx
items.map(item => <li key={item}>{item}</li>)
```

---

## Day 5 Summary

✔ Components (Function + Class)
✔ Uppercase naming rule
✔ Props (read-only)
✔ State (dynamic)
✔ setState (class)
✔ useState (function)
✔ Lifecycle basics
✔ Extra React patterns added

---

## React Day 6 — Props & Essential Hooks (Clear & Detailed Explanation)

## 1. Props — One Way Data Binding

Props allow **parent → child** data transfer. Child components cannot modify props (read‑only).

### Props in Functional Component

```jsx
function Child(props) {
  return <h2>Hello {props.name}</h2>;
}
```

### Props in Class Component

```jsx
class Child extends React.Component {
  render() {
    return <h2>Hello {this.props.name}</h2>;
  }
}
```

---

## 2. Hooks in React

Hooks add state, lifecycle, performance, and DOM features to functional components.

### 2.1 useState — Component State

```jsx
const [count, setCount] = useState(0);
```

### 2.2 useEffect — Side Effects

```jsx
useEffect(() => {
  console.log("mounted");
}, []);
```

### 2.3 useContext — Global State Sharing

```jsx
const user = useContext(UserContext);
```

### 2.4 useRef — DOM Access + Persistent Variables

```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

### 2.5 useCallback — Memoized Function

```jsx
const handleClick = useCallback(() => console.log("clicked"), []);
```

### 2.6 useMemo — Memoized Value

```jsx
const result = useMemo(() => number * 2000, [number]);
```

---

## 3. Missing Important Concepts (Added)

### Prop Drilling & useContext Solution

```jsx
<UserContext.Provider value={user}> ... </UserContext.Provider>
```

### Controlled vs Uncontrolled Inputs

Controlled:

```jsx
<input value={value} onChange={e => setValue(e.target.value)} />
```

Uncontrolled:

```jsx
const ref = useRef();
<input ref={ref} />
```

### Keys in Lists

```jsx
items.map(item => <li key={item.id}>{item.name}</li>);
```

### React.memo

```jsx
export default React.memo(MyComponent);
```

---

## Day6 Summary

- Props enable parent → child one‑way data flow
- Hooks add state & logic to functional components
- useState, useEffect, useContext, useRef, useCallback, useMemo are core hooks
- Extra concepts like React.memo, keys, and controlled inputs are essential

---

## React Day 7 — useContext, useRef, useReducer (Clear, Crisp & Complete)

This document explains **useContext**, **useRef**, and **useReducer** with simple explanations, diagrams, examples, and missing important concepts added for a full understanding.

---

## 1. useContext — Avoid Props Drilling

### ❓ What is props drilling?

When you pass the same data through **multiple nested components** just to reach the last component.

```jsx
App → Parent → Child → SubChild → ComponentX
```

This becomes messy.

### ✅ Solution → useContext

useContext creates **global state** accessible to any component without passing props manually.

### Steps

## Step 1 — Create a context

```jsx
import { createContext } from "react";

export const UserContext = createContext();
```

## Step 2 — Wrap components with Provider

```jsx
<UserContext.Provider value={{ username: "Karthi" }}>
    <Dashboard />
</UserContext.Provider>
```

## Step 3 — Consume context

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function Dashboard() {
  const { username } = useContext(UserContext);
  return <h1>Welcome {username}</h1>;
}
```

### ⭐ Why useContext is important?

- Avoids prop drilling
- Easy global access
- Great for themes, language, authentication

---

## 2. useRef — Persist Values Between Renders

useRef is used to:

- Store values without causing re-render
- Access DOM elements directly (focus, scroll, play video)
- Track previous values

### Example from your class

```jsx
const [name, setName] = useState("Karthi");
const previousName = useRef("");

useEffect(() => {
  previousName.current = name;
  console.log("Current:", name, "Previous:", previousName.current);
}, [name]);
```

### ⭐ Why useRef?

- Updating `useRef` does **NOT** re-render component
- Perfect for saving data **across renders**

### ⭐ Real use cases

- Accessing `<input />` DOM element
- Storing timers (`setTimeout` / `setInterval`)
- Storing previous form values
- Avoiding re-render loops

---

## 3. useReducer — Manage Complex State Logic

`useReducer` is a powerful alternative to `useState` when:

- You manage **complex state**
- You want **cleaner logic**
- You work with **multiple related state updates**

### Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Step 1 — Create reducer function

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
```

### Step 2 — Use in component

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

### Step 3 — Dispatch actions

```jsx
<button onClick={() => dispatch({ type: "increment" })}>+</button>
<button onClick={() => dispatch({ type: "decrement" })}>-</button>
```

### ⭐ Why useReducer?

- Cleaner code than multiple `useState` calls
- Great for **form handling**, **cart logic**, **toggles**, **authentication**
- Makes complex logic easy to manage

---

## ⭐ Missing but Essential Concepts (Added for You)

## 1. When to use useState vs useReducer?

| Situation                             | Hook         |
|----------                             |------        |
| Simple values (count, text input)     | `useState`   |
| Multiple values changing together     | `useReducer` |
| Complex actions (add, remove, update) | `useReducer` |
| You need Redux-like structure         | `useReducer` |

---

## 2. useContext + useReducer = Global State Manager

Modern React apps combine both:

```jsx
useContext → share data globally
useReducer → manage complex logic
```

This is **exactly how Redux works internally**.

---

## 3. useRef vs useState

| useRef                            | useState                  |
|--------                           |----------                 |
| Changing value does NOT re-render | Changing value re-renders |
| Used for DOM access               | Used for UI state         |
| Store previous values             | Store displayed values    |

---

## 4. Reducer Action Structure

A proper action contains:

```jsx
{ type: "add_item", payload: item }
```

This is a best practice (similar to Redux).

---

## ✅ Day 7 Summary

- useContext avoids **props drilling** and shares global values
- useRef keeps values between renders + accesses DOM
- useReducer is best for **complex logic**, replacing multiple useState calls
- Combining `useContext + useReducer` = powerful global state management
- Added essential interview-level concepts

---

## React Day 8 — **Local/Session Storage + Redux (Predictable State Container)**

*A clean, crisp, and complete explanation of ES6 storage, Redux concepts, installation, and usage.*

---

## 🪶 1. ES6 Local Storage & Session Storage

Both are **browser storage mechanisms** used to save data on the client-side.

## 🔸 Local Storage

- Stores data **permanently** (until manually cleared)
- Survives browser refresh & restart
- Storage capacity: **~5–10MB**

### ✔ Set value

```js
localStorage.setItem("name", "Karthi");
```

### ✔ Get value

```js
localStorage.getItem("name");
```

### ✔ Remove value

```js
localStorage.removeItem("name");
```

### ✔ Clear all

```js
localStorage.clear();
```

---

## 🔸 Session Storage

- Stores data **only for one tab session**
- Gets cleared when browser/tab closes

### ✔ Set

```js
sessionStorage.setItem("token", "abc123");
```

### ✔ Get

```js
sessionStorage.getItem("token");
```

### ✔ Remove

```js
sessionStorage.removeItem("token");
```

---

## 🪶 2. Redux — Predictable State Container

Redux is used for **global state management**.

It ensures:

- Predictable state updates
- A single source of truth (Store)
- Unidirectional data flow

---

### 🔥 Redux Data Flow Diagram

```jsx
Component → dispatch(action)
                 |
              Reducer
                 |
               State
                 |
               Store
                 |
               View
```

---

## 🧩 Redux Core Building Blocks

## 1. **State**

- A **JavaScript object** that holds application data

```js
const initialState = { count: 0 };
```

## 2. **Reducer**

- A **pure function** that receives state + action
- Must **return new state**

```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case "increment": return { count: state.count + 1 };
    case "decrement": return { count: state.count - 1 };
    default: return state;
  }
}
```

## 3. **Store**

- Central global state container

```js
import { createStore } from "redux";
const store = createStore(reducer);
```

## 4. **Component (View)**

- Uses Redux state
- Dispatches Redux actions

---

## 🪶 3. Installation

```bash
npm i redux
npm i react-redux
```

- **redux** → create store & reducers
- **react-redux** → connects React components to Redux using hooks

---

## 🪶 4. Using Redux in React

### ⭐ Step 1: Create Store

```js
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
export default store;
```

---

### ⭐ Step 2: Wrap App using `<Provider>`

```jsx
import { Provider } from 'react-redux';
import store from './store';

<Provider store={store}>
    <App />
</Provider>
```

---

## 🪶 5. react-redux Hooks

React Redux provides two main hooks.

## 🔹 useDispatch() → Send Action to Reducer

```js
const dispatch = useDispatch();

dispatch({ type: "increment" });
```

## 🔹 useSelector() → Read Value From Store

```js
const count = useSelector(state => state.count);
```

---

## 🧠 Additional Important Concepts (Missing but Essential)

### 🔸 Action Creators

Functions that return action objects.

```js
const increment = () => ({ type: "increment" });
```

### 🔸 Pure Reducer Rules

Reducers **must NOT**:

- Mutate state
- Perform async calls
- Modify external variables

### 🔸 Redux DevTools

Powerful tool for debugging Redux apps.

```js
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
```

### 🔸 combineReducers

Used when you have multiple reducers.

```js
import { combineReducers } from 'redux';
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
```

---

## 🧩 Final Summary

| Concept        | Explanation                       |
|---------       |-------------                      |
| LocalStorage   | Permanent browser storage         |
| SessionStorage | Tab-based temporary storage       |
| Redux          | Predictable global state container|
| Reducer        | Function to update state          |
| Store          | Holds global state                |
| useDispatch    | Sends actions to reducer          |
| useSelector    | Reads values from store           |
| Provider       | Gives Redux store to React app    |

---

## React Day 9 — Fetch API, Axios, React + Express, CORS, Spring Boot API

## 🪶 1. JavaScript ES6 — Fetch API (Built‑In)

Fetch is native to JavaScript and used for making HTTP requests.

### ✔ GET Example

```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### ✔ POST Example

```js
fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'karthi', password: '1234' })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🪶 2. Axios — External Library for HTTP Calls

Must install:

```bash
npm i axios
```

### ✔ 2. GET Example

```js
axios.get('http://localhost:3000/users')
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

### ✔ 2. POST Example

```js
axios.post('http://localhost:3000/login', { username: 'karthi', password: '1234' })
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
```

### ⭐ Axios Advantages

- Automatic JSON convert
- Better error handling
- Supports interceptors
- Cancel requests
- Works well with React

---

## 🪶 3. React + ExpressJS Integration

React (Frontend) → Axios → ExpressJS Server.

### Install CORS in Express

```bash
npm i cors
```

### Express API Setup

```js
const cors = require('cors');
app.use(cors());

app.get('/userdata', (req, res) => {
  res.send({ name: 'Karthi', age: 30 });
});
```

### React Axios call

```jsx
axios.get('http://localhost:3000/userdata')
  .then(res => setData(res.data));
```

---

## 🧨 What is CORS?

CORS = Cross-Origin Resource Sharing.

Occurs when:

```jsx
React (3000) → Express (5000)
```

Origins do not match → **Browser blocks request**.

### Solution

Use CORS middleware:

```js
const cors = require('cors');
app.use(cors());
```

---

## 🪶 4. Java Backend API — Spring Boot

Spring Boot helps build REST APIs in Java.

### Spring Initializer

`https://start.spring.io/`

Choose:

- Project → Maven
- Dependencies → Spring Web
- Generate zip → open in IntelliJ IDEA

### Sample REST API

```java
@RestController
public class UserController {

  @GetMapping("/user")
  public Map<String, Object> getUser() {
    Map<String, Object> user = new HashMap<>();
    user.put("name", "Karthi");
    user.put("age", 30);
    return user;
  }
}
```

### React fetching Spring API

```jsx
axios.get("http://localhost:8080/user")
  .then(res => console.log(res.data));
```

---

## 🧩 Missing Important Concepts

### 🔹 Axios Interceptors

```js
axios.interceptors.request.use(config => {
  console.log('Request:', config.url);
  return config;
});
```

### 🔹 Environment Variables in React

Create `.env`:

```js
REACT_APP_API=http://localhost:3000
```

Use:

```js
axios.get(process.env.REACT_APP_API + '/userdata');
```

### 🔹 Error Handling Best Practice

```js
try {
  const response = await axios.get(url);
} catch (err) {
  console.error(err.response?.data);
}
```

---

## 🏁 Summary

- Fetch = native JavaScript HTTP client
- Axios = powerful HTTP client for React
- React ↔ Express → use Axios + CORS middleware
- Java backend (Spring Boot) easy to integrate with React
- Added important concepts: interceptors, environment variables, robust error handling

---

## React Day 10 — React + MongoDB + Redux (Clean & Complete Notes)

## 🪶 1. Backend Setup (MongoDB + Mongoose)

React cannot connect directly to MongoDB. We need a backend API (Node.js + Express) to:

- Connect to MongoDB
- Create data
- Read data
- Send data to React through API

### ✨ Install required packages

```bash
npm install mongoose dotenv
npm install --save-dev nodemon
```

### 📌 .env file

```env
MONGO_URL=mongodb://localhost:27017/mydb
```

### 📌 db.js (MongoDB connection)

```js
import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("MongoDB Connected"))
  .catch(err=>console.log(err));
```

---

## 🪶 2. Mongoose Model

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
});

export const User = mongoose.model("User", userSchema);
```

---

## 🪶 3. Express API (Create + View Data)

### 📌 POST → Create User

```js
app.post('/users', async (req, res)=>{
  const newUser = new User(req.body);
  await newUser.save();
  res.json({status:'success'});
});
```

### 📌 GET → Fetch All Users

```js
app.get('/users', async (req, res)=>{
  const users = await User.find();
  res.json(users);
});
```

---

## 🪶 4. React — Fetch MongoDB API Using Axios

### Install Axios

```bash
npm i axios
```

### 📌 Fetch Data

```jsx
useEffect(()=>{
  axios.get('http://localhost:5000/users')
    .then(res=> setUsers(res.data));
},[]);
```

### 📌 Create Data

```jsx
axios.post('http://localhost:5000/users', formData)
  .then(()=> alert("User Added"));
```

---

## 🪶 5. Redux — View API Data Globally

### Install Redux

```bash
npm install redux react-redux
```

---

## ⭐ Redux Flow

```bash
Action → Dispatch → Reducer → Store → View
```

---

## 1️⃣ Reducer.js

```js
const initialState = { users: [] };

function reducer(state = initialState, action){
  switch(action.type){
    case 'LOAD_USERS':
      return {...state, users: action.payload };
    default:
      return state;
  }
}
export default reducer;
```

---

## 2️⃣ Store.js

```js
import { createStore } from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);
```

---

## 3️⃣ Provide Store

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## 4️⃣ Fetch + Dispatch

```jsx
const dispatch = useDispatch();

useEffect(()=>{
  axios.get('http://localhost:5000/users')
    .then(res => dispatch({ type:'LOAD_USERS', payload:res.data }));
},[]);
```

---

## 5️⃣ useSelector → Read Global State

```jsx
const users = useSelector(state=>state.users);
```

---

## 🧩 Important Missing Concepts (Added)

### ✔ CORS Required in Backend

```js
import cors from 'cors';
app.use(cors());
```

### ✔ Redux Thunk (Async actions) — Optional

```bash
npm install redux-thunk
```

### ✔ Mongoose Validation Better Practice

```js
email: { type:String, required:true }
```

---

## 🏁 Final Summary

✔ MongoDB connected using Mongoose
✔ API created (POST + GET)
✔ React accessed API using Axios
✔ Redux stored API data globally
✔ Added missing topics: CORS, Thunk, Validation

---

## React Day 11 — Middleware, Thunk, Saga, React Router DOM

## 🪶 1. Middleware in Redux

Middleware sits **between dispatch → reducer**.

Without middleware:

```bash
Action → Dispatch → Reducer  (ONLY synchronous operations)
```

With middleware:

```bash
Action → Dispatch → Middleware (Async logic) → Reducer
```

Middleware allows:

- Async operations (API calls)
- Logging
- Side effects
- Task scheduling

---

## 🪶 2. Thunk Middleware

### Install

```bash
npm install redux-thunk
```

### Purpose

`redux-thunk` allows **async functions** inside actions.

### Usage

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));
```

### Thunk Example

```js
export const loadUsers = () => {
  return async (dispatch) => {
    const res = await axios.get('/users');
    dispatch({ type: 'LOAD_USERS', payload: res.data });
  };
};
```

---

## 🪶 3. Redux-Saga — Advanced Async Flow

### Why Saga?

- Better async control
- Easier testing of async logic
- Handles complex workflows
- Generator-based functions

### Saga Install

```bash
npm install redux-saga
```

### Saga Setup

```js
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
```

### Key Saga Concepts

- **takeEvery()** → listen to action
- **put()** → dispatch action to reducer
- **call()** → call async function
- **generator function** required (`function*`)

### Saga Example

```js
import { takeEvery, put } from 'redux-saga/effects';

function* fetchUsers() {
  const res = yield fetch('/users').then(r => r.json());
  yield put({ type: 'LOAD_USERS', payload: res });
}

export function* userSaga() {
  yield takeEvery('LOAD_USERS_ASYNC', fetchUsers);
}
```

---

## 🪶 4. React Router DOM — Client-Side Navigation

### RRD Install

```bash
npm install react-router-dom
```

### Router Components

#### ⭐ BrowserRouter

Enables routing features.

```jsx
<BrowserRouter>
  <App />
</BrowserRouter>
```

#### ⭐ Routes

Wrapper that contains all Route definitions.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

#### ⭐ Route

Maps URL → Component.

```jsx
<Route path="/about" element={<About />} />
```

#### ⭐ Link

Used for navigation **without page refresh**.

```jsx
<Link to="/about">About</Link>
```

#### ⭐ Outlet

Used for nested routing.

```jsx
function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Outlet />
    </>
  );
}
```

### Basic Routing Example

```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/dashboard" element={<Dashboard />}>
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
</BrowserRouter>
```

---

## 🧩 State Important Missing Concepts (Added)

### ✔ Difference Between Thunk vs Saga

| Feature    | Thunk     | Saga                              |
|--------    |--------   |--------                           |
| Based On   | Functions | Generators                        |
| Complexity | Simple    | For complex apps                  |
| Testing    | Harder    | Easier                            |
| Async Flow | Very basic| Advanced (cancel, retry, debounce)|

### ✔ Alternative Middleware

- redux-observable (RxJS)
- redux-promise

### ✔ Common Saga Patterns

- Debounce API calls
- Retry API calls
- Parallel API calls
- Race conditions handling

---

## 🏁 Day 11 Summary

✔ Middleware enables async tasks in Redux  
✔ Thunk handles simple async flows  
✔ Saga handles complex async logic with generator functions  
✔ Router DOM enables page navigation without refresh  
✔ Added missing comparisons & best practices  

---

## React Day 12 — Full React Router DOM (v6+) Explanation

This document covers:

- react-router-dom installation
- BrowserRouter, Routes, Route
- useParams
- Parent & Child (Nested) Routes
- useNavigate
- Lazy Loading + Suspense

---

## 🪶 1. Install React Router DOM

React Router DOM is used to create **single‑page routing** in React.

```bash
npm install react-router-dom
```

React Router works by updating the **URL** without refreshing the page.

---

## 🪶 2. BrowserRouter

Wrap your entire application with BrowserRouter.

```jsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>
```

Enables routing features.

---

## 🪶 3. Routes & Route

### `Routes` → Group of all routes

### `Route` → Map URL → Component

```jsx
import { Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

---

## 🪶 4. useParams — Read URL Parameters

Used when URL contains dynamic segments.

### Example URL

```bash
/user/10
```

### Route definition

```jsx
<Route path="/user/:id" element={<User />} />
```

### Reading parameter

```jsx
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}
```

---

## 🪶 5. Parent & Child Component Routing (Nested Routes)

Nested routes allow a parent layout + children to render inside it.

### Parent Component (Layout)

```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h2>Dashboard Page</h2>
      <Outlet /> {/* Child pages render here */}
    </>
  );
}
```

### Routes Setup

```jsx
<Routes>
  <Route path="dashboard" element={<Dashboard />}> 
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

### Child URLs

```bash
/dashboard/profile
/dashboard/settings
```

---

## 🪶 6. useNavigate — Navigate Programmatically

Used instead of `<Link>` when navigation must be done via function.

### 6.Example

```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/dashboard');
  }

  return <button onClick={handleLogin}>Login</button>;
}
```

---

## 🪶 7. Lazy Loading + Suspense

Lazy loading helps split bundles and load components only when needed.

### Step 1 — Lazy Import

```jsx
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./About'));
```

### Step 2 — Wrap with Suspense

```jsx
<Suspense fallback={<h2>Loading...</h2>}>
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</Suspense>
```

✔ Improves performance
✔ Loads pages on demand

---

## Routing 🧩 Important Missing Concepts (Added)

## ✔ useLocation

Get current URL info.

```jsx
import { useLocation } from 'react-router-dom';
const location = useLocation();
console.log(location.pathname);
```

## ✔ Navigation Without Refresh (SPA)

React Router updates UI instantly without page reload.

## ✔ Route Not Found (404)

```jsx
<Route path="*" element={<h1>Page Not Found</h1>} />
```

## ✔ Protected Routes (authentication)

Wrapped routes to restrict access.

---

## Final Summary

| Feature       | Purpose                     |
|--------       |---------                    |
| BrowserRouter | Enables routing             |
| Routes        | Wrapper for routes          |
| Route         | Map URL → Component         |
| useParams     | Read dynamic values         |
| Outlet        | Show child pages            |
| useNavigate   | Navigate programmatically   |
| Lazy Loading  | Load components on demand   |
| Suspense      | Show fallback while loading |

---

## React Day 13 — React Testing with Jest (Components & Forms)

## 🪶 1. Introduction to React Testing

React testing ensures that components work correctly and do not break when code changes.

### Why testing?

- Prevent bugs
- Improve code quality
- Safe refactoring
- Confident deployment

React projects (created using CRA) already include **Jest + React Testing Library**.

---

## 🪶 2. Jest — Testing Framework

Jest is a JavaScript testing framework maintained by Facebook.

### Key features

- Fast and zero-configuration
- Snapshot testing
- Mocking functions, APIs, timers
- Runs tests in isolation

### Test file naming rules

```text
Component.test.js
Component.spec.js
```

---

## 🪶 3. Component Testing (UI Test Case)

### Example Component

```jsx
function Hello() {
  return <h1>Hello World</h1>;
}
export default Hello;
```

### Test Case

```jsx
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders Hello World text', () => {
  render(<Hello />);
  const heading = screen.getByText(/hello world/i);
  expect(heading).toBeInTheDocument();
});
```

✔ Verifies component rendering

---

## 🪶 4. Props Testing

```jsx
function Greeting({ name }) {
  return <h2>Hello {name}</h2>;
}
```

### Test

```jsx
render(<Greeting name="Karthi" />);
expect(screen.getByText('Hello Karthi')).toBeInTheDocument();
```

---

## 🪶 5. Form Testing

Form testing ensures input values, submit actions, and validations work correctly.

### Example Form Component

```jsx
function Login() {
  return (
    <form>
      <input placeholder="username" />
      <button type="submit">Login</button>
    </form>
  );
}
```

### 5.Test Case

```jsx
import userEvent from '@testing-library/user-event';

render(<Login />);
const input = screen.getByPlaceholderText('username');
await userEvent.type(input, 'admin');
expect(input.value).toBe('admin');
```

✔ Simulates real user behavior

---

## 🪶 6. Button Click Testing

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);
  return <button onClick={() => setCount(count + 1)}>Count {count}</button>;
}
```

### 6.Test

```jsx
render(<Counter />);
const btn = screen.getByRole('button');
await userEvent.click(btn);
expect(btn.textContent).toContain('1');
```

---

## 🪶 7. Snapshot Testing

Snapshot testing captures the UI structure and detects changes.

```jsx
import renderer from 'react-test-renderer';

test('snapshot test', () => {
  const tree = renderer.create(<Hello />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

## 🪶 8. Mocking Functions

```jsx
const mockFn = jest.fn();
mockFn('hello');
expect(mockFn).toHaveBeenCalled();
```

Used for API calls, callbacks, timers

---

## 🪶 9. Missing Important Concepts (Added)

### ✔ React Testing Library Philosophy

- Test what the **user sees**
- Avoid testing implementation details

### ✔ Common Queries

- getByText
- getByRole
- getByLabelText
- getByPlaceholderText

### ✔ Async Testing

```jsx
await waitFor(() => expect(screen.getByText('Done')).toBeInTheDocument());
```

---

## 🏁 Day 13 Summary

✔ Jest framework basics
✔ Component rendering tests
✔ Props testing
✔ Form testing
✔ Click events
✔ Snapshot testing
✔ Mocking
✔ Added best practices

---

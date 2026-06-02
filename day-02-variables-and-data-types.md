<div align="center">

# JavaScript Notes

### Variables • Data Types • Naming Conventions • Template Literals

Learning JavaScript fundamentals step by step.

</div>

---

# Variables in JavaScript

Variables are used to store data values.

JavaScript provides 3 ways to declare variables:

```javascript
let
const
var
```

---

# let

`let` is used when the value can change later.

## Example

```javascript
let age = 18;

age = 19;
```

### Features
- Block scoped
- Can be updated
- Cannot be redeclared in same scope

---

# const

`const` is used when the value should remain constant.

## Example

```javascript
const pi = 3.14;
```

### Features
- Block scoped
- Cannot be updated
- Cannot be redeclared

---

# var

`var` is the old way of declaring variables.

## Example

```javascript
var name = "Raj";
```

### Features
- Function scoped
- Can be updated
- Can be redeclared

`let` and `const` are preferred in modern JavaScript.

---

# Difference Between let, const and var

| Feature | let | const | var |
|------|------|------|------|
| Scope | Block | Block | Function |
| Redeclare | No | No | Yes |
| Update Value | Yes | No | Yes |
| Modern Usage | Yes | Yes | Less Preferred |

---

# Data Types in JavaScript

JavaScript has different types of data.

---

# Primitive Data Types

Primitive data types store single values.

| Data Type | Example |
|------|------|
| String | `"Hello"` |
| Number | `25` |
| Boolean | `true` |
| Undefined | `undefined` |
| Null | `null` |
| BigInt | `123n` |
| Symbol | `Symbol()` |

---

# Non-Primitive Data Types

These can store collections of data.

| Data Type | Example |
|------|------|
| Object | `{name: "Raj"}` |
| Array | `[1,2,3]` |
| Function | `function(){}` |

---

# Naming Conventions

Variable names should be meaningful and readable.

---

# Camel Case

First word starts small, next words start with capital letters.

## Example

```javascript
let firstName = "Raj";
let totalMarks = 95;
```

This is the most common style in JavaScript.

---

# Snake Case

Words are separated using underscores.

## Example

```javascript
let first_name = "Raj";
```

---

# Pascal Case

Every word starts with a capital letter.

## Example

```javascript
let FirstName = "Raj";
```

Mostly used for classes.

---

# Template Literals (Backticks)

Backticks are written using:

```javascript
`
```

They are used for:
- Multi-line strings
- String interpolation

---

# Example of Backticks

```javascript
let name = "Raj";

console.log(`Hello ${name}`);
```

Output:

```text
Hello Raj
```

---

# Why Template Literals are Useful

- Cleaner syntax
- Easier string formatting
- Supports dynamic values

---

# What I Learned Today

- Variables in JavaScript
- let, const and var
- Primitive and non-primitive data types
- Naming conventions
- Camel case
- Template literals using backticks

---

<div align="center">

### Day 02 of Learning JavaScript

</div>
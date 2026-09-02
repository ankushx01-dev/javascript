<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes 

###  Execution Context • Memory Creation Phase • Code Execution Phase • defer • debugger

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-03-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)



Learning JavaScript fundamentals step by step.

</div>
---

# How JavaScript Executes Code

JavaScript executes code in different phases inside the **Execution Context**.

Execution Context is the environment where JavaScript code runs.

---

# Two Main Phases of Execution

| Phase | Work |
|------|------|
| Memory Creation Phase | Allocates memory for variables and functions |
| Code Execution Phase | Executes code line by line |

---

# 1. Memory Creation Phase

In this phase:
- Variables are stored in memory
- Functions are stored completely in memory

Variables declared using `var` get value:

```javascript
undefined
```

---

# Example

```javascript
var a = 10;

function greet() {
    console.log("Hello");
}
```

During memory creation:

```text
a -> undefined
greet -> function definition
```

---

# 2. Code Execution Phase

In this phase:
- Code runs line by line
- Values are assigned
- Functions are executed

---

# Example

```javascript
var a = 10;

console.log(a);
```

Output:

```text
10
```

---

# JavaScript is Single Threaded

JavaScript executes:
- One task at a time
- Line by line

This is called:
- Single-threaded execution

---

# What is defer?

`defer` is used inside the `<script>` tag.

It tells the browser:

- Download JavaScript file in background
- Execute it after HTML loads completely

---

# Example

```html
<script src="script.js" defer></script>
```

---

# Why Use defer?

Benefits:
- Faster page loading
- HTML loads first
- Prevents blocking

---

# What is debugger?

`debugger` is used to pause JavaScript execution for debugging.

It helps developers:
- Check variables
- Find errors
- Understand code flow

---

# Example

```javascript
let x = 10;

debugger;

console.log(x);
```

When execution reaches `debugger`, the browser pauses the code.

---


---

<div align="center">

### Day 03 of Learning JavaScript

</div>

<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes 

### Decision Making • if-else • Nested if • Switch Statement • Ternary Operator • Variable Visualization

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-6-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

</div>






Learning JavaScript fundamentals step by step.

---

# Decision Making in JavaScript

Decision-making statements allow a program to choose different actions based on conditions.

These statements help JavaScript make choices and execute specific blocks of code.

---

# if Statement

The `if` statement executes a block of code only if a condition is true.

### Example

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}
```

---

# if...else Statement

The `else` block runs when the condition is false.

### Example

```javascript
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```

---

# if...else if...else Statement

Used when multiple conditions need to be checked.

### Example

```javascript
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

---

# Nested if Statement

An `if` statement inside another `if` statement is called a nested if.

### Example

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    }
}
```

---

# Switch Statement

The `switch` statement is used when one value is compared against multiple cases.

### Example

```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
```

---

# Why Use break?

The `break` statement stops execution after a matching case is found.

Without `break`, JavaScript continues executing the next cases.

---

# Ternary Operator

The ternary operator is a shorthand version of `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
let age = 20;

let result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);
```

Output:

```text
Adult
```

---

# Variable Visualization

When a variable is created, JavaScript stores its value in memory.

### Example

```javascript
let name = "Raj";
let age = 20;
```

Visualization:

```text
Memory

name  → "Raj"
age   → 20
```

---

# Understanding Variable Addresses

Every variable is stored somewhere in memory.

JavaScript manages memory automatically, so we usually work with variable names rather than actual memory addresses.

Visualization:

```text
Variable      Value

name     →    "Raj"
age      →    20
marks    →    85
```

---

# Real-Life Example of Decision Making

```javascript
let temperature = 35;

if (temperature > 30) {
    console.log("Hot Weather");
} else {
    console.log("Pleasant Weather");
}
```

---



---

### Day 06 of Learning JavaScript

Keep Learning • Keep Practicing • Keep Building

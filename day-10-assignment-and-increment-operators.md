<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes - Day 10

### Assignment Operators • Increment Operator • Decrement Operator

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-10-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

Learning JavaScript fundamentals step by step.

</div>

---

# Topics Covered

* Assignment Operator
* Compound Assignment Operators
* Increment Operator
* Decrement Operator
* Pre-Increment
* Post-Increment
* Pre-Decrement
* Post-Decrement

---

# Assignment Operator (=)

The assignment operator is used to assign a value to a variable.

### Example

```javascript
let x = 10;
```

Here:

```text
Variable → x
Value    → 10
```

---

# Compound Assignment Operators

Compound assignment operators perform an operation and assignment in a single step.

---

## Addition Assignment (+=)

```javascript
let x = 10;

x += 5;

console.log(x);
```

Output:

```text
15
```

Equivalent to:

```javascript
x = x + 5;
```

---

## Subtraction Assignment (-=)

```javascript
let x = 10;

x -= 3;

console.log(x);
```

Output:

```text
7
```

Equivalent to:

```javascript
x = x - 3;
```

---

## Multiplication Assignment (*=)

```javascript
let x = 10;

x *= 2;

console.log(x);
```

Output:

```text
20
```

Equivalent to:

```javascript
x = x * 2;
```

---

## Division Assignment (/=)

```javascript
let x = 10;

x /= 2;

console.log(x);
```

Output:

```text
5
```

Equivalent to:

```javascript
x = x / 2;
```

---

## Modulus Assignment (%=)

```javascript
let x = 10;

x %= 3;

console.log(x);
```

Output:

```text
1
```

Equivalent to:

```javascript
x = x % 3;
```

---

# Increment Operator (++)

The increment operator increases a value by 1.

### Example

```javascript
let x = 5;

x++;

console.log(x);
```

Output:

```text
6
```

---

# Post-Increment (x++)

First uses the value, then increases it.

### Example

```javascript
let x = 5;

let y = x++;

console.log(x);
console.log(y);
```

Output:

```text
6
5
```

### Visualization

```text
Initial:
x = 5

Step 1:
y = x

Step 2:
x = x + 1

Final:
x = 6
y = 5
```

---

# Pre-Increment (++x)

First increases the value, then uses it.

### Example

```javascript
let x = 5;

let y = ++x;

console.log(x);
console.log(y);
```

Output:

```text
6
6
```

### Visualization

```text
Initial:
x = 5

Step 1:
x = x + 1

Step 2:
y = x

Final:
x = 6
y = 6
```

---

# Decrement Operator (--)

The decrement operator decreases a value by 1.

### Example

```javascript
let x = 5;

x--;

console.log(x);
```

Output:

```text
4
```

---

# Post-Decrement (x--)

First uses the value, then decreases it.

### Example

```javascript
let x = 5;

let y = x--;

console.log(x);
console.log(y);
```

Output:

```text
4
5
```

---

# Pre-Decrement (--x)

First decreases the value, then uses it.

### Example

```javascript
let x = 5;

let y = --x;

console.log(x);
console.log(y);
```

Output:

```text
4
4
```

---

# Easy Trick to Remember

```text
x++  → Use First, Increase Later

++x  → Increase First, Use Later

x--  → Use First, Decrease Later

--x  → Decrease First, Use Later
```

---


<div align="center">

## Day 10 Complete

Small Daily Progress Leads to Big Results 🚀

</div>

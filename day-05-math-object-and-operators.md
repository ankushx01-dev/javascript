<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes 

### Math Object • document.write() • Truthy & Falsy Values • Comparison Operators • Logical Operators

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-05-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

</div>


Learning JavaScript fundamentals step by step.

---

# Math Object in JavaScript

The `Math` object provides built-in mathematical functions and constants.

### Example

```javascript
console.log(Math.PI);
```

Output:

```text
3.141592653589793
```

---

# Math.round()

Rounds a number to the nearest integer.

### Example

```javascript
console.log(Math.round(4.4));
console.log(Math.round(4.6));
```

Output:

```text
4
5
```

---

# Math.ceil()

Rounds a number upward to the nearest integer.

### Example

```javascript
console.log(Math.ceil(4.1));
```

Output:

```text
5
```

---

# Math.floor()

Rounds a number downward to the nearest integer.

### Example

```javascript
console.log(Math.floor(4.9));
```

Output:

```text
4
```

---

# Math.pow()

Returns the power of a number.

### Example

```javascript
console.log(Math.pow(2, 3));
```

Output:

```text
8
```

---

# Math.sqrt()

Returns the square root of a number.

### Example

```javascript
console.log(Math.sqrt(25));
```

Output:

```text
5
```

---

# Math.random()

Generates a random number between 0 and 1.

### Example

```javascript
console.log(Math.random());
```

---

# document.write()

Used to write content directly to a web page.

### Example

```javascript
document.write("Hello JavaScript");
```

Output:

```text
Hello JavaScript
```

---

# Truthy and Falsy Values

JavaScript treats values as either Truthy or Falsy when evaluating conditions.

---

# Falsy Values

The following values are considered falsy:

```javascript
false
0
-0
""
null
undefined
NaN
```

### Example

```javascript
if (0) {
    console.log("True");
} else {
    console.log("False");
}
```

Output:

```text
False
```

---

# Truthy Values

Almost everything else is truthy.

### Examples

```javascript
"Hello"
1
[]
{}
true
```

---

# Comparison Operators

Comparison operators compare two values and return either `true` or `false`.

| Operator | Meaning                  |
| -------- | ------------------------ |
| ==       | Equal to                 |
| ===      | Strict equal to          |
| !=       | Not equal to             |
| !==      | Strict not equal to      |
| >        | Greater than             |
| <        | Less than                |
| >=       | Greater than or equal to |
| <=       | Less than or equal to    |

---

# Examples

```javascript
console.log(5 > 3);
```

Output:

```text
true
```

```javascript
console.log(5 === "5");
```

Output:

```text
false
```

---

# Logical Operators

Logical operators combine multiple conditions.

---

# AND Operator (&&)

Returns true only if both conditions are true.

### Example

```javascript
console.log(true && true);
```

Output:

```text
true
```

---

# OR Operator (||)

Returns true if at least one condition is true.

### Example

```javascript
console.log(true || false);
```

Output:

```text
true
```

---

# NOT Operator (!)

Reverses a boolean value.

### Example

```javascript
console.log(!true);
```

Output:

```text
false
```

---



---

### Day 05 of Learning JavaScript

Keep Learning • Keep Practicing • Keep Building

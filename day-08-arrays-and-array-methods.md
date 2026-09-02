<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes 

### Arrays • Array Properties • Basic Array Methods

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-08-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

Learning JavaScript fundamentals step by step.

</div>

---

# What is an Array?

An array is a special object used to store multiple values in a single variable.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

Instead of creating many variables:

```javascript
let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Mango";
```

we can store all values in one array.

---

# Array Visualization

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

```text
Index:   0         1         2

        ┌───────┬────────┬───────┐
Value:  │ Apple │ Banana │ Mango │
        └───────┴────────┴───────┘
```

---

# Accessing Array Elements

Arrays use indexes starting from **0**.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[0]);
```

Output:

```text
Apple
```

---

# Array Property: length

Returns the total number of elements.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.length);
```

Output:

```text
3
```

---

# Adding Elements

## push()

Adds an element to the end.

### Example

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Mango");
```

Result:

```javascript
["Apple", "Banana", "Mango"]
```

---

# Removing Elements

## pop()

Removes the last element.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();
```

Result:

```javascript
["Apple", "Banana"]
```

---

# Adding at the Beginning

## unshift()

Adds elements at the beginning.

### Example

```javascript
fruits.unshift("Orange");
```

Result:

```javascript
["Orange", "Apple", "Banana"]
```

---

# Removing from the Beginning

## shift()

Removes the first element.

### Example

```javascript
fruits.shift();
```

Result:

```javascript
["Apple", "Banana"]
```

---

# Converting Array to String

## join()

Combines array elements into a string.

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
```

Output:

```text
Apple, Banana, Mango
```

---

# Checking Data Type

```javascript
let fruits = ["Apple", "Banana"];

console.log(typeof fruits);
```

Output:

```text
object
```

Arrays are technically a type of object in JavaScript.

---

# Key Points

* Arrays store multiple values.
* Indexing starts from 0.
* Arrays are non-primitive data types.
* Arrays are dynamic and can grow or shrink.
* The `length` property gives the total number of elements.

---


---

<div align="center">

## Day 08 Complete

Keep Learning • Keep Building • Keep Growing

</div>

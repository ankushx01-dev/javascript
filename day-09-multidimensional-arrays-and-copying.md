<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes - Day 09

### Multidimensional Arrays • slice() • splice() • Shallow Copy • Deep Copy

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-09-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

Learning JavaScript fundamentals step by step.

</div>

---


---

# Why Do We Need Copies?

When working with arrays and objects, we often need a duplicate version of data.

Copying helps us:

* Protect original data
* Avoid accidental changes
* Work safely with complex data
* Manage application state efficiently

---

# Multidimensional Arrays

A multidimensional array is an array that contains other arrays.

### Example

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

---

# Visualization

```text
matrix

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
```

---

# Accessing Elements

### Example

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(matrix[0][1]);
```

Output:

```text
2
```

Explanation:

```text
matrix[0]     → [1, 2, 3]
matrix[0][1]  → 2
```

---

# Array Method: slice()

`slice()` extracts a portion of an array and returns a new array.

✅ Does NOT modify the original array.

### Syntax

```javascript
array.slice(start, end);
```

### Example

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

let result = fruits.slice(1, 3);

console.log(result);
```

Output:

```javascript
["Banana", "Mango"]
```

Original Array:

```javascript
["Apple", "Banana", "Mango", "Orange"]
```

---

# slice() Visualization

```text
Index:     0        1         2        3

         Apple   Banana   Mango   Orange
                    ↑       ↑
                 Start    End (excluded)
```

Result:

```javascript
["Banana", "Mango"]
```

---

# Array Method: splice()

`splice()` is used to add, remove, or replace elements.

⚠️ Modifies the original array.

### Syntax

```javascript
array.splice(start, deleteCount);
```

---

# Removing Elements

```javascript
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);
```

Output:

```javascript
["Apple", "Orange"]
```

---

# Adding Elements

```javascript
let fruits = ["Apple", "Orange"];

fruits.splice(1, 0, "Banana", "Mango");

console.log(fruits);
```

Output:

```javascript
["Apple", "Banana", "Mango", "Orange"]
```

---

# Replacing Elements

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.splice(1, 1, "Grapes");

console.log(fruits);
```

Output:

```javascript
["Apple", "Grapes", "Mango"]
```

---

# slice() vs splice()

| Feature                | slice() | splice() |
| ---------------------- | ------- | -------- |
| Returns New Array      | ✅       | ❌        |
| Changes Original Array | ❌       | ✅        |
| Extract Data           | ✅       | ❌        |
| Add/Delete Elements    | ❌       | ✅        |

---

# Memory References

Objects and arrays are stored by reference.

### Example

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;
```

Visualization:

```text
arr1 ──┐
       ├──► [1, 2, 3]
arr2 ──┘
```

Both variables point to the same array.

---

# Problem with References

```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
```

Output:

```javascript
[1, 2, 3, 4]
```

The original array changed too.

---

# What is a Shallow Copy?

A shallow copy creates a new array or object, but nested objects still share references.

### Array Example

```javascript
let original = [1, 2, 3];

let copy = [...original];
```

### Object Example

```javascript
let original = {
    name: "Raj",
    address: {
        city: "Lahra"
    }
};

let copy = { ...original };
```

---

# Shallow Copy Visualization

```text
original
    │
    └── address ──┐
                  │
copy              │
    └── address ──┘
```

The nested object is shared.

---

# Shallow Copy Problem

```javascript
copy.address.city = "Delhi";

console.log(original.address.city);
```

Output:

```text
Delhi
```

The original object also changed.

---

# What is a Deep Copy?

A deep copy creates completely separate copies of nested objects and arrays.

### Example

```javascript
let original = {
    name: "Raj",
    address: {
        city: "Lahra"
    }
};

let copy = structuredClone(original);
```

---

# Deep Copy Visualization

```text
original
    └── address → Lahra

copy
    └── address → Lahra
```

Both objects are independent.

---

# Deep Copy Example

```javascript
copy.address.city = "Delhi";

console.log(original.address.city);
```

Output:

```text
Lahra
```

The original object remains unchanged.

---

# Creating Deep Copies

## Method 1: structuredClone()

```javascript
let copy = structuredClone(original);
```

Recommended modern approach.

---

## Method 2: JSON Method

```javascript
let copy = JSON.parse(
    JSON.stringify(original)
);
```

Commonly used before `structuredClone()`.

---

# Shallow Copy vs Deep Copy

| Feature               | Shallow Copy | Deep Copy |
| --------------------- | ------------ | --------- |
| New Object Created    | ✅            | ✅         |
| Nested Objects Shared | ✅            | ❌         |
| Original Data Safe    | ❌            | ✅         |
| Memory Usage          | Less         | More      |

---

# Real-Life Analogy

## Shallow Copy

```text
Two students share the same notebook.

If one writes something,
both see the change.
```

## Deep Copy

```text
Each student gets a separate notebook.

Changes in one notebook
do not affect the other.
```

---

# Key Takeaways

* Multidimensional arrays store arrays inside arrays.
* Array indexing starts from 0.
* `slice()` extracts data without changing the original array.
* `splice()` modifies the original array.
* Arrays and objects are stored by reference.
* Shallow copies share nested references.
* Deep copies create completely independent data.
* `structuredClone()` is the preferred modern deep-copy method.

---


---

<div align="center">

## Day 09 Complete

Understanding Memory & References Makes You a Better JavaScript Developer 🚀

</div>

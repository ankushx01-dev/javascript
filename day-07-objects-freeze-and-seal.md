<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes 

### Objects • Non-Primitive Data Types • Object.freeze() • Object.seal() • delete Operator • in Operator

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-07-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

</div>

---

# Topics Covered

* What are Objects?
* Non-Primitive Data Types
* Creating Objects
* Accessing Object Properties
* Updating Object Properties
* Adding New Properties
* delete Operator
* in Operator
* Object.freeze()
* Object.seal()
* Difference Between freeze() and seal()

---

# What are Objects?

Objects are collections of related data stored as **key-value pairs**.

### Syntax

```javascript
let objectName = {
    key: value
};
```

### Example

```javascript
let student = {
    name: "Raj",
    age: 20,
    course: "CSE"
};
```

---

# Object Visualization

```text
student
│
├── name   → "Raj"
├── age    → 20
└── course → "CSE"
```

Objects help us organize data in a structured way.

---

# Non-Primitive Data Types

Unlike primitive values, non-primitive data types can store multiple values and complex data structures.

### Examples

```javascript
Object
Array
Function
```

### Object Example

```javascript
let person = {
    name: "Raj",
    age: 20
};
```

---

# Accessing Object Properties

## Dot Notation

```javascript
console.log(student.name);
```

Output:

```text
Raj
```

---

## Bracket Notation

```javascript
console.log(student["age"]);
```

Output:

```text
20
```

---

# Updating Properties

```javascript
student.age = 21;
```

Updated Object:

```javascript
{
    name: "Raj",
    age: 21,
    course: "CSE"
}
```

---

# Adding New Properties

```javascript
student.city = "Lahra";
```

Updated Object:

```javascript
{
    name: "Raj",
    age: 21,
    course: "CSE",
    city: "Lahra"
}
```

---

# delete Operator

Used to remove a property from an object.

### Example

```javascript
let student = {
    name: "Raj",
    age: 20,
    result: "Pass"
};

delete student.result;
```

Output:

```javascript
{
    name: "Raj",
    age: 20
}
```

---

# Understanding delete

```javascript
delete student.result;
```

| Part    | Meaning              |
| ------- | -------------------- |
| student | Object Name          |
| result  | Property Name        |
| delete  | Removes the Property |

---

# in Operator

Checks whether a property exists inside an object.

### Example

```javascript
let student = {
    name: "Raj",
    age: 20
};

console.log("name" in student);
```

Output:

```text
true
```

---

### Another Example

```javascript
console.log("result" in student);
```

Output:

```text
false
```

---

# Object.freeze()

Locks an object completely.

After freezing:

❌ Cannot add properties

❌ Cannot modify properties

❌ Cannot delete properties

### Example

```javascript
let student = {
    name: "Raj"
};

Object.freeze(student);

student.name = "Rahul";

console.log(student.name);
```

Output:

```text
Raj
```

---

# Object.seal()

Partially locks an object.

After sealing:

❌ Cannot add properties

❌ Cannot delete properties

✅ Can modify existing properties

### Example

```javascript
let student = {
    name: "Raj"
};

Object.seal(student);

student.name = "Rahul";

console.log(student.name);
```

Output:

```text
Rahul
```

---

# freeze() vs seal()

| Feature                  | freeze() | seal() |
| ------------------------ | -------- | ------ |
| Add New Property         | ❌        | ❌      |
| Delete Property          | ❌        | ❌      |
| Modify Existing Property | ❌        | ✅      |

---

# Real-World Analogy

### freeze()

```text
A locked box 🔒

You cannot add, remove, or change anything.
```

### seal()

```text
A sealed box 📦

You cannot add or remove items,
but you can rearrange items already inside.
```

---

# Key Takeaways

* Objects store data as key-value pairs.
* Objects are non-primitive data types.
* Properties can be accessed using dot or bracket notation.
* Properties can be added, updated, and deleted.
* The `in` operator checks property existence.
* `Object.freeze()` completely locks an object.
* `Object.seal()` allows modification of existing properties but prevents adding or deleting properties.

---


---

<div align="center">

## Day 07 Complete

**Keep Learning • Keep Building • Keep Growing**

⭐ JavaScript Journey Continues ⭐

</div>

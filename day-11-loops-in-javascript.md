<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width="120" alt="JavaScript Logo"/>

# JavaScript Notes - Day 11

### Loops • for Loop • while Loop • do...while Loop

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge\&logo=javascript)
![Day](https://img.shields.io/badge/Day-11-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Learning-In%20Progress-success?style=for-the-badge)

Learning JavaScript fundamentals step by step.

</div>

---



---

# What are Loops?

Loops are used to execute a block of code repeatedly until a condition becomes false.

Without loops:

```javascript
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
```

With loops:

```javascript
for(let i = 1; i <= 5; i++) {
    console.log("Hello");
}
```

---

# Why Do We Need Loops?

Loops help us:

* Reduce code repetition
* Save time
* Improve readability
* Perform repetitive tasks efficiently

---

# while Loop

The `while` loop executes as long as the condition remains true.

### Syntax

```javascript
while(condition) {
    // code
}
```

### Example

```javascript
let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
}
```

Output:

```text
1
2
3
4
5
```

---

# while Loop Visualization

```text
i = 1

Condition: i <= 5 ✔
Print 1

Condition: i <= 5 ✔
Print 2

Condition: i <= 5 ✔
Print 3

Condition: i <= 5 ✔
Print 4

Condition: i <= 5 ✔
Print 5

Condition: i <= 5 ✖
Loop Stops
```

---

# for Loop

The `for` loop is commonly used when the number of iterations is known.

### Syntax

```javascript
for(initialization; condition; update) {
    // code
}
```

### Example

```javascript
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

---

# for Loop Breakdown

```javascript
for(let i = 1; i <= 5; i++)
```

| Part      | Purpose        |
| --------- | -------------- |
| let i = 1 | Initialization |
| i <= 5    | Condition      |
| i++       | Update         |

---

# Multiplication Table Example

```javascript
let x = 5;

for(let i = 1; i <= 10; i++) {
    console.log(x + " x " + i + " = " + x * i);
}
```

Output:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

# do...while Loop

The `do...while` loop executes the code at least once before checking the condition.

### Syntax

```javascript
do {
    // code
} while(condition);
```

### Example

```javascript
let i = 1;

do {
    console.log(i);
    i++;
} while(i <= 5);
```

Output:

```text
1
2
3
4
5
```

---

# Special Feature of do...while

Even if the condition is false, the code runs once.

### Example

```javascript
let i = 10;

do {
    console.log("Executed");
} while(i < 5);
```

Output:

```text
Executed
```

---

# Difference Between while and do...while

| Feature                 | while     | do...while |
| ----------------------- | --------- | ---------- |
| Condition Checked First | ✅         | ❌          |
| Executes At Least Once  | ❌         | ✅          |
| Condition Position      | Beginning | End        |

---

# Loop Comparison

| Loop       | Best Use Case                |
| ---------- | ---------------------------- |
| while      | Unknown number of iterations |
| for        | Known number of iterations   |
| do...while | Run code at least once       |

---

# Infinite Loop

An infinite loop never stops.

### Example

```javascript
while(true) {
    console.log("Hello");
}
```

⚠️ Avoid creating infinite loops accidentally.

---

# Real-Life Example

Imagine filling 10 bottles with water.

Instead of writing:

```text
Fill Bottle 1
Fill Bottle 2
Fill Bottle 3
...
```

Use a loop:

```javascript
for(let i = 1; i <= 10; i++) {
    console.log("Fill Bottle " + i);
}
```

---


---

<div align="center">

## Day 11 Complete

Practice More Loops, Become Better at Logic Building 🚀

</div>

<div align="center">

# JavaScript Notes

### HTTP Requests & Responses • Dialog Boxes • Strings • Template Literals

Learning JavaScript fundamentals step by step.

</div>

---

# How Websites Work

When you visit a website, communication happens between your browser and a server.

### Basic Flow

```text
User
  ↓
Browser
  ↓
HTTP Request
  ↓
Server
  ↓
HTTP Response
  ↓
Browser Displays Website
```

---

# What is an HTTP Request?

An HTTP Request is a message sent by the browser to the server asking for data.

### Example

```text
GET /index.html
```

The browser requests:
- Web pages
- Images
- Videos
- APIs
- Other resources

---

# What is an HTTP Response?

An HTTP Response is the server's reply to the browser.

The response contains:
- Requested data
- Status code
- Headers

### Example

```text
200 OK
```

This means the request was successful.

---

# Common HTTP Status Codes

| Code | Meaning |
|--------|---------|
| 200 | Success |
| 201 | Resource Created |
| 301 | Redirect |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# JavaScript Dialog Boxes

JavaScript provides built-in dialog boxes to interact with users.

---

## alert()

Used to display a message.

### Example

```javascript
alert("Welcome to JavaScript!");
```

---

## confirm()

Used to get confirmation from the user.

### Example

```javascript
confirm("Do you want to continue?");
```

Returns:
- `true` if OK is clicked
- `false` if Cancel is clicked

---

## prompt()

Used to take input from the user.

### Example

```javascript
prompt("Enter your name");
```

Returns the entered value as a string.

---

# Strings in JavaScript

A string is a sequence of characters enclosed in:

```javascript
" "
' '
` `
```

### Example

```javascript
let name = "Raj";
```

---

# String Property

## length

Returns the total number of characters.

### Example

```javascript
let text = "JavaScript";

console.log(text.length);
```

Output:

```text
10
```

---

# String Methods

## includes()

Checks whether a string contains a specific value.

### Example

```javascript
let text = "JavaScript";

console.log(text.includes("Script"));
```

Output:

```text
true
```

---

## slice()

Extracts a portion of a string.

### Example

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4));
```

Output:

```text
Java
```

---

## split()

Converts a string into an array.

### Example

```javascript
let text = "HTML,CSS,JavaScript";

console.log(text.split(","));
```

Output:

```javascript
["HTML", "CSS", "JavaScript"]
```

---

## toUpperCase()

Converts text to uppercase.

### Example

```javascript
let text = "hello";

console.log(text.toUpperCase());
```

Output:

```text
HELLO
```

---

## toLowerCase()

Converts text to lowercase.

### Example

```javascript
let text = "HELLO";

console.log(text.toLowerCase());
```

Output:

```text
hello
```

---

## trim()

Removes extra spaces from both ends.

### Example

```javascript
let text = "   JavaScript   ";

console.log(text.trim());
```

Output:

```text
JavaScript
```

---

# Template Literals (Backticks)

Backticks are written using:

```javascript
`
```

Template literals provide a modern and cleaner way to work with strings.

They allow:
- String interpolation
- Multi-line strings
- Better readability

---

## String Interpolation

You can insert variables directly into a string using `${}`.

### Example

```javascript
let name = "Raj";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

Output:

```text
My name is Raj and I am 20 years old.
```

---

## Multi-line Strings

Backticks allow strings to span multiple lines.

### Example

```javascript
let message = `
Hello,
Welcome to JavaScript.
Happy Learning!
`;

console.log(message);
```

Output:

```text
Hello,
Welcome to JavaScript.
Happy Learning!
```

---

# Why Use Backticks?

Without backticks:

```javascript
let name = "Raj";

console.log("Hello " + name);
```

With backticks:

```javascript
let name = "Raj";

console.log(`Hello ${name}`);
```

Backticks make code:
- Cleaner
- Easier to read
- Easier to maintain

---

# What I Learned Today

- How websites work
- HTTP Requests
- HTTP Responses
- Common HTTP status codes
- alert()
- confirm()
- prompt()
- String property: length
- String methods
- includes()
- slice()
- split()
- trim()
- toUpperCase()
- toLowerCase()
- Template literals (Backticks)
- String interpolation
- Multi-line strings

---

<div align="center">

### Day 04 of Learning JavaScript

Keep Learning • Keep Building • Keep Coding

</div>
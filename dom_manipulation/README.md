Java script DOM manipulation

# DOM Manipulation Tasks

In this repository, you will find JavaScript programs that demonstrate various aspects of manipulating the Document Object Model (DOM) in HTML documents. These tasks cover fundamental concepts such as selecting elements, modifying content, attributes, styles, creating, appending, and removing elements using the DOM API.

## Task 0: Play with the DOM
**File:** `0-select-id.html`

This task involves accessing and modifying an HTML element using its ID. We start with the following HTML code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Introduction</title>
</head>
<body>
  <p id="myParagraph">This is a paragraph.</p>
</body>
</html>
```

In this task, we will:
- Select the element using its ID and store it in a variable.
- Use the DOM API to modify the content of the `<p>` element.
- Verify that the program successfully modifies the element content when the HTML file is opened in a browser.

## Task 1: Selecting HTML Elements Using Selectors
**File:** `1-select-class.html`

This task demonstrates the use of selectors to select specific HTML elements. The initial HTML code is as follows:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Selecting Elements</title>
  <style>
    .highlight {
      color: red;
    }
  </style>
</head>
<body>
  <p class="highlight">This is a highlighted paragraph.</p>
  <p>This is a normal paragraph.</p>
</body>
</html>
```

In this task, we will:
- Use selectors to modify the format of the `<p class="highlight">` element.
- Make use of `document.querySelectorAll`.
- Verify that the program successfully modifies the element's content when the HTML file is opened in a browser.

## Task 2: Modifying Element Content, Attributes, and Styles
**File:** `2-select-image.html`

This task demonstrates the use of selectors to select specific HTML elements. We start with the following HTML code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Modifying Elements</title>
  <style>
    img {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <img id="myImage" src="https://picsum.photos/200/300" alt="My Image">
</body>
</html>
```

In this task, we will:
- Select the `<img>` element using its ID and store it in a variable.
- Use the DOM API to modify the `<img>` element's `src`, `alt`, and border style.
- Verify that the program successfully modifies the element when the HTML file is opened in a browser.

## Task 3: Creating, Appending, and Removing Elements
**File:** `3-multiple-actions.html`

This task involves the creation, appending, and removal of elements using the DOM. We start with the following HTML code:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Creating and Removing Elements</title>
</head>
<body>
  <div id="container"></div>
</body>
</html>
```

In this task, we will:
- Select the container element using its ID and store it in a variable.
- Use the DOM API to create a new `<p>` element and add content to it.
- Append the newly created elements to the container element.
- Add a button that removes/hides the newly created paragraph when clicked.
- Verify that the program successfully creates, appends, and toggles elements when the HTML file is opened in a browser.

For each task, you can find the corresponding HTML file in this repository's directory. Feel free to explore and run these examples to better understand DOM manipulation in JavaScript.
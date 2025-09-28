
<details>
<summary><strong>📋 Table of Contents</strong></summary>

- [**What Are Components**?](#what-are-components)
  - [📘 **React — Components**](#-react--components)
  - [🔍 Example Breakdown](#-example-breakdown)
    - [🔹 Components visible in the UI:](#-components-visible-in-the-ui)
  - [🔄 Reusability \& Nesting](#-reusability--nesting)
- [❓**Why Components**?](#why-components)
  - [🔧 Why React Embraces Components](#-why-react-embraces-components)
  - [🧩 Why Small Components Matter in React](#-why-small-components-matter-in-react)
  - [🔑 Key Takeaway](#-key-takeaway)
- [⚛️ **The Anatomy of a Component**](#️-the-anatomy-of-a-component)
  - [🚀 Example Component: `SubmitButton`](#-example-component-submitbutton)
    - [📋 Code Snippet](#-code-snippet)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation)
  - [📁 Storing and Using the Component](#-storing-and-using-the-component)
    - [💾 File Structure and Naming](#-file-structure-and-naming)
    - [🖼️ Example of Component Usage](#️-example-of-component-usage)
    - [📋 Code Snippet](#-code-snippet-1)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation-1)
  - [📦 Understanding Imports and Exports](#-understanding-imports-and-exports)
    - [💡 Import Rules](#-import-rules)
  - [📚 Further Learning (Note)](#-further-learning-note)
- [🏗️ **Component Foundations and Types**](#️-component-foundations-and-types)
  - [🔁 Two Ways to Define Components](#-two-ways-to-define-components)
    - [💡 Note on Component Types](#-note-on-component-types)
  - [🔎 Noteworthy Component Features](#-noteworthy-component-features)
- [⚙️ **What Exactly Are Component Functions**?](#️-what-exactly-are-component-functions)
  - [💡 Functions are JavaScript, Not React](#-functions-are-javascript-not-react)
  - [🎯 What Qualifies a Function as a React Component?](#-what-qualifies-a-function-as-a-react-component)
    - [❌ Non-Component Functions](#-non-component-functions)
    - [📋 Code Snippet](#-code-snippet-2)
    - [✅ Component Functions](#-component-functions)
  - [📞 How Components are Executed](#-how-components-are-executed)
  - [🎨 Note on Renderable Values](#-note-on-renderable-values)
- [🌐 **What Does React Do with All These Components**?](#-what-does-react-do-with-all-these-components)
  - [🚀 The React Entry Point](#-the-react-entry-point)
    - [📋 Code Snippet](#-code-snippet-3)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation-2)
  - [🌳 The Component Tree](#-the-component-tree)
    - [Figure 2.2: Nested React components form a component tree](#figure-22-nested-react-components-form-a-component-tree)
  - [🔄 Translating Components to DOM Instructions](#-translating-components-to-dom-instructions)
    - [Example Traversal and Translation](#example-traversal-and-translation)
    - [📋 Code Snippet](#-code-snippet-4)
- [🧱 **Built-In Components and the Core of React**](#-built-in-components-and-the-core-of-react)
  - [🧐 The Final Form of JSX](#-the-final-form-of-jsx)
  - [💡 JSX is Syntactical Sugar](#-jsx-is-syntactical-sugar)
  - [🧩 Built-In Primitives](#-built-in-primitives)
    - [📜 Note on Web Components](#-note-on-web-components)
- [🏷️ **Naming Conventions**](#️-naming-conventions)
  - [💻 Component Function Naming (PascalCase)](#-component-function-naming-pascalcase)
    - [🧐 What is PascalCase?](#-what-is-pascalcase)
    - [🚦 PascalCase as a Convention vs. Rule](#-pascalcase-as-a-convention-vs-rule)
    - [🛑 Why the Hard Rule in JSX?](#-why-the-hard-rule-in-jsx)
  - [🗄️ File Naming Conventions](#️-file-naming-conventions)
    - [📁 Standard File Placement](#-standard-file-placement)
    - [✏️ File Naming Styles](#️-file-naming-styles)
- [🔄 **JSX vs. HTML vs. Vanilla JavaScript**](#-jsx-vs-html-vs-vanilla-javascript)
  - [💻 What Exactly is JSX?](#-what-exactly-is-jsx)
    - [🛠️ The Build Process Transformation](#️-the-build-process-transformation)
  - [🧩 JSX vs. React's `createElement()`](#-jsx-vs-reacts-createelement)
    - [Example 1: Simple Element](#example-1-simple-element)
    - [⚙️ How `createElement()` Works](#️-how-createelement-works)
    - [Example 2: Element with Configuration](#example-2-element-with-configuration)
    - [Example 3: Nested Elements](#example-3-nested-elements)
  - [🏛️ React Package Collaboration](#️-react-package-collaboration)
- [🚫 **Using React Without JSX**](#-using-react-without-jsx)
  - [🏗️ Building Components with `React.createElement()`](#️-building-components-with-reactcreateelement)
    - [1. JSX Version (Easy to Read)](#1-jsx-version-easy-to-read)
    - [📋 Code Snippet](#-code-snippet-5)
    - [2. `React.createElement()` Version (What JSX Becomes)](#2-reactcreateelement-version-what-jsx-becomes)
    - [📋 Code Snippet](#-code-snippet-6)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation-3)
  - [🔑 The Importance of JSX](#-the-importance-of-jsx)
- [💎 **JSX Elements Are Treated Like Regular JavaScript Values**](#-jsx-elements-are-treated-like-regular-javascript-values)
  - [🧱 The Single Root Element Rule](#-the-single-root-element-rule)
    - [❌ Invalid Code (Returning Two Values)](#-invalid-code-returning-two-values)
    - [✅ Valid Alternative 1: Returning an Array](#-valid-alternative-1-returning-an-array)
    - [✅ Valid Alternative 2: Returning a React Fragment (Preferred)](#-valid-alternative-2-returning-a-react-fragment-preferred)
  - [✍️ Parentheses for Multiline JSX](#️-parentheses-for-multiline-jsx)
  - [📦 JSX Elements as Storable Values](#-jsx-elements-as-storable-values)
- [🛑 JSX Elements Must Have a Closing Tag](#-jsx-elements-must-have-a-closing-tag)
    - [🆚 JSX vs. Regular HTML](#-jsx-vs-regular-html)
- [🔄 **Moving Beyond Static Content**](#-moving-beyond-static-content)
  - [💻 Outputting Dynamic Content Syntax](#-outputting-dynamic-content-syntax)
    - [📋 Code Snippet](#-code-snippet-7)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation-4)
  - [💡 What Can Go Inside the Curly Braces?](#-what-can-go-inside-the-curly-braces)
    - [❌ What Is NOT Allowed?](#-what-is-not-allowed)
  - [🔗 Using Dynamic Values for Attributes](#-using-dynamic-values-for-attributes)
    - [📋 Code Snippet](#-code-snippet-8)
    - [✨ Detailed Code Explanation](#-detailed-code-explanation-5)
- [🏞️ **Rendering Images**](#️-rendering-images)
  - [🛑 Rule 1: Self-Closing Tag](#-rule-1-self-closing-tag)
  - [🔗 Rule 2: Handling Local Image Paths](#-rule-2-handling-local-image-paths)
    - [🧐 The Problem with Direct Paths](#-the-problem-with-direct-paths)
    - [✅ Solution 1: Importing the Image (Recommended for `src/`)](#-solution-1-importing-the-image-recommended-for-src)
    - [✨ Detailed Explanation of Image Import](#-detailed-explanation-of-image-import)
    - [✅ Solution 2: Using the `public/` Folder (For Static Assets)](#-solution-2-using-the-public-folder-for-static-assets)
    - [🌎 Using Remote Images](#-using-remote-images)
- [✂️ When Should You Split Components?](#️-when-should-you-split-components)
    - [💡 Rule of Thumb: Separate Data Entities](#-rule-of-thumb-separate-data-entities)
    - [➕ Advantage of Component Splitting](#-advantage-of-component-splitting)
    - [❓ The Challenge: Reusability and Configurability](#-the-challenge-reusability-and-configurability)

</details>

---

# **What Are Components**?

A key concept of React is the use of **components**.
Components are **reusable building blocks** that together compose the final **User Interface (UI)**.

👉 **Example:**
A simple website could be built from:

* **Sidebar** — containing navigation items
* **Main Section** — containing elements for adding and viewing tasks

## 📘 **React — Components**

<div align="center">
  <img src="./images/01.png"/>

*Figure 2.1: An example task management screen with sidebar and main area*
</div>


---

## 🔍 Example Breakdown

If you look at the example page above, you can identify different **components**.

### 🔹 Components visible in the UI:

* **Sidebar** and its **navigation items**
* **Main page area**
* **Header in the main area** (with title and due date)
* **Form** (for adding tasks)
* **Task list**

---

## 🔄 Reusability & Nesting

⚡ One of the most **powerful features** of React is:

* **Components can be reused** (the same component can be used in multiple places).
* **Components can be nested inside each other** — meaning one component can contain another.

👉 That’s what makes React and similar libraries **efficient and modular**.

---

# ❓**Why Components**?

No matter which web page you look at, they are always built from **building blocks**.
This isn’t something unique to React.

👉 Even plain **HTML** already “thinks” in components if you take a closer look.
For example, you have elements like:

* `<img>`
* `<header>`
* `<nav>`

And you combine these elements to **describe and structure** your website content.

---

## 🔧 Why React Embraces Components

React builds on this idea of breaking a web page into **reusable building blocks** because:

* It allows developers to work on **small, manageable chunks of code**.
* It’s much **easier and more maintainable** than working on a single, huge HTML (or React) file.

That’s why other libraries also embrace this approach:

* **Frontend libraries** like React or Angular
* **Backend templating engines** like **EJS** (Embedded JavaScript templates)

> 📝 **Note**
> EJS is a popular templating engine for JavaScript. It’s widely used in backend web development with **Node.js**.

---

## 🧩 Why Small Components Matter in React

When working with React, it’s especially important to keep your code **manageable** and **modular**.

Unlike plain HTML, React components are not just collections of HTML code.
Each component can also include:

* **JavaScript logic** 🧠
* **CSS styling** 🎨
* **JSX markup** 📄

👉 For complex UIs, combining markup, logic, and styling in a single file would quickly lead to **huge, unmaintainable code blocks**.
Think of a **large HTML file** that also contains **JavaScript and CSS** all mixed together — not very fun to work with!

---

## 🔑 Key Takeaway

When working on a React project:

* You will split your code into **many small components**.
* These components are then combined to form the overall **user interface**.
* This modular structure is a **core feature of React**.

> 📝 **Note**
> Technically, components are **optional** in React.
> You *could* build a large and complex web page using just **one single component**.
> But that would be **impractical** and **hard to maintain** — so it’s not recommended.

---

✨ That’s why **React projects rely heavily on components** — they make code clean, modular, and developer-friendly.

---

# ⚛️ **The Anatomy of a Component**

**Components** are the **building blocks** of any React application. They are essential for structuring your user interface. But what exactly does a React component look like? And how do you write them yourself? Let's dive in\! 🔎

-----

## 🚀 Example Component: `SubmitButton`

Here is an example of a simple component named `SubmitButton`:

### 📋 Code Snippet

```jsx
import { useState } from 'react';

function SubmitButton() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    setIsSubmitted(true);
  };

  return (
    <button onClick={handleSubmit}>
      { isSubmitted ? 'Loading…' : 'Submit' }
    </button>
  );
};

export default SubmitButton;
```

### ✨ Detailed Code Explanation

This code defines a functional React component named `SubmitButton`.

1.  **`import { useState } from 'react';`**:

      * This is a **standard JavaScript import statement**.
      * It imports the **`useState` Hook** from the React library. The `useState` Hook allows the component to manage **state** (data that changes over time) within the component.

2.  **`function SubmitButton() { ... }`**:

      * This is the definition of the component. A React component is typically defined as a **JavaScript function**. The name of the component, `SubmitButton`, must start with an **uppercase letter**.

3.  **`const [isSubmitted, setIsSubmitted] = useState(false);`**:

      * This line uses the `useState` Hook to initialize a piece of state.
      * **`isSubmitted`** is the current state value (a boolean, starting at `false`).
      * **`setIsSubmitted`** is the function used to update the state value.
      * The component starts in the state where the button **has not been submitted** (`false`).

4.  **`function handleSubmit() { setIsSubmitted(true); };`**:

      * This function is an **event handler**. It is executed when a specific event occurs (in this case, a click).
      * When called, it uses `setIsSubmitted(true)` to change the state variable `isSubmitted` to `true`. This action will cause the component to **re-render** (update on the screen).

5.  **`return ( ... );`**:

      * The `return` statement specifies what the component **renders** to the screen.
      * The content inside the `return` is **JSX** (JavaScript XML), which looks like HTML but allows you to mix in JavaScript logic.

6.  **`<button onClick={handleSubmit}>`**:

      * This creates a standard HTML **`<button>`** element.
      * `onClick={handleSubmit}` is an **event listener**. It tells React to run the `handleSubmit` function whenever the button is clicked.

7.  **`{ isSubmitted ? 'Loading…' : 'Submit' }`**:

      * This is **JavaScript logic embedded within the JSX** (using curly braces `{}`).
      * It uses a **ternary operator** to decide the button's text:
          * If `isSubmitted` is **`true`**, the text is `'Loading…'`.
          * If `isSubmitted` is **`false`**, the text is `'Submit'`.

8.  **`export default SubmitButton;`**:

      * This is a **standard JavaScript export statement**.
      * `export default` makes the `SubmitButton` component available for **importing** and use in other files.

-----

## 📁 Storing and Using the Component

### 💾 File Structure and Naming

  * You would typically store this code snippet in a **separate file**.
  * A common location is inside a dedicated folder, like `/src/components/SubmitButton.jsx`.
  * The file uses the **`.jsx` extension** because it contains **JSX code**.

> **⚠️ Vite Note:** The **Vite** development tool is strict and **enforces** the use of the `.jsx` file extension for files containing JSX code. Storing such code in a `.js` file is **not allowed** in Vite projects, although it might work in other React setups.

### 🖼️ Example of Component Usage

The following component, `AuthForm`, shows how to **import** and **use** the `SubmitButton` component:

### 📋 Code Snippet

```jsx
import SubmitButton from './submit-button.jsx';

function AuthForm() {
  return (
    <form>
      <input type="text" />
      <SubmitButton />
    </form>
  );
};

export default AuthForm;
```

### ✨ Detailed Code Explanation

1.  **`import SubmitButton from './submit-button.jsx';`**:

      * This imports the `SubmitButton` component (which was exported using `export default`) from its file location (`./submit-button.jsx`). The path is relative to the current file.

2.  **`function AuthForm() { ... }`**:

      * This defines a new component named `AuthForm`.

3.  **`<SubmitButton />`**:

      * This is where the magic happens\! This line **uses** the imported `SubmitButton` component inside the `AuthForm`'s return statement.
      * React will take the structure and logic defined in `SubmitButton` and insert it here, essentially rendering the interactive button as part of the form.

-----

## 📦 Understanding Imports and Exports

The `import` and `export` statements are not specific to React; they are **standard JavaScript keywords** that are fundamental to modern web development.

  * **Goal:** They help you **split related code across multiple files** (creating **modules**), making your project organized and maintainable.
  * **`export` or `export default`**: These keywords are used to make things like **variables, constants, classes, or functions** available from one file.
  * **`import`**: This keyword is used in another file to **bring in** the exported item so you can use it.

### 💡 Import Rules

  * **Local Components (Your Files):** You use the full file path. While Vite might technically allow you to omit the file extension (e.g., just `'./submit-button'`), it is generally a **good idea to include the extension (`.jsx`)** to align with standard JavaScript module practices.
  * **Third-Party Packages (e.g., React):** When importing from a package (like `useState` from the `react` package), you **do not add a file extension**. You simply use the package name.

-----

## 📚 Further Learning (Note)

If the idea of splitting code into separate files using `import` and `export` is new to you, it is highly recommended that you first explore **basic JavaScript resources on Modules**. Understanding this concept is crucial for working with any larger JavaScript project, including React.

🔗 [A great resource to learn the fundamentals is the MDN Web Docs article on Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)


# 🏗️ **Component Foundations and Types**

The previous examples showed simplified components. While they include features like `useState()` that you haven't learned yet, the fundamental concept should be clear: React is built on **standalone building blocks** that can be easily **combined** to create a user interface. 🧱

---

## 🔁 Two Ways to Define Components

When working with React, there are two primary ways you can define a component:

1.  **Class-based components (or "class components")**:
    * Components defined using the **`class` keyword**.
2.  **Functional components (or "function components")**:
    * Components defined using **regular JavaScript functions**.

React requires that components are defined as either a **function** or a **class**. Throughout this section, components will be built as **JavaScript functions**. 💻

### 💡 Note on Component Types

* Until late 2018, developers **had to use class-based components** for tasks involving internal **state** (data that changes).
* In late 2018, **React Hooks** were introduced. This new concept allows you to perform **all operations and tasks** (including using state) with **functional components**.
* As a result, while **class-based components are still supported**, they are becoming less common and are generally being phased out in modern React development. Therefore, they will **not be covered** in this resource. 🙅

---

## 🔎 Noteworthy Component Features

Looking closely at the examples, several key characteristics define how components and their code are structured:

1.  **Capitalized Names**:
    * The main component functions must use **capitalized names** (e.g., `SubmitButton`). This is a convention that helps React distinguish components from regular HTML elements (which use lowercase names, like `<div>`). 🏷️

2.  **Inner Functions**:
    * Inside the component function, you can define other **"inner" functions** (e.g., `handleSubmit`). These are typically written in **`camelCase`** (starting with a lowercase letter) following standard JavaScript naming conventions.

3.  **HTML-like Return Code (JSX)**:
    * The component function must **return HTML-like code** (known as **JSX code**). This is how React knows what to render on the screen. 🖼️

4.  **Use of Features (Hooks)**:
    * Features like **`useState()`** (known as **Hooks**) can be used **inside** the component functions to add special capabilities, like managing state. 🎣

5.  **Exporting Components**:
    * The component functions must be **exported** (usually via `export default`) so they can be used in other parts of the application. 📤

6.  **Importing Features**:
    * Certain features (like `useState` from the `react` package) and other custom components (like `SubmitButton`) must be **imported** using the **`import` keyword** before they can be used. 📥

---


# ⚙️ **What Exactly Are Component Functions**?

In React, the main type of component is a **function component** (or **functional component**). This is a crucial concept to understand.

## 💡 Functions are JavaScript, Not React

A **function** is a **regular JavaScript construct**. It is **not** a concept invented by React. This is key because **React is a JavaScript library** and leverages existing JavaScript features (like functions) rather than being a brand-new programming language.

  * In React, regular JavaScript functions are used to **encapsulate** two things:
    1.  **HTML-like code** (specifically, **JSX**).
    2.  The **JavaScript logic** that belongs to that markup code.

## 🎯 What Qualifies a Function as a React Component?

Not every JavaScript function you write in a React project is a component.

### ❌ Non-Component Functions

Functions like the following example are just regular JavaScript utility functions and **do not qualify** as React components:

### 📋 Code Snippet

```javascript
function calculate(a, b) {
 return {sum: a + b};
};
```

  * The `handleSubmit` function from the earlier `SubmitButton` example is also a regular JavaScript function, but it is **not** a React component itself. It is an **inner function** or **event handler**.

### ✅ Component Functions

A function will be treated as a component by React and can therefore be used like an HTML element in JSX code **only if** it returns a **renderable value**.

  * **The Most Important Rule:** You can only use a function as a React component in JSX code if it is a function that **returns something that can be rendered by React**.
  * In the previous examples, `SubmitButton` and `AuthForm` qualified as components because they both **returned JSX code**, which is a renderable value.

Once a function qualifies as a React component, you can use it inside of JSX code just like an HTML element (e.g., `<SubmitButton />`), similar to how you use a built-in HTML element (like `<input />`).

-----

## 📞 How Components are Executed

When working with vanilla JavaScript, you typically **call functions yourself** to execute them (e.g., `calculate(5, 3)`).

With functional components, the process is different:

  * **React calls these functions on your behalf.**
  * As a developer, you simply **use them like HTML elements** inside the JSX code. This tells React, "Please render the output of this function here."

-----

## 🎨 Note on Renderable Values

The concept of a "renderable value" is important because it defines what a component is allowed to show on the screen.

While the most common and logical value type to return is indeed **JSX code** (because it allows you to define the structure and content of your user interface), there are a few other types of values that also qualify as renderable:

  * **JSX Code (Markup)**: The most frequent return value.
  * **Strings**: Plain text.
  * **Numbers**: Numerical values.
  * **Arrays**: An array can hold other renderable values, such as **JSX elements, strings, or numbers**.

*You will see examples of components returning non-JSX code in later lessons (for instance, in later section, covering Portals and Refs).*

---

# 🌐 **What Does React Do with All These Components**?

React's primary job is to **take your component structure** (a tree of components) and **translate it** into the low-level instructions the browser needs to display a user interface (**DOM manipulations**).

## 🚀 The React Entry Point

Every React application starts at a single main entry file, typically named **`main.jsx`** (found in the `src/` folder). This file contains the instructions that tell React where to start rendering the app.

### 📋 Code Snippet

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
```

### ✨ Detailed Code Explanation

1.  **Imports**:

      * **`import React from 'react';`**: Imports the core React library.
      * **`import ReactDOM from 'react-dom/client';`**: Imports the **`react-dom`** package, which provides the **"bridge"** needed to work with the browser's Document Object Model (DOM).
      * **`import App from './App.jsx';`**: Imports the **Root Component** of the entire application, usually named `App`.

2.  **`const root = ReactDOM.createRoot(document.getElementById('root'));`**:

      * **`ReactDOM.createRoot()`**: This method instructs React to **create a new entry point** for rendering.
      * **`document.getElementById('root')`**: The argument passed is a reference to a specific **existing HTML element** in the main `index.html` file (the single page served to visitors). React will use this element as the container to **inject** the entire user interface.

3.  **`root.render(<App />);`**:

      * **`root.render()`**: This method tells React **which content** (i.e., which component) should be rendered and injected into the root entry point.
      * **`<App />`**: This is the **Root Component** of the app. By passing it here, you are telling React to execute the `App` component function and start building the UI from there.

## 🌳 The Component Tree

The component passed to `root.render()` (usually `<App />`) is called the **Root Component**. All other components in the application are **nested** inside the JSX code of this `App` component or its descendant components.


---

<div align="center">
  <img src="./images/02.png"/>
</div>

### Figure 2.2: Nested React components form a component tree

This figure illustrates how all components in a React application connect to form a **tree structure**:

**Step 1: The Root**

  * The entire application starts with the **`App`** component at the top. This is the component passed to `root.render()`.

**Step 2: Top-Level Children**

  * The `App` component's JSX code uses three child components: **`Header`**, **`Products`**, and **`Footer`**. These components are the main sections of the user interface.

**Step 3: Deeply Nested Components**

  * The **`Products`** component further contains its own children. In this example, it uses five components: **`Cart`**, and **three separate instances** of the **`Product`** component (the individual product cards/listings).

**Idea Explanation:**
React traverses this entire tree, starting from the root, diving into each component function, and executing it. The final output is not just one component, but the combined, fully nested structure of all components.

-----

## 🔄 Translating Components to DOM Instructions

The entire process of React working with components can be summarized by this core action: **React executes the component functions for you and translates the returned JSX code into DOM instructions.**

### Example Traversal and Translation

Consider these simplified component functions:

### 📋 Code Snippet

```jsx
function Greeting() {
 return <p>Welcome to this book!</p>;
};

function App() {
 return (
  <div>
    <h1>Hello World!</h1>
    <Greeting />
  </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**Steps React Performs:**

1.  **React executes `root.render(<App />)`**.
2.  **React executes the `App` component function**. It returns JSX containing `<div>`, `<h1>`, and the custom component `<Greeting />`.
3.  **React encounters the custom component `<Greeting />`** and **executes the `Greeting` function**. This function returns `<p>Welcome to this book!</p>`.
4.  **React replaces the custom component with its returned JSX**. Internally, the final, fully "resolved" structure looks like this:
    ```jsx
    <div>
        <h1>Hello World!</h1>
        <p>Welcome to this book!</p>
    </div>
    ```
5.  **React generates DOM Operations** from this resolved JSX structure.

**Final DOM Operations (The Steps):**

1.  **Create a `<div>` element.**
2.  **Inside that `<div>`, create two child elements:** `<h1>` and `<p>`.
3.  **Set the text content** of the `<h1>` element to 'Hello World\!'.
4.  **Set the text content** of the `<p>` element to 'Welcome to this book\!'.
5.  **Insert the entire `<div>`** (with its children) into the existing HTML element that has the ID 'root'.

By following this traversal and translation process, React successfully renders the complex component tree onto the actual web page.


---

# 🧱 **Built-In Components and the Core of React**

As a React developer, a major part of your work is creating **custom component functions** that return JSX code. However, it is essential to understand what these custom components ultimately become when they are rendered.

---

## 🧐 The Final Form of JSX

If you were to trace all your custom components (like `SubmitButton` and `App`) and merge their returned JSX code into a single large snippet, the final result would only contain **standard, built-in HTML elements** such as `<div>`, `<h1>`, `<p>`, and `<button>`.

* **Custom Components vs. Browser:** When you use React, you are **not** creating brand-new HTML elements that the browser can natively understand.
* **React's Role:** Your custom components only work within the React environment. Before they reach the browser, React **evaluates** them and **translates** the structure into standard **DOM-manipulating JavaScript instructions** (like `document.createElement(...)` and `document.append(...)`).

## 💡 JSX is Syntactical Sugar

It is very important to remember that all the HTML-like code you write in a `.jsx` file (**JSX**) is **not** plain HTML.

* **JSX is not JavaScript:** JSX is a feature that is **not part of the standard JavaScript language**.
* **JSX is Syntactical Sugar:** It is a **simplification** (or "syntactical sugar") provided by the React library and your project setup. It makes it easier to write structure within your JavaScript code.

Therefore, elements like `<div>` that you see in JSX are **not normal HTML elements** inside the file; they are part of this special JSX code syntax.

---

## 🧩 Built-In Primitives

The elements that look like standard HTML (like `<div>` and `<button>`) are actually **built-in components** provided by the React environment (specifically, by **`ReactDOM`**).

* **Primitives:** When working with React, you always end up with these **primitives**—these **built-in component functions**—which are the lowest level.
* **The Translation:** These primitives are the components that are later translated into the final browser instructions to generate and manipulate regular **DOM elements**.
* **The Idea:** The goal of building your custom components is simply to **group** these built-in elements together, creating **reusable building blocks** for the overall UI. In the end, the user interface displayed in the browser is still made up of regular HTML elements.

### 📜 Note on Web Components

You may have heard of **Web Components**.

* The idea behind Web Components is that you **can** build brand-new, custom HTML elements using vanilla JavaScript.
* It is crucial to know that **React does not use this feature**. You **do not** build new custom HTML elements when using React. You build components that return standard HTML elements via a process of translation.

---

# 🏷️ **Naming Conventions**

Consistent naming is key in React development for clarity and to satisfy specific React rules. Two main conventions are used: one for the **component function name** and one for the **file name**.

---

## 💻 Component Function Naming (PascalCase)

The naming convention used for component functions (like `SubmitButton`, `AuthForm`, or `Greeting`) is called **PascalCase**.

### 🧐 What is PascalCase?

* The first character of the name is **uppercase**.
* Multiple words are joined into a single word, and **every "subword" starts with another uppercase character** (e.g., `SubmitButton` instead of "Submit Button").

### 🚦 PascalCase as a Convention vs. Rule

| Context | PascalCase Status | Reason |
| :--- | :--- | :--- |
| **Defining the function** (in the JavaScript code) | **Convention** | You *can* technically name the function whatever you want here, but PascalCase is the standard and highly recommended practice. |
| **Using the component** (in the JSX code) | **Hard Rule** | **React forces** you to use an **uppercase starting character** when embedding custom components in JSX (e.g., `<SubmitButton />`). |

### 🛑 Why the Hard Rule in JSX?

React enforces the uppercase starting character in JSX to easily distinguish between your custom components and **built-in components** (HTML elements).

* **Custom Component:** Starts with an **uppercase** letter (e.g., `<MyComponent />`). React knows to execute the corresponding function.
* **Built-in Element:** Starts with a **lowercase** letter (e.g., `<div>`, `<p>`). React knows these should be translated into standard DOM elements.

React only needs to look at the **starting character** to determine the type of element it is processing.

---

## 🗄️ File Naming Conventions

Custom components are typically stored in separate files inside a dedicated folder.

### 📁 Standard File Placement

* The conventional location for component files is inside a **`src/components/`** folder.
* The exact folder name and placement are flexible, but components should generally reside somewhere within the `src/` folder. The name `components/` is the common standard.

### ✏️ File Naming Styles

While the component function itself uses PascalCase, there is **no single general default** for the file name. Two common conventions are used:

1.  **PascalCase (e.g., `App.jsx`, `SubmitButton.jsx`)**
    * This is the style often used in brand-new React projects (e.g., `App.jsx`).
    * It matches the component function name, which can simplify finding the component.

2.  **Kebab-case (e.g., `submit-button.jsx`, `auth-form.jsx`)**
    * This convention uses **all lowercase letters** with multiple words separated by a **dash** (`-`).

Ultimately, the choice of file naming convention (PascalCase or kebab-case) is up to **you and your team**. This resource will use **PascalCase for file names** (e.g., `SubmitButton.jsx`).

---

# 🔄 **JSX vs. HTML vs. Vanilla JavaScript**

React projects are filled with **JSX code** because most custom components return JSX. Understanding how JSX relates to standard web technologies is crucial.

-----

## 💻 What Exactly is JSX?

**JSX** (JavaScript XML) is a **syntax extension** that allows you to write HTML-like structures directly within your JavaScript code.

| Feature | Description |
| :--- | :--- |
| **Not Vanilla JavaScript** | JSX is **not** a native part of the JavaScript language. |
| **Not Directly React** | It is also **not** directly part of the core React library itself. |
| **Syntactical Sugar** | JSX is **syntactical sugar** provided by the **build workflow** (like Vite) of your React project. |

### 🛠️ The Build Process Transformation

When you run development commands (`npm run dev`) or build for production (`npm run build`), a process kicks off that **transforms** the JSX code back into regular, executable JavaScript instructions. React, the library, evaluates these final instructions, not the JSX itself.

For example, the JSX:

```jsx
function Ld() {
  return <p>Welcome to this book!</p>;
}
```

Gets transformed into complex, unreadable JavaScript (which is executed by the browser):

```javascript
function Ld() {
  return St.jsx('p', { children: 'Welcome to this book!' });
}
```

-----

## 🧩 JSX vs. React's `createElement()`

The core of what JSX becomes is a call to a built-in React method: **`React.createElement(...)`**. This shows you exactly what React is doing under the hood, even though you typically don't write this code yourself.

### Example 1: Simple Element

The following JSX snippet:

```jsx
function Greeting() {
  return <p>Hello World!</p>;
};
```

Is functionally identical to the following code using `React.createElement()`:

```jsx
function Greeting() {
  return React.createElement('p', {}, 'Hello World!');
};
```

### ⚙️ How `createElement()` Works

The `React.createElement()` method takes three main arguments:

1.  **Element Type** (`'p'`, in the example): The type of built-in component (which corresponds to an HTML tag name).
2.  **Configuration Object** (`{}`): A JavaScript object that holds extra configuration or **props** for the element (e.g., attributes like `className`, `onClick`, or `href`).
3.  **Child Content** (`'Hello World!'`): The content that should be rendered **inside** the element (between the opening and closing tags).

### Example 2: Element with Configuration

The JSX snippet:

```jsx
function Advertisement() {
  return <a href="https://my-website.com">Visit my website</a>;
};
```

Is transformed to include the attribute in the configuration object:

```jsx
function Advertisement() {
  return React.createElement(
    'a',
    { href: 'https://my-website.com' },
    'Visit my website'
  );
};
```

### Example 3: Nested Elements

For nested JSX elements, `createElement()` calls are also **nested**:

The JSX snippet:

```jsx
function Alert() {
  return (
    <div>
      <h2>This is an alert!</h2>
    </div>
  );
};
```

Is transformed into nested `createElement` calls:

```jsx
function Alert() {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'This is an alert!')
  );
};
```

The **third argument** of the outer `'div'` element is the entire **`React.createElement('h2', ...)`** call.

-----

## 🏛️ React Package Collaboration

The translation process highlights the roles of the two main React packages:

1.  **`react` Package**: This package handles the internal creation of elements and manages the structure via a concept called the **Virtual DOM** (covered in Chapter 10).
2.  **`react-dom` Package**: This package receives the Virtual DOM from `react` and is responsible for generating the final, specific **DOM-manipulating instructions** that the web browser must execute to update the web page.

---

# 🚫 **Using React Without JSX**

Since all **JSX code is ultimately transformed** into native JavaScript method calls, you can actually build React applications **without ever writing JSX**. You can skip JSX entirely and instead rely on the function that JSX is transformed into: **`React.createElement(...)`**.

-----

## 🏗️ Building Components with `React.createElement()`

Instead of writing the HTML-like syntax of JSX in your components, you can explicitly call `React.createElement(...)` to create your elements. The two code snippets below will produce the exact same user interface in the browser.

### 1\. JSX Version (Easy to Read)

This is the standard, developer-friendly way to define a component:

### 📋 Code Snippet

```jsx
function App() {
  return (
    <p>
      Please visit my <a href="https://my-blog-site.com">Blog</a>
    </p>
  );
};
```

### 2\. `React.createElement()` Version (What JSX Becomes)

This version produces the exact same result but uses nested function calls:

### 📋 Code Snippet

```jsx
function App() {
  return React.createElement(
    'p',
    {},
    [
      'Please visit my ',
      React.createElement(
        'a',
        { href: 'https://my-blog-site.com' },
        'Blog'
      )
    ]
  );
};
```

### ✨ Detailed Code Explanation

This code shows how the single JSX line is translated into a complex, nested function structure:

1.  **Outer Element (`<p>`):** The outer `React.createElement('p', {}, ...)` call creates the paragraph element.
2.  **Configuration (`{}`):** The empty object `{}` means the paragraph has no special attributes (like a `className`).
3.  **Child Content (The Array):** The third argument is an **array** containing all the child nodes of the paragraph.
      * **`'Please visit my '`**: The first element is simple text (a string).
      * **`React.createElement('a', ...)`**: The second element is the anchor tag (`<a>`) created by a **nested** `createElement` call.
          * It is configured with an object `{ href: 'https://my-blog-site.com' }`.
          * Its child content is the text `'Blog'`.

-----

## 🔑 The Importance of JSX

While using `React.createElement()` is technically possible, it is clear from the example that it is **significantly more cumbersome** and leads to code that can become **almost impossible to read** as element structures become more deeply nested.

This is why React developers overwhelmingly use **JSX**. It is a **great feature** that makes building user interfaces much more enjoyable.

The key takeaway remains: JSX is neither a built-in **HTML** feature nor a **vanilla JavaScript** feature. It is a powerful piece of **syntactical sugar** that is transformed into native JavaScript function calls behind the scenes. 🍬

---

# 💎 **JSX Elements Are Treated Like Regular JavaScript Values**

Because **JSX is only syntactical sugar** that gets transformed into regular JavaScript function calls (specifically, `React.createElement(...)` calls), the JSX elements you write are, in the end, simply **JavaScript values** (which are objects created by those function calls).

This leads to a crucial rule: **The same rules that apply to all JavaScript values also apply to JSX elements.**

## 🧱 The Single Root Element Rule

In any place where only **one value is expected**, such as after the `return` keyword in a function, you must only have **one JSX element**.

### ❌ Invalid Code (Returning Two Values)

This code is **invalid** and will cause an error because it attempts to return two separate JSX elements:

```jsx
function App() {
  return (
    <h1>Hello World!</h1>
    <p>Let's learn React!</p>
  );
};
```

**Reasoning:** This is not allowed in JavaScript. For instance, the following non-React JavaScript function is also invalid for the same reason—it tries to return two separate values:

```javascript
function calculate(a, b) {
  return (
    a + b // Value 1
    a - b // Value 2
  );
};
```

### ✅ Valid Alternative 1: Returning an Array

You can validly return an **array** or an **object** because you are still only returning **one value** (the array or object), even though it contains multiple elements inside it.

The following non-React code is valid because it returns a single array:

```javascript
function calculate(a, b) {
  return [
    a + b,
    a - b
  ];
};
```

Applying this to JSX, you can return a single array containing multiple JSX elements:

```jsx
function App() {
  return [
    <h1>Hello World!</h1>,
    <p>Let's learn React!</p>
  ];
};
```

This code is allowed because you are returning one value: an array that contains two JSX elements. However, this array approach is **rarely used** in practice because it is less readable and slightly defeats the purpose of JSX's HTML-like appearance.

### ✅ Valid Alternative 2: Returning a React Fragment (Preferred)

To return multiple **sibling elements** without cluttering the code with arrays, the standard solution is to use a **React Fragment**. This is a **built-in component** that allows you to wrap your elements:

```jsx
function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>Let's learn React!</p>
    </>
  );
};
```

  * **Shorthand Syntax (`<>...</>`):** This is the shorthand syntax for a Fragment, available in most modern React projects (like those created with Vite).
  * **Full Syntax (`<React.Fragment>...</React.Fragment>`):** This is the full, explicit syntax which is **always available** in every React project, regardless of the build setup.

You can think of a React Fragment as a component that **wraps your JSX elements in an array behind the scenes** but does not add an unnecessary `<div>` or other element to the actual final HTML DOM.

## ✍️ Parentheses for Multiline JSX

The parentheses `()` wrapped around the JSX code in the `return` statement are **required** for multiline formatting:

```jsx
function App() {
  return ( // Opening parenthesis allows multiline JSX
    <p>
      Hello World!
    </p>
  ); // Closing parenthesis signals the end of the returned value
};
```

These parentheses tell JavaScript that the returned value **starts and ends across multiple lines**. Without them, the JavaScript interpreter might incorrectly assume the return statement ends immediately after the `return` keyword.

## 📦 JSX Elements as Storable Values

Since JSX elements are just regular JavaScript values (after transformation), you can use them anywhere where values can be used. This means you can:

  * **Store them in variables:**
    ```jsx
    function App() {
      const content = <p>Stored in a variable!</p>; // This works!
      return content;
    };
    ```
  * **Pass them as arguments** to other functions.

This concept is essential for handling **conditional** or **repeated content**, which allows you to programmatically decide which JSX to display.

-----

# 🛑 JSX Elements Must Have a Closing Tag

Another critical rule in JSX is that every element **must have a closing tag**.

  * If an element has content between the tags, it uses separate opening and closing tags: `<h1>Hello</h1>`.
  * If an element does **not** contain any child content, it must be **self-closing**.

<!-- end list -->

```jsx
function App() {
  // This is mandatory in JSX for elements with no content
  return <input type="text" />;
};
```

### 🆚 JSX vs. Regular HTML

| Feature | Regular HTML (`.html` file) | JSX (`.jsx` file) |
| :--- | :--- | :--- |
| **Self-closing** | Optional (e.g., `<input>`) | **Mandatory** (`<input />`) |
| **Void Elements** | Supports **void elements** like `<br>` | Must use the **forward slash** (`/`) for self-closing tags (`<br />`) |

In JSX, the forward slash at the end of a non-content-containing element is **mandatory**.

---

# 🔄 **Moving Beyond Static Content**

In the examples covered so far, the content has been **static** (e.g., `<h1>Hello World!</h1>`), meaning it never changes. However, most real-world websites need to output **dynamic content**—content that can change based on user input, data fetching, or other events.

While making content truly dynamic in React requires the **state** concept (covered later), it's important to learn the **JSX syntax** for incorporating JavaScript values now.

-----

## 💻 Outputting Dynamic Content Syntax

The core method for outputting dynamic content within JSX is by using **curly braces** (`{...}`).

### 📋 Code Snippet

```jsx
function App() {
  const userName = 'Max';
  return <p>Hi, my name is {userName}!</p>;
};
```

### ✨ Detailed Code Explanation

1.  **`const userName = 'Max';`**: A standard JavaScript constant is defined and given a value.
2.  **`{userName}`**: Inside the JSX element (`<p>...</p>`), the curly braces are used to embed the JavaScript expression. React evaluates this expression and outputs its resulting **value** as text content in the final DOM.

**Note:** This example technically still produces static output because the `userName` variable never changes within the function call. However, the syntax shown is the same one used later with **state** to create truly dynamic UIs.

## 💡 What Can Go Inside the Curly Braces?

You can place **any valid JavaScript expression** between the curly braces. An expression is code that produces a single value.

| Valid Examples | Description |
| :--- | :--- |
| **`{userName}`** | Outputting the value of a **variable** or **constant**. |
| **`{getMyName()}`** | Calling a **function** that returns a value. |
| **`{1 + 1}`** | Performing simple **inline calculations**. |
| **`{Math.random()}`** | Calling built-in JavaScript objects and methods. |

### ❌ What Is NOT Allowed?

You **cannot** add complex **statements** like `for` loops or `if` statements directly inside the curly braces.

  * **Rule:** You must output a (potentially) dynamic value, so **anything that produces a single value is allowed**.
  * **Error Example:** Trying to output a complex JavaScript **object** in JSX (e.g., `{ {name: 'Max'} }`) will cause an error, as React doesn't know how to render a raw object structure as content.

-----

## 🔗 Using Dynamic Values for Attributes

You are **not limited** to outputting dynamic content only between element tags. You can also set **dynamic values for attributes** (like `id` or `className`).

### 📋 Code Snippet

```jsx
function App() {
  const userName = 'Max';
  return <p id={userName}>Hi, my name is {userName}!</p>;
};
```

### ✨ Detailed Code Explanation

  * **`id={userName}`**: Here, the `id` attribute of the paragraph element is set dynamically.
      * The **`id`** is the attribute name.
      * The **`=`** sign separates the attribute name from its value.
      * The **`{userName}`** is the JavaScript expression whose value (`'Max'`) is assigned to the `id` attribute.

When this component is rendered, the resulting HTML element will be `<p id="Max">Hi, my name is Max!</p>`.

---

# 🏞️ **Rendering Images**

Most websites rely on images, not just plain text. When working with React, you use the standard **`<img>` element**. However, there are two key rules to follow in React projects:

1.  The `<img>` tag **must be self-closing** (`<img ... />`).
2.  When using **local images** from the `src/` folder, you **must import them**.

-----

## 🛑 Rule 1: Self-Closing Tag

As established in the rules of JSX, elements that do not contain child content must be self-closing.

  * In **regular HTML**, the forward backslash is optional for void elements: `<img src="path.jpg">`.
  * In **JSX**, the self-closing forward slash is **mandatory**: `<img src="..." alt="..." />`.

-----

## 🔗 Rule 2: Handling Local Image Paths

When displaying local images stored inside your project's `src/` folder, you **cannot** use a simple string path like you might in standard HTML (e.g., `src="./assets/my-image.png"`).

### 🧐 The Problem with Direct Paths

React projects created with tools like Vite involve a **build process**. When you run `npm run build`, a deployable **`dist`** folder is created, and the structure inside is different from your development `src/` folder.

  * **Development Path:** You might have an image at `src/assets/my-image.png`.
  * **Production Path (after build):** The `dist` folder **will not contain a `src/assets` folder**. Instead, your assets are typically renamed and placed in a general `dist/assets` folder.

The figure below illustrates the built production structure:

Since the final path of a locally stored image is **not known in advance**, attempting to use a direct path will cause the image to **fail to load** on the deployed website.

### ✅ Solution 1: Importing the Image (Recommended for `src/`)

To solve the path problem, you must **import the image file** into your `.jsx` file.

**Step 1: Import the file:**

```jsx
import myImage from './assets/my-image.png';
```

**Step 2: Use the imported value:**

```jsx
function App() {
  return <img src={myImage} alt="A description of the image" />;
};
```

### ✨ Detailed Explanation of Image Import

1.  **`import myImage from './assets/my-image.png';`**: This is not importing code; it instructs the build process to **analyze the image file**.
2.  **Result:** The build process replaces this import with a **string value** that contains the final, correct path (which includes the unique file hash) that will work in production.
3.  **Dynamic Value:** The resulting path string is then set as a **dynamic value** for the `src` attribute using curly braces: `src={myImage}`.

This approach is the **sensible choice for most images** because the unique file name assigned by the pre-processing step allows files to be **cached more efficiently** by the browser.

### ✅ Solution 2: Using the `public/` Folder (For Static Assets)

If you store an image (or any asset) in the **`public/`** folder of your project, you can **directly reference its path**.

  * The contents of the `public/` folder are simply **copied as-is** into the `dist/` folder, skipping the renaming/transpilation step.
  * **Important:** The folder name `public/` is **not** included in the final URL path.

**Example:** For an image stored at `public/images/demo.jpg`:

```jsx
function App() {
  return <img src="/images/demo.jpg" alt="A demo image" />;
};
```

### 🌎 Using Remote Images

When using images stored on a remote server (e.g., a CDN), you simply use the full image URL as a static string:

```jsx
function App() {
  return <img src="https://some-server.com/image.jpg" alt="Remote server image" />;
};
```

-----

# ✂️ When Should You Split Components?

As you develop more complex applications, deciding when to split a single large component into multiple smaller components becomes a common question. While there is **no hard rule** you must follow, relying on one massive component or creating a separate component for every single HTML tag are both generally poor practices.

### 💡 Rule of Thumb: Separate Data Entities

A good practice is to create a separate React component for **every data entity that can be identified** in your UI.

  * **Example:** For a to-do application, you can identify two entities:
    1.  The **overall list** (the container).
    2.  The **individual to-do item** (the repeating item).

This suggests creating two separate components (e.g., `TodoList` and `Todo`).

### ➕ Advantage of Component Splitting

  * **Manageability:** Individual components become easier to manage because they contain **less code**.
  * **Reusability:** Smaller components (like `Todo`) can be **reused** throughout the application or in different parts of the same list.

### ❓ The Challenge: Reusability and Configurability

When you split components, a new challenge arises: making them **reusable and configurable**.

In the example below, all `Todo` items would be exactly the same because the component can't be configured to display different content:

```jsx
import Todo from './todo.jsx';

function TodoList() {
  return (
    <ul>
      <Todo /> {/* All look the same */}
      <Todo />
      <Todo />
    </ul>
  );
};
```

To solve this, you need a way to pass data into the component, either through **custom attributes** (`<Todo title="Buy Milk" />`) or by passing **content** between the tags (`<Todo>Learn React!</Todo>`).

This capability is provided by a key concept called **props**, which is covered next. 

---

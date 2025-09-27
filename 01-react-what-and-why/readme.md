# ⚛️ **What is React**?

> **React is a JavaScript library**, and if you take a look at the official web page (the official React website and documentation are available at this link: [https://react.dev/](https://react.dev/)), you learn that the creators call it **“The library for web and native user interfaces.”** ✨

---

## 🤔 But what does this mean?

First, it’s important to understand that React is a JavaScript library. As a reader of this section, you know what JavaScript is and why you use JavaScript in the browser. **JavaScript allows you to add interactivity to your website** since, with JavaScript, you can react to user events and manipulate the page after it is loaded. This is extremely valuable as it allows you to build highly interactive web user interfaces (UIs). 🧠💡

---

## 📚 What is a “library” and how does React help with building UIs?

While you can have philosophical discussions about what a library is (and how it differs from a framework), the **pragmatic definition of a library** is that it’s **a collection of functionalities** that you can use in your code to achieve results that would normally require more code and work from your side. 🧩

Libraries can help you **write more concise** and possibly also **less error-prone** code and enable you to implement certain features **more quickly**. ⚙️🚀

---

## ⚛️ React as such a library

**React is such a library** – one that focuses on providing functionalities that help you create **interactive and reactive UIs**. Indeed, React deals with more than web interfaces (i.e., websites loaded in browsers). 🌐

You can also **build native apps for mobile devices** with **React and React Native**, which is another library that utilizes React under the hood. 📱

The **React concepts covered in this section still apply, no matter which target platform is chosen**. But examples will **focus on React for web browsers**. 🌍

No matter which platform you’re targeting though, **creating interactive UIs with just JavaScript can quickly become very complex and overwhelming**. 😵‍💫

---


# 📜 **The Problem with Vanilla JavaScript**

## 🌐 What is Vanilla JavaScript?

Vanilla JavaScript simply means **pure JavaScript** — without using any external **frameworks** or **libraries** like React, Angular, or Vue.

* ✅ You write all the JavaScript yourself.
* ✅ Visitors download less code (no extra frameworks).
* ❌ But developers must build everything from scratch.
* ❌ This becomes **time-consuming** and **error-prone**, especially for complex UIs.

⚡ Example: A single framework like React or Angular can add **50+ KB** of extra JavaScript that users must download. Vanilla JS avoids that — but at a cost of developer effort.

---

## ⚖️ Pros and Cons

**Advantages of Vanilla JS:**

* 🚀 Lightweight — faster downloads for users.
* ✨ No dependency on external tools.

**Disadvantages of Vanilla JS:**

* 🛠️ You must implement everything yourself.
* 🧩 Complex UIs become hard to manage.
* 🐞 More chances of bugs and errors.
* ⏳ Writing and maintaining code takes longer.

---

## 🏗️ React vs Vanilla JavaScript

React makes UI building **simpler** by using a **declarative approach**, instead of the **imperative approach** used in vanilla JS.

* **Imperative Approach (Vanilla JS):** You describe every single step.
* **Declarative Approach (React):** You describe the **final state** of the UI, and React figures out the steps for you.

---

## 🧩 Vanilla JavaScript Example

We want to:

1. Add an event listener to a button.
2. Change paragraph text when the button is clicked.

### 👨‍💻 Code Snippet

```javascript
const buttonElement = document.querySelector('button');
const paragraphElement = document.querySelector('p');

function updateTextHandler() {
  paragraphElement.textContent = 'Text was changed!';
}

buttonElement.addEventListener('click', updateTextHandler);
```

---

## 🔍 Step-by-Step Explanation of the Code

1. **Find the Button**

   ```javascript
   const buttonElement = document.querySelector('button');
   ```

   * `document.querySelector('button')` → finds the first `<button>` element on the page.
   * The result (reference to the button) is stored inside a constant `buttonElement`.

   📌 *Now we can use `buttonElement` anytime to interact with the button.*

---

2. **Find the Paragraph**

   ```javascript
   const paragraphElement = document.querySelector('p');
   ```

   * Finds the first `<p>` (paragraph) element.
   * Stores it inside `paragraphElement`.

   📌 *Now we can directly change or access the paragraph using this constant.*

---

3. **Define a Function**

   ```javascript
   function updateTextHandler() {
     paragraphElement.textContent = 'Text was changed!';
   }
   ```

   * Creates a function called `updateTextHandler`.
   * Inside this function:

     * It sets the text of the paragraph (`textContent`) to `"Text was changed!"`.

   📌 *This function does not run yet — it will be triggered later.*

---

4. **Listen for a Click Event**

   ```javascript
   buttonElement.addEventListener('click', updateTextHandler);
   ```

   * Tells the button: “Whenever a **click** happens, run `updateTextHandler`.”
   * This connects the button’s click action with the paragraph text change.

---

### 🏃 Dry Run Example

* Page loads.
* Button and paragraph elements are saved in variables.
* Nothing happens yet.
* 👆 User clicks the button.
* The browser triggers the function → paragraph text changes to **“Text was changed!”**. 🎉

---

## 📚 Imperative vs Declarative

### Imperative (Vanilla JS):

You must write out **all steps**:

1. Find button
2. Find paragraph
3. Add event listener
4. Define function
5. Change text

This approach is **tedious** because:

* Lots of boilerplate (DOM queries, event listeners).
* Business logic (like deciding *what* text to show) is just a small part of the code.

### Declarative (React):

You only describe **what the UI should look like**, and React figures out the steps automatically.

* Cleaner ✅
* Easier to maintain ✅
* Focused on business logic ✅

---

## 📊 Real Numbers Example

* In one Vanilla JS example, the code reached **110 lines**.
* After minifying (shortening variable names, removing spaces): still **80 lines**.
* Only **20–30 lines** were actual business logic.
* Meaning **~75% of the code** was just DOM interaction and boilerplate.

⚠️ That’s why building large, complex UIs with vanilla JS is difficult.

---

## 🚀 Why React?

React removes this complexity by:

* Using a **declarative approach** 📝
* Reducing DOM manipulation 🛠️
* Focusing on **business logic** 💡
* Making large UIs easier to maintain 🔧

---

# ⚛️ **React and Declarative Code**

## 🔄 Revisiting the Example

Earlier, we saw how **Vanilla JavaScript** updates a paragraph after a button click.
Now, let’s see how the **same task** is done in **React**.

---

## 👨‍💻 React Code Snippet

```jsx
import { useState } from 'react';

function App() {
  const [outputText, setOutputText] = useState('Initial text');

  function updateTextHandler() {
    setOutputText('Text was changed!');
  }

  return (
    <>
      <button onClick={updateTextHandler}>
        Click to change text
      </button>
      <p>{outputText}</p>
    </>
  );
}
```

---

## 📝 Step-by-Step Explanation

### 1. Import React Hook

```jsx
import { useState } from 'react';
```

* We import **useState** (a React hook).
* Hooks let us add features (like state) to our component.
* `useState` gives us:

  * A **state variable** (data that React watches).
  * A **function** to update that variable.

---

### 2. Define the Component

```jsx
function App() {
```

* `App` is a **React component**.
* Components are reusable building blocks of UI.
* Each component returns **JSX** (a mixture of HTML + JS).

---

### 3. Create State

```jsx
const [outputText, setOutputText] = useState('Initial text');
```

* `outputText` → variable holding the current text.
* `setOutputText` → function to change that text.
* `'Initial text'` → default (initial) value.

📌 *Whenever `setOutputText` changes the value, React automatically updates the UI.*

---

### 4. Define a Function

```jsx
function updateTextHandler() {
  setOutputText('Text was changed!');
}
```

* A function that updates state when called.
* `setOutputText('Text was changed!')` → tells React to replace the current text.

📌 Unlike Vanilla JS, we don’t manually find and change the `<p>` element. React handles that automatically.

---

### 5. Return JSX (UI)

```jsx
return (
  <>
    <button onClick={updateTextHandler}>
      Click to change text
    </button>
    <p>{outputText}</p>
  </>
);
```

* The component **returns JSX** (HTML-like syntax inside JS).
* `<button>`: has `onClick={updateTextHandler}` (React’s version of event listener).
* `<p>{outputText}</p>`: React outputs the current value of `outputText`.

📌 Whenever `outputText` changes, React **re-renders** and updates this paragraph automatically.

---

## 🏃 Dry Run of the Code

1. Component `App` loads.
2. React sets up state: `outputText = "Initial text"`.
3. UI shows:

   ```
   [Button: Click to change text]
   Initial text
   ```
4. User clicks the button.
5. `updateTextHandler()` runs → `setOutputText("Text was changed!")`.
6. React **re-renders** the UI:

   ````
   [Button: Click to change text]
   Text was changed!  
   ````

---

## 🧩 Declarative Approach in Action

* With **Vanilla JS (Imperative)**:

  * You must manually select DOM elements.
  * Add event listeners.
  * Update `textContent` step by step.

* With **React (Declarative)**:

  * You only define **what the UI should look like** for each state.
  * React handles the DOM changes automatically.

---

## 📦 JSX and Pre-Processing

* React uses **JSX** → JavaScript with HTML-like syntax.
* Browsers don’t understand JSX directly.
* During the **build step**, tools (like Babel) **transpile** JSX → normal JavaScript.
* This allows us to write code that’s:

  * Clearer ✅
  * Closer to HTML ✅
  * Easier to maintain ✅

---

## 🔑 State in React

* **State** is like a variable that React watches.
* When state changes → React re-renders that part of the UI.
* Example:

  * `outputText` starts as `"Initial text"`.
  * After click → changes to `"Text was changed!"`.
  * React updates the DOM for you — no manual DOM instructions needed.

---

## 🏗️ Why Declarative > Imperative

* No `document.querySelector()`
* No `addEventListener()`
* No `element.textContent = ...`

Instead, you:

1. Define **states**.
2. Define **UI output** for those states.
3. React ensures the browser DOM matches your description.

---

## 🧠 First Impression of React

At first glance, React code looks unusual:

* A **mix of JS + HTML (JSX)**.
* Functions and UI side by side.

But:

* It’s still JavaScript.
* JSX makes it easy to describe content and structure like HTML.
* React merges **business logic** + **UI definition** → making it easier to handle complex UIs.

---

# ⚛️ **How React Manipulates the DOM**

## 🧩 JSX and Pre-Processing

When writing React code, we often mix **JavaScript + HTML-like syntax** using **JSX**.

👉 But browsers can’t understand JSX directly.

* **Pre-processing step** is required before deployment.
* JSX is **transformed into normal JavaScript code** (using tools like Babel).
* Even after transformation, the code **still won’t contain raw DOM instructions** like `document.querySelector()` or `element.textContent = ...`.

---

## 🌳 React’s Virtual DOM

Instead of manual DOM manipulation, React internally creates a **virtual DOM**:

* A **tree structure** representing the current state of the UI.
* This is React’s internal “blueprint” of the real DOM.
* React uses this virtual DOM to decide **what needs to change** in the actual DOM.

📌 You’ll learn more about this in **Section 10 – Behind the Scenes of React and Optimization Opportunities**.

---

## 📦 React’s Core Packages

React’s functionality is split across **two main packages**:

1. **`react` package**

   * The main React library.
   * Provides features like JSX support, state, and component logic.
   * Responsible for creating and managing the **virtual DOM**.

2. **`react-dom` package**

   * Acts as the **bridge** between React and the browser’s **real DOM**.
   * Takes instructions from React and performs actual DOM operations:

     * Selecting elements
     * Creating elements
     * Updating elements
     * Deleting elements

---

## 🔗 How the Bridge Works

* You write React code → React builds/updates its **virtual DOM**.
* `react-dom` compares the **virtual DOM** with the **real DOM** (diffing process).
* Only the **changed parts** are updated in the browser DOM → efficient performance.

⚡ This makes React **faster** than manually writing DOM instructions.

---

## 📱 Beyond the Browser – React Native

React is not limited to browsers.

* In web apps → we use **`react-dom`** as the bridge.
* In mobile apps → we use **`react-native`** as the bridge.

So:

* `react` (core logic + virtual DOM) stays the same.
* The “bridge” package changes depending on the target environment.

Examples:

* 🌐 **Web apps** → `react-dom`
* 📱 **Mobile apps** → `react-native`

---

# 🚀 **Introducing SPAs** (Single-Page Applications)

## 🎨 React for Complex UIs

React helps simplify the creation of **complex user interfaces (UIs)**. There are two common ways to use it:

1. **Manage parts of a website**
   Example: A chat box in the bottom-left corner of the page 💬.

2. **Manage the entire web page**
   Example: All buttons, forms, and navigation across the site.

👉 The second approach is more popular.
Why? Because:

* Most modern websites contain **multiple complex elements**.
* Mixing React with plain JS across different parts can **increase complexity**.
* It’s easier and cleaner to let React handle the **entire page**.

---

## 🌍 Routing in React

React can also handle **URL path changes** and update parts of the page dynamically.

* Instead of reloading the whole page, React updates only what’s needed.
* This is called **routing**.

📦 A popular package for this is **`react-router-dom`**, which allows:

* Navigation between subpages 🧭
* Keeping the UI fully controlled by React ⚛️

---

## 📄 What is a SPA?

A **Single-Page Application (SPA)** is a website where:

* The project usually has **just one HTML file** (`index.html`).
* React and your React code **take over** after the first load.
* The entire UI is created, updated, and managed by **JavaScript + React**.

🔄 This means:

* Instead of requesting new HTML pages from the server, React dynamically updates the existing page.
* The user experiences **smooth, fast navigation** without full-page reloads.

---

## 🖥️ Full-Stack React Apps

It’s becoming more common to merge **frontend + backend** into one React project:

* **Next.js** (a modern React framework) makes it easier to build such apps.
* With Next.js, you can do things like:

  * ✅ Server-side rendering (SSR)
  * ✅ API integration
  * ✅ File-based routing
  * ✅ Server components and server actions

📚 This Repo will cover these advanced topics in detail:

* **Section 15** → Server-side Rendering & Fullstack Apps with Next.js
* **Section 16** → React Server Components & Server Actions
* **Section 17** → React Suspense and the `use()` Hook

---

# ⚛️ **Creating a React Project with Vite**

## 📌 Why Vite Instead of Next.js?

* The **official React docs** recommend using a framework like **Next.js**.
* But Next.js introduces **extra concepts** (routing, server rendering, etc.) → confusing for beginners.
* Not every React app needs to be a **full-stack web app**.
* For **learning React basics**, Next.js can feel like *too much overhead*.

👉 That’s why **Vite** is a great alternative:

* ⚡ Lightweight & fast.
* 🔨 Open-source build + dev tool.
* 🖥️ Provides a **local dev server** for instant previews.
* 🔄 Automatically handles **JSX transpilation** (converts JSX → plain JS for browsers).

---

## 🛠️ Prerequisites

Before creating a React project with Vite, install **Node.js**:

* Download from 👉 [https://nodejs.org/](https://nodejs.org/)
* Prefer **latest** or **LTS version**.
* Installing Node.js also gives you **npm** (Node Package Manager).

---

## 📂 Create a New React Project with Vite

### Step 1 — Navigate to a Folder

Use the terminal (Command Prompt on Windows, Bash on Linux, or Terminal on macOS).
Go to the folder where you want the project:

```bash
cd path/to/your/folder
```

---

### Step 2 — Create Project

Run this command:

```bash
npm create vite@latest my-react-project
```

#### 🔎 Explanation:

* `npm create vite@latest` → uses npm to download & run the **latest Vite project generator**.
* `my-react-project` → your project name (creates a new folder with this name).

👉 After running, it will **prompt you**:

1. Choose a **framework** → select `React`.
2. Choose a **variant** → select `JavaScript`.

---

### Step 3 — Install Dependencies

Navigate into the newly created project folder:

```bash
cd my-react-project
```

Install all required dependencies (like `react` and `react-dom`):

```bash
npm install
```

---

### Step 4 — Start Development Server

Run:

```bash
npm run dev
```

#### 🔎 What Happens:

* Starts Vite’s **local dev server**.
* Hosts your app at → `http://localhost:5173`
* Features **hot reload** → the page updates instantly whenever you save changes.

🛑 To stop server → Press **Ctrl + C** in the terminal.
▶️ To restart → run `npm run dev` again.

---

## 📂 Vite Project Structure

A new Vite-React project will contain:

* **`src/`** → main source code folder.

  * `main.jsx` → entry point (bootstraps the React app).
  * `App.jsx` → root component (contains initial UI).
  * `*.css` → styling files.

* **`assets/`** → images or static files used in React.

* **`public/`** → static files served directly (e.g., favicon).

* **`index.html`** → single HTML file of the SPA.

* **`package.json`** → lists dependencies & scripts.

* **`package-lock.json`** → auto-generated, locks exact versions of dependencies.

* **`node_modules/`** → contains all installed packages (can be huge).

* **`.gitignore`** → tells Git which files/folders to ignore.

---

## 📘 Notes on Files

* `App.jsx` & `main.jsx` use **`.jsx` extension** (since they contain JSX, not plain JS).

* Almost all React-specific code goes into:

  * `App.jsx`
  * Custom component files.

* `package.json` → main file for dependency management.

  * Example:

    ```json
    {
      "dependencies": {
        "react": "^18.0.0",
        "react-dom": "^18.0.0"
      }
    }
    ```

* `package-lock.json` → auto-generated, ensures consistency across installs.

* `node_modules/` → contains actual dependency code (not shared on GitHub).

  * Instead, other developers run `npm install` to recreate it locally.

📌 More on dependency files: 👉 [npm docs](https://docs.npmjs.com/)

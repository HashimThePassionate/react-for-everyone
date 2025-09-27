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

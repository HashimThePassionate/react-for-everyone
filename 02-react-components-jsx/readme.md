
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

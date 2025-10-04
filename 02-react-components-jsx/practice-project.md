# 🚀 **React Goals Project**

A simple React project built with **Vite** to practice creating and using multiple components. This project demonstrates breaking down UI into small, reusable components like goals and headers.

<details>
<summary>📑 Table of Contents</summary>

- [🚀 **React Goals Project**](#-react-goals-project)
  - [📂 Project Structure](#-project-structure)
  - [⚡ Getting Started](#-getting-started)
    - [1. Create a New Project](#1-create-a-new-project)
    - [2. Create Components Folder](#2-create-components-folder)
    - [3. Add Component Files](#3-add-component-files)
    - [4. Write Goal Components](#4-write-goal-components)
    - [5. Create the Goal List Component](#5-create-the-goal-list-component)
    - [6. Create the Header Component](#6-create-the-header-component)
    - [7. Update `App.jsx`](#7-update-appjsx)
  - [🎯 Final Result](#-final-result)
  - [💡 Learnings](#-learnings)

</details>

---

## 📂 Project Structure

After setup, your project folder should look like this:

```
my-react-project/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── FirstGoal.jsx
│   │   ├── SecondGoal.jsx
│   │   ├── ThirdGoal.jsx
│   │   ├── GoalList.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## ⚡ Getting Started

### 1. Create a New Project

Run the following command (replace `my-react-project` with your own project name):

```bash
npm create vite@latest my-react-project
```

* Select **React**
* Select **JavaScript**

Then go into your project folder:

```bash
cd my-react-project
npm install
npm run dev
```

Your development server will start at **[http://localhost:5173/](http://localhost:5173/)** 🎉

---

### 2. Create Components Folder

Inside the `src/` folder, create a new folder called:

```
src/components
```

---

### 3. Add Component Files

Create the following files inside `/src/components`:

* `FirstGoal.jsx`
* `SecondGoal.jsx`
* `ThirdGoal.jsx`
* `GoalList.jsx`
* `Header.jsx`

---

### 4. Write Goal Components

Example (`FirstGoal.jsx`):

```jsx
function FirstGoal() {
  return (
    <li>
      <article>
        <h2>Teach React in a highly-understandable way</h2>
        <p>
          I want to ensure that you get the most out of this book 
          and you learn all about React!
        </p>
      </article>
    </li>
  );
}

export default FirstGoal;
```

👉 Do the same for `SecondGoal.jsx` and `ThirdGoal.jsx` with different content.

---

### 5. Create the Goal List Component

`GoalList.jsx`:

```jsx
import FirstGoal from './FirstGoal.jsx';
import SecondGoal from './SecondGoal.jsx';
import ThirdGoal from './ThirdGoal.jsx';

function GoalList() {
  return (
    <ul>
      <FirstGoal />
      <SecondGoal />
      <ThirdGoal />
    </ul>
  );
}

export default GoalList;
```

---

### 6. Create the Header Component

`Header.jsx`:

```jsx
function Header() {
  return (
    <header>
      <h1>My Goals For This Book</h1>
    </header>
  );
}

export default Header;
```

---

### 7. Update `App.jsx`

Replace the default code with:

```jsx
import GoalList from './components/GoalList.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <GoalList />
      </main>
    </>
  );
}

export default App;
```

---

## 🎯 Final Result

When you open the app, you should see:

* A header: **"My Goals For This Book"**
* A list of your goals, each rendered via a reusable component.

---

## 💡 Learnings

✔ How to create and export components
✔ How to import components into other components
✔ How to structure a small React project

---

✨ You’re now ready to expand this project further by adding styles, props, and interactivity!

---

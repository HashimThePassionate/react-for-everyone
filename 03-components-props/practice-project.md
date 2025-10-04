# 🎯 **React Practice Goals Project**

A beginner-friendly React project built with **Vite**.
This project demonstrates how to create and use **multiple React components** (Header, GoalList, Goals, etc.) in a clean structure.

<details>
<summary>📑 Table of Contents</summary>

- [🎯 **React Practice Goals Project**](#-react-practice-goals-project)
  - [🚀 Getting Started](#-getting-started)
    - [1️⃣ Create a New React Project](#1️⃣-create-a-new-react-project)
    - [2️⃣ Create Components Folder](#2️⃣-create-components-folder)
    - [3️⃣ Add Component Files](#3️⃣-add-component-files)
    - [4️⃣ Create Goal Components](#4️⃣-create-goal-components)
    - [5️⃣ Create Goal List Component](#5️⃣-create-goal-list-component)
    - [6️⃣ Create Header Component](#6️⃣-create-header-component)
    - [7️⃣ Update App Component](#7️⃣-update-app-component)
  - [✨ Final Output](#-final-output)
  - [📚 What You’ll Learn](#-what-youll-learn)

</details>

---

## 🚀 Getting Started

### 1️⃣ Create a New React Project

Run the following command (replace `my-app` with any name):

```bash
npm create vite@latest my-app
```

* Choose **React**
* Choose **JavaScript**

Move into the project folder and start the dev server:

```bash
cd my-app
npm install
npm run dev
```

Your project will now be running at **[http://localhost:5173/](http://localhost:5173/)** 🎉

---

### 2️⃣ Create Components Folder

Inside the `src/` folder, create a folder named:

```
src/components
```

---

### 3️⃣ Add Component Files

Create these files inside `/src/components`:

```
FirstGoal.jsx
SecondGoal.jsx
ThirdGoal.jsx
GoalList.jsx
Header.jsx
```

Your folder structure will look like this:

```
src/
 ├── components/
 │   ├── FirstGoal.jsx
 │   ├── SecondGoal.jsx
 │   ├── ThirdGoal.jsx
 │   ├── GoalList.jsx
 │   └── Header.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

### 4️⃣ Create Goal Components

Example (`FirstGoal.jsx`):

```jsx
function FirstGoal() {
  return (
    <li>
      <article>
        <h2>Teach React in a highly-understandable way</h2>
        <p>
          I want to ensure, that you get the most out of this book 
          and you learn all about React!
        </p>
      </article>
    </li>
  );
}

export default FirstGoal;
```

👉 Repeat similar steps for `SecondGoal.jsx` and `ThirdGoal.jsx` with your own text.

---

### 5️⃣ Create Goal List Component

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

### 6️⃣ Create Header Component

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

### 7️⃣ Update App Component

Finally, replace the default code in `App.jsx`:

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

## ✨ Final Output

✅ A **Header** with the title *"My Goals For This Book"*
✅ A **list of goals**, each displayed as its own reusable component.

---

## 📚 What You’ll Learn

* ✔ Creating and exporting React components
* ✔ Importing components into other components
* ✔ Structuring a React project with multiple files
* ✔ Rendering reusable JSX

---

🔗 Now you can extend this project by adding **styles, props, and interactivity**!

---


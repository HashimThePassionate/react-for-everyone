# 📘 **React Goals Project**

<details>
<summary>📋 Table of Contents</summary>

- [📘 **React Goals Project**](#-react-goals-project)
  - [📂 Updated Project Structure](#-updated-project-structure)
  - [⚡ Steps](#-steps)
    - [1. Start with Previous Project](#1-start-with-previous-project)
    - [2. Create `GoalItem` Component](#2-create-goalitem-component)
    - [3. Update `GoalList` Component](#3-update-goallist-component)
    - [4. Clean Up Old Files](#4-clean-up-old-files)
    - [5. Final App](#5-final-app)
  - [🎯 Final Result](#-final-result)
  - [💡 Learnings](#-learnings)

</details>

<br/>

This activity builds on the previous project folder 02-react-components.
We'll refactor our app to use **a single reusable component** instead of multiple goal components.

---

**React Goals Project**

This activity builds on the previous project folder 02-react-components.
We’ll refactor our app to use **a single reusable component** instead of multiple goal components.

---

## 📂 Updated Project Structure

After finishing this activity, your `src/components/` folder will look like this:

```
src/components/
├── GoalItem.jsx
├── GoalList.jsx
└── Header.jsx
```

👉 The old files (`FirstGoal.jsx`, `SecondGoal.jsx`, `ThirdGoal.jsx`) are **deleted** because they’re no longer needed.

---

## ⚡ Steps

### 1. Start with Previous Project

Make sure you’ve completed **Activity 2.1** (React app with multiple components).

---

### 2. Create `GoalItem` Component

Inside `src/components/`, create a new file:

**`GoalItem.jsx`**

```jsx
function GoalItem(props) {
  return (
    <li>
      <article>
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </article>
    </li>
  );
}

export default GoalItem;
```

✔ We added a `props` parameter
✔ `props.title` is used for the heading
✔ `props.children` is used for the paragraph

---

### 3. Update `GoalList` Component

Edit **`GoalList.jsx`** and replace the old goal components with `<GoalItem />`.

```jsx
import GoalItem from './GoalItem.jsx';

function GoalList() {
  return (
    <ul>
      <GoalItem title="Teach React in a highly-understandable way">
        I want to ensure you learn React in the easiest way possible.
      </GoalItem>
      <GoalItem title="Allow you to practice what you learned">
        Practice makes perfect! Apply concepts immediately.
      </GoalItem>
      <GoalItem title="Motivate you to continue learning">
        Stay consistent and keep growing as a React developer.
      </GoalItem>
    </ul>
  );
}

export default GoalList;
```

---

### 4. Clean Up Old Files

❌ Delete these redundant files from `src/components/`:

* `FirstGoal.jsx`
* `SecondGoal.jsx`
* `ThirdGoal.jsx`

Now, you only have **`GoalItem.jsx`**, **`GoalList.jsx`**, and **`Header.jsx`**.

---

### 5. Final App

Your `App.jsx` stays the same:

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
* A list of goals rendered by the **reusable `GoalItem` component**.

---

## 💡 Learnings

✔ How to create **reusable components** with `props`
✔ Using `props.children` to pass flexible content
✔ Refactoring code to remove redundancy

---

✨ Congratulations! You’ve just made your React codebase **cleaner, more scalable, and easier to maintain**.

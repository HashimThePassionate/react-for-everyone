# 🔢 **React Simple Calculator Practice 1**

Welcome to this practice project The goal of this exercise is to build a basic, real-time calculator using the fundamental principles of React. The application will feature four separate components to handle addition, subtraction, multiplication, and division.

## 🏗️ Project Overview

This project demonstrates how to create a dynamic user interface where the results of mathematical operations are updated instantly as the user types. We will achieve this by building isolated components for each function and managing their internal data (state) independently.

-----

### ✨ Step 1: Structuring the Project

The first step is to establish a clean and organized file structure. We create a `components` directory to hold all our reusable UI pieces. Inside this directory, four distinct files are created, one for each mathematical operation:

  - `Add.jsx`
  - `Subtract.jsx`
  - `Multiply.jsx`
  - `Divide.jsx`

-----

### ➕ Step 2: Creating the Addition Component

Next, we build the user interface for the **addition** functionality within `Add.jsx`. This component is designed to:

1.  Display two numeric input fields.
2.  Place a `+` symbol between them.
3.  Show a calculated result that updates in real-time.

-----

### ➖ Step 3: Creating the Subtraction Component

Following the same pattern, we construct the UI for the **subtraction** operation inside `Subtract.jsx`. This component mirrors the structure of the addition component but is specifically set up to handle subtraction.

-----

### ✖️ Step 4: Creating the Multiplication Component

We then proceed to build the **multiplication** component in `Multiply.jsx`. This involves setting up the necessary input fields and result display for multiplying two numbers together.

-----

### ➗ Step 5: Creating the Division Component

The fourth operation component, **division**, is built inside `Divide.jsx`. It provides the interface for dividing the first number by the second and displaying the outcome.

-----

### 🧠 Step 6: Implementing State for User Input

For each of the four components, we implement an internal state management system. This system is responsible for:

1.  "Remembering" the two numbers that the user enters.
2.  Ensuring that any text entered by the user is correctly converted and stored as a number.
3.  Updating this internal memory instantly whenever the user types into either input field.

-----

### ⚙️ Step 7: Assembling the Main Application

In the final step, we bring everything together inside the main `App.jsx` file. We import each of the four operation components:

1.  `Add`
2.  `Subtract`
3.  `Multiply`
4.  `Divide`

These components are then rendered sequentially to display the complete calculator on the screen, with each operation functioning independently. 🚀

-----

## 💻 Project Code

Yahan is project ka mukammal code hai.

### `src/components/Add.jsx`

```jsx
import { useState } from 'react';

function Add() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first + enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} value={enteredNumbers.first} /> +{' '}
      <input type="number" onChange={handleChangeSecondNumber} value={enteredNumbers.second} /> = {result}
    </p>
  );
}

export default Add;
```

#### Code Explanation

  * **`import { useState } from 'react';`**: Imports the `useState` Hook from React to manage the component's state.
  * **`const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });`**: Initializes a state variable `enteredNumbers` as an object with two properties, `first` and `second`, both starting at `0`.
  * **`function handleChangeFirstNumber(event)`**: This function is triggered when the first input field's value changes.
      * It uses the updater function pattern (`setEnteredNumbers(prevNumbers => ...)` to safely update the state based on its previous value.
      * **`first: +event.target.value`**: It updates the `first` property. The unary plus (`+`) operator is used to convert the input's string value (`event.target.value`) into a number.
      * **`second: prevNumbers.second`**: It preserves the existing value of the `second` number.
  * **`function handleChangeSecondNumber(event)`**: This function works similarly but updates the `second` property while preserving the `first`.
  * **`const result = enteredNumbers.first + enteredNumbers.second;`**: A new constant, `result`, is derived on every render by adding the two numbers from the state object.
  * **`return (...)`**: The component renders two number input fields and displays the calculated `result`. The `onChange` prop on each input is linked to its respective handler function.

-----

### `src/components/Subtract.jsx`

```jsx
import { useState } from 'react';

function Subtract() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first - enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} value={enteredNumbers.first} /> -{' '}
      <input type="number" onChange={handleChangeSecondNumber} value={enteredNumbers.second} /> = {result}
    </p>
  );
}

export default Subtract;
```

### `src/components/Multiply.jsx`

```jsx
import { useState } from 'react';

function Multiply() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  const result = enteredNumbers.first * enteredNumbers.second;

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} value={enteredNumbers.first} /> *{' '}
      <input type="number" onChange={handleChangeSecondNumber} value={enteredNumbers.second} /> = {result}
    </p>
  );
}

export default Multiply;
```

### `src/components/Divide.jsx`

```jsx
import { useState } from 'react';

function Divide() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });

  function handleChangeFirstNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: +event.target.value,
      second: prevNumbers.second,
    }));
  }

  function handleChangeSecondNumber(event) {
    setEnteredNumbers((prevNumbers) => ({
      first: prevNumbers.first,
      second: +event.target.value,
    }));
  }

  // Avoid dividing by zero
  const result = enteredNumbers.second !== 0 ? enteredNumbers.first / enteredNumbers.second : '∞';

  return (
    <p>
      <input type="number" onChange={handleChangeFirstNumber} value={enteredNumbers.first} /> /{' '}
      <input type="number" onChange={handleChangeSecondNumber} value={enteredNumbers.second} /> = {result}
    </p>
  );
}

export default Divide;
```

### `src/App.jsx`

```jsx
import './App.css'; // CSS file ko import karein
import Add from './components/Add.jsx';
import Divide from './components/Divide.jsx';
import Multiply from './components/Multiply.jsx';
import Subtract from './components/Subtract.jsx';

function App() {
  return (
    <>
      <h1>React Calculator</h1>
      <Add />
      <Subtract />
      <Multiply />
      <Divide />
    </>
  );
}

export default App;
```

-----

## 🎨 CSS Styling

Application ko professional look dene ke liye, neeche diya gaya CSS code apni `src/App.css` file mein add karein.

### `src/App.css`

```css
/* General body styling */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #f0f2f5;
  color: #1c1e21;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 1rem; /* Added padding for very small screens */
  box-sizing: border-box; /* Ensures padding doesn't add to width */
}

/* Main container for the calculator */
#root {
  background-color: #ffffff;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
}

/* Main heading */
h1 {
  color: #1877f2;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

/* Styling for each operation's paragraph */
p {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f7f8fa;
  border-radius: 8px;
}

/* Styling for the input fields */
input[type="number"] {
  width: 100px;
  padding: 0.75rem;
  font-size: 1.2rem;
  border: 1px solid #ccd0d5;
  border-radius: 6px;
  text-align: center;
  transition: border-color 0.2s, box-shadow 0.2s;
}

/* Style for input field on focus */
input[type="number"]:focus {
  outline: none;
  border-color: #1877f2;
  box-shadow: 0 0 0 2px rgba(24, 119, 242, 0.2);
}

/* =================================== */
/* ==   RESPONSIVE STYLES (MOBILE)  == */
/* =================================== */

@media (max-width: 600px) {
  /* Main container ke padding kam karein */
  #root {
    padding: 1.5rem 1rem;
  }

  /* Heading ka font size chota karein */
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  
  /* Paragraph ka font size aur padding kam karein */
  p {
    font-size: 1.1rem;
    padding: 0.75rem;
    flex-wrap: wrap; /* Agar zaroorat ho to wrap karein */
    justify-content: center;
    gap: 0.5rem;
  }

  /* Input fields ko flexible banayein */
  input[type="number"] {
    width: 80px; /* Width ko thora kam kiya */
    padding: 0.5rem;
    font-size: 1rem;
  }
}
```
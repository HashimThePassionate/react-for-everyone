# 🧮 **Enhanced React Calculator Project Practice 2**

Welcome to the Enhanced React Calculator! This project demonstrates a core and powerful concept in React: **lifting state up**. It is architected to separate concerns by having a main component manage the application's logic and state, while child components are responsible for the UI and handling user interactions.

This guide provides a detailed breakdown of the project structure, the code for each component, and a line-by-line explanation of how everything works together.

---

## 🎯 Project Objectives

The primary goals of this enhanced version are:

1.  **Component Consolidation**: To reduce code duplication by using a single, versatile `Calculation` component for handling all user input.
2.  **Dynamic Operation Selection**: To implement a dropdown menu (`<select>`) that allows users to dynamically choose between addition, subtraction, multiplication, and division.
3.  **State Lifting**: To have the main `App` component manage all state (the numbers and the chosen operation) and perform the calculations. The child components emit events up to the parent and receive data down as props.
4.  **Responsive Design**: To ensure the calculator looks and works perfectly on all devices, from small mobile screens to large desktops.

---

## 📂 Project Structure

The project consists of the following files in the `src` directory:

```

src/
├── components/
│   ├── Calculation.jsx
│   └── Result.jsx
├── App.css
└── App.jsx

```

---

## 🎨 CSS Styling (`App.css`)

This file contains all the responsive, mobile-first styles for the application. It ensures a clean, modern, and user-friendly interface on any device.

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
  /* IMPORTANT: This style needs a background image to look good */
  background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}

/* --- Main App Container (The Glass) --- */
.App {
  width: 100%;
  max-width: 550px;
  background: rgba(255, 255, 255, 0.15); /* Semi-transparent background */
  backdrop-filter: blur(12px); /* The magic blur effect */
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  color: white;
}

/* --- Calculation Input Form --- */
.calculation-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.calculation-form input,
.calculation-form select {
  font-family: 'Inter', sans-serif;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  border-radius: 10px;
  padding: 1.2rem; /* Padding barha di hai */
  font-size: 2rem; /* Font size kafi barha diya hai */
  text-align: center;
  transition: all 0.2s ease;
}

.calculation-form input {
  width: 180px; /* Input ke liye width set kar di hai */
}

.calculation-form select {
  width: 100px; /* Dropdown ka width bhi adjust kiya hai */
}

.calculation-form input::placeholder { /* Style placeholder text */
  color: rgba(255, 255, 255, 0.6);
}

.calculation-form select {
  width: 80px;
}

.calculation-form input:focus,
.calculation-form select:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
}

/* --- Result Display Area --- */
.result-display {
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 15px;
}

.result-display p {
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.7);
}

.result-display .result-value {
  font-size: 3rem;
  font-weight: 700;
  margin-top: 0.5rem;
}

/* --- Responsive Styles --- */
@media (max-width: 600px) {
  .calculation-form {
    flex-direction: column;
  }
  .calculation-form input,
  .calculation-form select {
    width: 100%;
    box-sizing: border-box;
  }
}
```

---

## 🧩 Component Breakdown

### `components/Calculation.jsx`

This is a "controlled" or "presentational" component. It does not manage any state itself. Instead, it receives functions as props and calls them whenever a user interacts with an input, effectively delegating state management to its parent.

```javascript
function Calculation({
  onFirstNumberChanged,
  onSecondNumberChanged,
  onOperationChanged,
}) {
  return (
    <p>
      <input type="number" onChange={onFirstNumberChanged} />
      <select onChange={onOperationChanged}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="number" onChange={onSecondNumberChanged} />
    </p>
  );
}

export default Calculation;
```

#### Code Explanation

  * **`function Calculation({ ... })`**: The component destructures three functions from its props. These functions are the event handlers provided by the parent component (`App.jsx`).
  * **`onChange={onFirstNumberChanged}`**: When the value of the first input changes, this component doesn't update any internal state. It simply calls the `onFirstNumberChanged` function that was passed down from its parent. This same pattern applies to the other two inputs.

### `components/Result.jsx`

This is another simple presentational component. Its sole responsibility is to receive the final calculated result via a prop and display it.

```javascript
function Result({ calculationResult }) {
  return <p>Result: {calculationResult}</p>;
}

export default Result;
```

#### Code Explanation

  * **`function Result({ calculationResult })`**: The component accepts a prop named `calculationResult` and renders its value inside a paragraph tag. It is completely unaware of how the calculation is performed.

### `App.jsx`

This is the main container component. It is the "brain" of the application. It owns and manages all the state, contains all the logic for handling events and performing calculations, and passes data and functions down to its children.

```javascript
import { useState } from 'react';
import Calculation from './components/Calculation.jsx';
import Result from './components/Result.jsx';

function App() {
  const [enteredNumbers, setEnteredNumbers] = useState({ first: 0, second: 0 });
  const [chosenOperation, setChosenOperation] = useState('add');

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

  function handleUpdateOperation(event) {
    setChosenOperation(event.target.value);
  }

  let result;

  if (chosenOperation === 'add') {
    result = enteredNumbers.first + enteredNumbers.second;
  } else if (chosenOperation === 'subtract') {
    result = enteredNumbers.first - enteredNumbers.second;
  } else if (chosenOperation === 'multiply') {
    result = enteredNumbers.first * enteredNumbers.second;
  } else {
    result = enteredNumbers.first / enteredNumbers.second;
  }

  return (
    <>
      <Calculation
        onFirstNumberChanged={handleChangeFirstNumber}
        onSecondNumberChanged={handleChangeSecondNumber}
        onOperationChanged={handleUpdateOperation}
      />
      <Result calculationResult={result} />
    </>
  );
}

export default App;
```

#### Code Explanation

  * **`useState`**: Two separate state slices are defined: `enteredNumbers` (an object) to hold the two input numbers, and `chosenOperation` (a string) to hold the selected math operation. This is the application's "single source of truth."
  * **Event Handlers**: Three handler functions (`handleChangeFirstNumber`, `handleChangeSecondNumber`, `handleUpdateOperation`) are defined here. These functions are responsible for updating the state when the user interacts with the inputs in the `Calculation` component. The unary plus (`+`) is used to convert the input string to a number.
  * **Calculation Logic**: A series of `if/else if` statements checks the value of the `chosenOperation` state and calculates the `result` accordingly on every single render.
  * **Passing Props**:
      * The three event handler functions are passed down to the `<Calculation />` component as props. This allows the child to trigger state changes in the parent.
      * The final `result` is passed down to the `<Result />` component via the `calculationResult` prop, so it can be displayed to the user.

<!-- end list -->

---

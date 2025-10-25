# 📝 **Showing a Conditional Error Message in React**

This activity demonstrates how to build a basic form in React that allows users to enter an email address. Upon form submission, the input is validated. Invalid email addresses (defined for this exercise as any email that does not contain an `@` sign) will trigger an error message to be shown below the form. When the invalid email is corrected, any visible error message will be removed.

<details>
<summary><strong>📑 Table of Contents</strong></summary>

- [📝 **Showing a Conditional Error Message in React**](#-showing-a-conditional-error-message-in-react)
  - [1. 🏗️ Build the User Interface](#1-️-build-the-user-interface)
    - [Code: `App.js`](#code-appjs)
    - [🔍 Code Explanation](#-code-explanation)
  - [2. 🔄 Store and Update Input via State](#2--store-and-update-input-via-state)
    - [Code: `App.js` (with State)](#code-appjs-with-state)
    - [🔍 Code Explanation](#-code-explanation-1)
  - [3. 📤 Handle Form Submission and Validation](#3--handle-form-submission-and-validation)
    - [Code: `App.js` (with Submit Handler)](#code-appjs-with-submit-handler)
    - [🔍 Code Explanation](#-code-explanation-2)
  - [4. 🚦 Display the Conditional Error Message](#4--display-the-conditional-error-message)
    - [Code: `App.js` (Final)](#code-appjs-final)
    - [🔍 Code Explanation](#-code-explanation-3)
  - [🎨 Styling (`index.css`)](#-styling-indexcss)
    - [🔍 CSS Explanation](#-css-explanation)

</details>

-----

## 1\. 🏗️ Build the User Interface

First, use a new React project and clear the default JSX from the `App` component. The component should return a `<form>` element. This form must contain an `<input>` with `type="text"` (using `text` instead of `email` makes it easier to test invalid entries for demonstration). Additionally, add a `<label>` for the `<input>` and a `<button>` to submit the form.

The final JSX code for this step should look like this:

### Code: `App.js`

```jsx
function App() {
  return (
    <form>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `function App()`: This defines the main `App` component, which is the root of our application.
  * `return (...)`: This is the JSX (JavaScript XML) block that describes what the component will render.
  * `<form>`: This is the standard HTML form element that will contain our input controls.
  * `<label htmlFor="email">`: This text label is associated with the input field that has an `id` of "email". Using `htmlFor` improves accessibility by linking the label to the input.
  * `<input type="text" id="email" />`: This is the text input field where the user will type. The `id="email"` attribute links it to the `<label>`.
  * `<button>Submit</button>`: This button will, by default, trigger the submission of the parent `<form>` when clicked.
  * `export default App;`: This line exports the `App` component so it can be used by other files in the project (like `index.js`).

-----

## 2\. 🔄 Store and Update Input via State

Next, register a `change` event on the `<input>` element. This event will be used to store and update the entered email address using React's state.

### Code: `App.js` (with State)

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
    // enteredEmail is then not used here, hence you could get a
    // warning related to this. You can ignore it for this example
  }

  return (
    <form>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" onChange={handleChangeEmail} />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `import { useState } from 'react';`: This line imports the `useState` hook from the React library. This hook is essential for adding state to functional components.
  * `const [enteredEmail, setEnteredEmail] = useState();`: This line initializes a new piece of state.
      * `enteredEmail`: This variable will hold the current value of the email input.
      * `setEnteredEmail`: This is the function we will call to update the `enteredEmail` value.
      * `useState()`: This function call creates the state. We leave it empty to start with an initial value of `undefined`.
  * `function handleChangeEmail(event) { ... }`: This defines an event handler function. It's designed to be executed every time the `change` event occurs on the input.
  * `setEnteredEmail(event.target.value);`: Inside the handler, `event.target.value` accesses the current text inside the input field that triggered the event. This text is then passed to `setEnteredEmail`, which updates our `enteredEmail` state.
  * `onChange={handleChangeEmail}`: This prop is added to the `<input>` element. It links the input's `change` event (which fires on every keystroke) to our `handleChangeEmail` function.
  * `// ... warning ...`: The comment indicates that you might see a linting warning because the `enteredEmail` variable itself isn't *read* inside the `handleChangeEmail` function. This is expected and can be ignored for this step.

-----

## 3\. 📤 Handle Form Submission and Validation

Add a `submit` event handler function to the `<form>`. This function will be triggered every time the form is submitted. Inside this handler, you must prevent the default browser behavior (which is to send an HTTP request and reload the page) by calling `event.preventDefault()`. Finally, add logic to determine if the entered email address is valid (contains an `@` sign) or not.

### Code: `App.js` (with Submit Handler)

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const emailIsValid = enteredEmail.includes('@');
    // emailIsValid is then not used here, hence you could get a
    // warning related to this. You can ignore it for this example
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="email">Your email</label>
      <input type="text" id="email" onChange={handleChangeEmail} />
      <button>Submit</button>
    </form>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `function handleSubmitForm(event) { ... }`: This defines the event handler that will run when the form is submitted. The `event` object is passed to it automatically by the browser.
  * `event.preventDefault();`: This critical line stops the browser's default form submission behavior. This prevents the page from reloading and allows us to handle the form data using JavaScript.
  * `const emailIsValid = enteredEmail.includes('@');`: This is our validation logic. It checks if the `enteredEmail` string (which is stored in our state) contains the `@` character. The result (`true` or `false`) is stored in the `emailIsValid` constant.
  * `onSubmit={handleSubmitForm}`: This prop is added to the `<form>` element. It links the form's `submit` event (which is triggered by the `<button>`) to our `handleSubmitForm` function.
  * `// ... warning ...`: Again, this comment notes that the new `emailIsValid` constant is not yet being used, which is fine for this step.

-----

## 4\. 🚦 Display the Conditional Error Message

Finally, add a new state slice (named `inputIsInvalid` in this example, defaulting to `false`) to store the validity information. Update this state in `handleSubmitForm` based on the `emailIsValid` constant. Use this new state to conditionally show an error message (inside a `<p>` tag) below the form.

### Code: `App.js` (Final)

```jsx
import { useState } from 'react';

function App() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [inputIsInvalid, setInputIsInvalid] = useState(false);

  function handleChangeEmail(event) {
    setEnteredEmail(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const emailIsValid = enteredEmail.includes('@');
    setInputIsInvalid(!emailIsValid);
  }

  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="email">Your email</label>
        <input type="text" id="email" onChange={handleChangeEmail} />
        <button>Submit</button>
      </form>
      {inputIsInvalid && <p>Invalid email address entered!</p>}
    </section>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `const [inputIsInvalid, setInputIsInvalid] = useState(false);`: This initializes our second piece of state. `inputIsInvalid` will track if the *last submitted email* was invalid. It defaults to `false` (meaning the input is assumed valid until proven otherwise).
  * `setInputIsInvalid(!emailIsValid);`: This line is added to `handleSubmitForm`. It updates the `inputIsInvalid` state.
      * It uses the `!` (NOT) operator. If `emailIsValid` is `true`, it sets `inputIsInvalid` to `false`.
      * If `emailIsValid` is `false`, it sets `inputIsInvalid` to `true`.
  * `<section> ... </section>`: The entire returned JSX is wrapped in a `<section>` tag. This is a good practice for grouping related content and allows us to style the container.
  * `{inputIsInvalid && <p>Invalid email address entered!</p>}`: This is the conditional rendering logic.
      * It uses the `&&` (Logical AND) JavaScript operator.
      * If `inputIsInvalid` is `false`, the expression on the right is never evaluated, and React renders nothing.
      * If `inputIsInvalid` is `true`, React evaluates and renders the expression on the right, which is the `<p>` tag containing the error message.

**Note:** The `&&` operator is a concise way to handle conditional rendering. You could also use `if` statements (outside the JSX) or a ternary expression (`{inputIsInvalid ? <p>...<p> : null}`) to achieve the same result. You can also choose to create and output this conditional JSX element inline (as shown) or with the help of a separate variable.

-----

## 🎨 Styling (`index.css`)

The following CSS code can be placed in your `index.css` file to style the form and the conditional error message.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #cbc1d6;
  color: #1f1e20;
}

section {
  max-width: 30rem;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #ece8ef;
  border: 1px solid #1f1e20;
  border-radius: 6px;
}

form {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
}

label {
  font-weight: bold;
}

input {
  min-width: 15rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #1f1e20;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #3f3e40;
}

p {
  color: #ab2c67;
}
```

### 🔍 CSS Explanation

  * `@import`: Imports the 'Poppins' and 'Rubik' fonts from Google Fonts to be used in the project.
  * `body`: Sets project-wide defaults, including the font, background color (`#cbc1d6`), and text color.
  * `section`: Styles the main `<section>` container, centering it on the page (`margin: 3rem auto`), giving it a max-width, and styling its background and border.
  * `form`: Uses `display: flex` to arrange the label, input, and button in a single row (`justify-content: center` centers them).
  * `label`, `input`, `button`: Provide basic styling (padding, borders, etc.) for the form elements.
  * `button:hover`: Adds a simple hover effect to the button, slightly changing its background color.
  * `p`: This selector styles all `<p>` tags. In our app, this specifically targets the error message, giving it a distinct color (`#ab2c67`) to indicate an error.
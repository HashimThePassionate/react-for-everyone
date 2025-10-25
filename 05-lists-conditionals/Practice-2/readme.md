# 🛍️ **Outputting a List of Products in React**

> This activity guides you through building a user interface that displays a list of dummy products. The interface will also include a button that, when clicked, adds a new dummy item to the existing product list. This action will cause the user interface to update and display the newly expanded list.

<details>
<summary>📋 Table of Contents</summary>

- [🛍️ **Outputting a List of Products in React**](#️-outputting-a-list-of-products-in-react)
  - [1. 🏗️ Set Up the Initial User Interface](#1-️-set-up-the-initial-user-interface)
    - [Code: `App.js` (Initial Setup)](#code-appjs-initial-setup)
    - [🔍 Code Explanation](#-code-explanation)
  - [2. 💾 Initialize State with Dummy Products](#2--initialize-state-with-dummy-products)
    - [Code: `App.js` (Adding State)](#code-appjs-adding-state)
    - [🔍 Code Explanation](#-code-explanation-1)
  - [3. 📄 Render the Product List](#3--render-the-product-list)
    - [Code: `App.js` (Displaying the List)](#code-appjs-displaying-the-list)
    - [🔍 Code Explanation](#-code-explanation-2)
  - [4. ➕ Add a New Product on Click](#4--add-a-new-product-on-click)
    - [Code: `App.js` (Final)](#code-appjs-final)
    - [🔍 Code Explanation](#-code-explanation-3)
  - [🎨 Styling the Component (`index.css`)](#-styling-the-component-indexcss)

</details>

-----

## 1\. 🏗️ Set Up the Initial User Interface

Begin with a new React project. First, remove the default JSX code returned by the `App` component. Replace it with a `<section>` element that contains both a `<button>` (which will be used to add a new product) and an empty `<ul>` (unordered list) element.

### Code: `App.js` (Initial Setup)

```jsx
import { useState } from 'react';

function App() {
  return (
    <section>
      <button>Add Product</button>
      <ul></ul>
    </section>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `import { useState } from 'react';`: This line imports the `useState` hook from the React library. While it is not used in this initial snippet, it is necessary for the upcoming steps to manage our application's state.
  * `function App()`: This defines the main `App` component, which serves as the root of our React application.
  * `return (...)`: This block contains the JSX (JavaScript XML) code that describes the component's UI structure.
  * `<section>`: This is a semantic HTML tag that groups the content of our component.
  * `<button>Add Product</button>`: This is a standard HTML button that will later be used to trigger an event.
  * `<ul></ul>`: This is an empty unordered list. It will serve as the container for our list of product items.

-----

## 2\. 💾 Initialize State with Dummy Products

Next, define an array of initial dummy products. Each product should be an object containing an `id`, `title`, and `price`. Use this array as the initial value for a new `products` state variable, which must be added to the `App` component using the `useState` hook.

### Code: `App.js` (Adding State)

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <section>
      <button>Add Product</button>
      <ul></ul>
    </section>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `const INITIAL_PRODUCTS = [...]`: This line defines a constant array. It holds four sample product objects. This array is defined outside the `App` component so that it is not recreated every time the component re-renders.
  * `const [products, setProducts] = useState(INITIAL_PRODUCTS);`: This line initializes our component's state using the `useState` hook.
      * `INITIAL_PRODUCTS` is passed as the initial value for this state.
      * `products`: This is the state variable that will hold our current array of products.
      * `setProducts`: This is the function we will call whenever we need to update the `products` state. Calling this function will cause React to re-render the component.

-----

## 3\. 📄 Render the Product List

Now, you will output the list of `products` from the state as part of the returned JSX code. We will iterate over the `products` array and transform each product object into a list item element.

### Code: `App.js` (Displaying the List)

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <section>
      <button>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `{products.map((product) => (...))}`: This is a JavaScript expression embedded within the JSX.
      * `products.map()`: The `map()` method is called on our `products` state array. This method creates a new array by calling the provided function on every element in the original array.
      * `(product) => (...)`: This arrow function is executed for each `product` object in the `products` array. It returns a JSX element (`<li>`) for each product.
  * `<li key={product.id}>`: This creates a list item (`<li>`) for the product.
      * `key={product.id}`: This is a special and required prop in React. When rendering lists, React needs a unique `key` for each item to efficiently manage and update the elements. We use the product's unique `id` for this purpose.
  * `{product.title} (${product.price})`: Inside the list item, we use curly braces again to output the dynamic `title` and `price` properties from the current `product` object.

> **Note:** This example uses the `map()` method. However, you could also use a `for...of` loop to populate an array with JSX elements first, and then output that array variable inside the `<ul>`. You can choose whether to create the list of JSX elements inline (as shown) or with the help of a separate variable or constant.

-----

## 4\. ➕ Add a New Product on Click

Finally, add a `click` event handler to the `<button>`. Create a new function that is triggered when the button is clicked. Inside this function, update the `products` state to add a new dummy product. For the new product's `id`, you can generate a pseudo-unique ID by using `new Date().getTime()`.

### Code: `App.js` (Final)

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function handleAddProduct() {
    setProducts((curProducts) =>
      curProducts.concat({
        id: new Date().getTime(),
        title: 'Another new product',
        price: 15.99,
      })
    );
  }

  return (
    <section>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```

### 🔍 Code Explanation

  * `function handleAddProduct() { ... }`: This defines the event handler function that will execute when the button is clicked.
  * `setProducts((curProducts) => ... )`: We call the `setProducts` state updater function. We pass it an anonymous function (a "functional update") to ensure we are always working with the most recent state. `curProducts` represents the current `products` array at the moment of the update.
  * `curProducts.concat({ ... })`: We use the array `concat()` method. This method does **not** modify the original `curProducts` array. Instead, it returns a **new** array that contains all the elements from `curProducts` plus the new product object provided as an argument. This is crucial for immutability in React.
  * `id: new Date().getTime()`: We generate a simple, pseudo-unique ID for the new product by getting the current timestamp (in milliseconds).
  * `title: 'Another new product', price: 15.99`: These are the hard-coded values for our new product.
  * `<button onClick={handleAddProduct}>`: The `onClick` prop is added to the `<button>`. We pass a reference to our `handleAddProduct` function. React will now call this function every time the button is clicked.

-----

## 🎨 Styling the Component (`index.css`)

Here is the CSS code to style the product list.

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

body {
  margin: 0;
  padding: 3rem;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #dff8fb;
  color: #212324;
}

button {
  padding: 0.5rem 1rem;
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  background-color: #212324;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #3f3e40;
}

ul {
  max-width: 35rem;
  list-style-type: none;
  padding: 0;
  margin: 2rem auto;
}

li {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #5ef0fd;
  border: 2px solid #212324;
  border-radius: 4px;
}
```


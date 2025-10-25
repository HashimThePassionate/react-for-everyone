# 🚀 **Conditional Content and List Data**

Before exploring the techniques for outputting conditional content or list data, it is essential to first understand exactly what these terms mean.

---

## ❓ What is Conditional Content?

**Conditional content** simply refers to any type of content that should only be displayed under specific circumstances.

Here are a few examples:

* 🛑 **Error Overlays:** These should only appear if a user submits incorrect data in a form.
* 📋 **Additional Form Fields:** These might appear once a user chooses to enter extra details (such as business details).
* ⏳ **Loading Spinners:** This is displayed while data is being sent to or fetched from a backend server.
* 🍔 **Side Navigation Menus:** This menu slides into view only when the user clicks on a menu button.

This is just a very short list of examples. You could, of course, come up with hundreds of additional examples.

However, it should be clear what all these examples are about in the end: they are **visual elements** or entire sections of the user interface that are **only shown if certain conditions are met**.

> **Example Breakdown:** In the first example (an error overlay), the **condition** would be that a user entered incorrect data into a form. The **conditionally shown content** would then be the error overlay.

Conditional content is extremely common, since virtually all websites and web apps have some content that is similar or comparable to the preceding examples.

---

## 📜 What is List Data?

In addition to conditional content, many websites also output **lists of data**. It might not always be immediately obvious, but if you think about it, there is virtually no website that does not display some kind of list data.

Again, here are some examples of list data that may be outputted on a site:

* 🛍️ An online shop displaying a grid or list of products.
* 🗓️ An event booking site displaying a list of events.
* 🛒 A shopping cart displaying a list of cart items.
* 🧾 An orders page displaying a list of orders.
* ✍️ A blog displaying a list of blog posts—and maybe a list of comments below a blog post.
* 🧭 A list of navigation items in the header.

An endless list (no pun intended) of examples could be created here. Lists are everywhere on the web.

As the preceding examples show, many (probably even most) websites have multiple lists with various kinds of data on the same site.

> **Example Breakdown:** Take an online shop, for example. Here, you would have a list (or a grid, which is really just another kind of list) of products, a list of shopping cart items, a list of orders, a list of navigation items in the header, and certainly a lot of other lists as well.

This is why it is important that you know how to output any kind of list with any kind of data in React-driven user interfaces.

---

# 💻 **Rendering Content Conditionally**

Imagine the following scenario: You have a button that, when clicked, should result in the display of an extra text box, as shown here.

-----

### Figure 5.1: Initial View

<div align="center">
  <img src="./images/01.png" width="500"/>

  <b>Figure 5.1: Initial View</b>
</div>

Initially, nothing but the button shows up on the screen.

<div align="center">
  <img src="./images/02.png" width="500"/>

  <b>Figure 5.2: View After Click</b>
</div>

### Figure 5.2: View After Click

After a click on the button, another box is shown.

This is a very simple example, but it's not unrealistic. Many websites have parts of the user interface that work like this. Showing extra information upon a button click (or a similar interaction) is a common pattern. Just think of nutrition information below a meal on a food-ordering site or an FAQ section where answers are shown after selecting a question.

So, how could this scenario be implemented in a React app?

### Initial (Non-Conditional) Code

If you ignore the requirement of rendering some of the content conditionally, the overall React component could look like this:

```jsx
function TermsOfUse() {
 return (
  <section>
   <button>Show Terms of Use Summary</button>
   <p>
    By continuing, you accept that we will not indemnify you for any
    damage or harm caused by our products.
   </p>
  </section>
 );
}
```

This component has absolutely no conditional code in it. Therefore, both the button and the extra information box are shown all the time.

In this example, how could the paragraph with the terms-of-use summary text be shown conditionally (that is, only after the button is clicked)?

-----

### Approach 1: Using Conditional Values (with a Flaw)

With the knowledge gained throughout the previous chapters, especially **Chapter 4, Working with Events and State**, you already have the skills needed to only show the text after the button is clicked.

The following code shows how the component could be rewritten to show the full text only after the button is clicked:

```jsx
import { useState } from 'react';

function TermsOfUse() {
 const [showTerms, setShowTerms] = useState(false);
 
 function handleShowTermsSummary() {
  setShowTerms(true);
 }

 let paragraphText = '';

 if (showTerms) {
  paragraphText = 'By continuing, you accept that we will not indemnify you for any damage or harm caused by our products.';
 }

 return (
  <section>
   <button onClick={handleShowTermsSummary}>Show Terms of Use Summary</button>
   <p>{paragraphText}</p>
  </section>
 );
}
```

#### Code Explanation dissected

  * `import { useState } from 'react';`
      * This line imports the `useState` Hook from React, which allows us to add state to our functional component.
  * `const [showTerms, setShowTerms] = useState(false);`
      * We initialize a new state variable called `showTerms` with a default value of `false`.
      * `setShowTerms` is the function we will use to update this state.
  * `function handleShowTermsSummary() { ... }`
      * This function is an event handler. It will be called when the button is clicked.
      * Inside, it calls `setShowTerms(true)`, updating the state variable `showTerms` to `true`.
  * `let paragraphText = '';`
      * We declare a variable `paragraphText` and initialize it as an empty string.
  * `if (showTerms) { ... }`
      * This is our conditional logic. If the state variable `showTerms` is `true` (which it will be after the button click), the `paragraphText` variable is reassigned to the full terms-of-use summary.
  * `return ( ... )`
      * The component returns JSX.
      * The `<button>` now has an `onClick` prop that points to our `handleShowTermsSummary` handler.
      * The `<p>` element outputs the current value of the `{paragraphText}` variable. Initially, it's an empty string. After the click, it contains the full summary.

#### ⚠️ The Problem with This Approach

Parts of the code shown in this snippet already qualify as conditional content. The `paragraphText` value is set conditionally, with the help of an `if` statement based on the value stored in the `showTerms` state.

However, the `<p>` element itself is **actually not conditional**. It is always there, regardless of whether it contains a full sentence or an empty string. If you were to open the browser developer tools and inspect that area of the page, an empty paragraph element would be visible, as shown in the following figure.

<div align="center">
  <img src="./images/03.png" width="700"/>

  <b>Figure 5.3: An Empty Paragraph Element in the DOM</b>
</div>

### Figure 5.3: An Empty Paragraph Element in the DOM

This image shows the browser's developer tools. On the left, a "Show Terms of Use Summary" button is visible. On the right, the HTML "Elements" tab shows the DOM structure. A `<p></p>` element is highlighted, existing in the DOM right after the `<button>`, even though it contains no text.

Having that empty `<p>` element in the DOM is not ideal. While it’s invisible to the user, it’s an extra element that needs to be rendered by the browser. The performance impact will very likely be negligible, but it’s still something you should avoid. A web page doesn’t benefit from having empty elements that contain no content.

### Approach 2: Using Conditional Elements (The Correct Way)

You can translate your knowledge about conditional values (such as the paragraph text) to **conditional elements**, however. Besides storing standard values (like text or numbers) in variables, **you can also store JSX elements in variables**.

This is possible because, as mentioned in **Chapter 1, React – What and Why**, JSX is just syntactic sugar. Behind the scenes, a JSX element is a standard JavaScript function that is executed by React. Also, of course, the return value of a function call can be stored in a variable or constant.

With that in mind, the following code could be used to render the entire paragraph conditionally:

```jsx
import { useState } from 'react';

function TermsOfUse() {
 const [showTerms, setShowTerms] = useState(false);

 function handleShowTermsSummary() {
  setShowTerms(true);
 }

 let paragraph;

 if (showTerms) {
  paragraph = 
   <p>
    By continuing, you accept that we will not indemnify you for
    any damage or harm caused by our products.
   </p>;
 }

 return (
  <section>
   <button onClick={handleShowTermsSummary}>Show Terms of Use Summary</button>
   {paragraph}
  </section>
 );
}
```

#### Code Explanation dissected

  * `let paragraph;`
      * We declare a variable named `paragraph`. Notice it is not initialized with any value, so it is `undefined` by default.
  * `if (showTerms) { ... }`
      * This conditional block remains the same.
      * However, *inside* the `if` block, we are no longer assigning a string. We are assigning the **entire JSX `<p>...</p>` element** to the `paragraph` variable.
  * `return ( ... )`
      * In the returned JSX, we dynamically output the value stored in the `paragraph` variable using `{paragraph}`.

#### ✅ The Result

  * **If `showTerms` is `false`:** The `if` block is skipped. The `paragraph` variable remains `undefined`. Inserting `null` or `undefined` in JSX code leads to **nothing being outputted by React**. The DOM will not contain an empty `<p>` tag.
  * **If `showTerms` is `true`:** The `if` block executes. The `paragraph` variable holds the complete `<p>` element, which is then rendered and outputted in the DOM.

---
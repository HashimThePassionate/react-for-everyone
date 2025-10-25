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

With the knowledge gained throughout the previous Previous Section especially **Previous Section, Working with Events and State**, you already have the skills needed to only show the text after the button is clicked.

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

This is possible because, as mentioned in **Previous Section, React – What and Why**, JSX is just syntactic sugar. Behind the scenes, a JSX element is a standard JavaScript function that is executed by React. Also, of course, the return value of a function call can be stored in a variable or constant.

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

# 🚀 **Different Ways of Rendering Content Conditionally**

While using a variable set by an `if` statement is a common and perfectly fine technique for rendering content conditionally, it is not the only approach you can use.

Alternatively, you could also do the following:

  * 💡 Utilize **ternary expressions**.
  * ✨ "Abuse" **JavaScript logical operators**.
  * 🧩 Use any other valid JavaScript method for selecting values conditionally.

The following sections will explore each approach in detail.

-----

## 1. Utilizing Ternary Expressions

In JavaScript (and many other programming languages), you can use **ternary expressions** (also referred to as conditional ternary operators) as alternatives to `if` statements. Ternary expressions can save you lines of code, especially with simple conditions where the main goal is to assign a value to a variable conditionally.

Here is a direct comparison—first starting with a regular `if` statement:

```javascript
let a = 1;
if (someCondition) {
 a = 2;
}
```

Here is the same logic, implemented with a ternary expression:

```javascript
const a = someCondition ? 2 : 1;
```

This is standard JavaScript code, not specific to React. However, it is important to understand this core JavaScript feature to understand how it can be used in React apps.

### React Example with a Ternary Expression

Translated to the previous React example, the paragraph content could be set and outputted conditionally with the help of a ternary expression like this:

```jsx
import { useState } from 'react';

function TermsOfUse() {
 const [showTerms, setShowTerms] = useState(false);

 function handleShowTermsSummary() {
  setShowTerms(true);
 }

 const paragraph = showTerms ? <p>By continuing, you accept that we will not
indemnify you for any damage or harm caused by our products.</p> : null;

 return (
  <section>
   <button onClick={handleShowTermsSummary}>Show Terms of Use Summary</button>
   {paragraph}
  </section>
 );
}
```

#### Code Explanation dissected

  * `const paragraph = showTerms ? ... : null;`
      * This is the ternary expression.
      * It checks the value of `showTerms`.
      * **If `showTerms` is `true`:** The `paragraph` constant is assigned the JSX `<p>...</p>` element.
      * **If `showTerms` is `false`:** The `paragraph` constant is assigned `null`.
  * `{paragraph}`
      * This outputs the value of the `paragraph` constant. `null` is a safe value to insert into JSX, as it simply leads to nothing being rendered in its place.

As you can see, the overall code is a bit shorter than before, when an `if` statement was used.

### Disadvantage of Ternary Expressions

A disadvantage of ternary expressions is that readability and understandability may suffer—especially when using **nested** ternary expressions, like in the following example:

```jsx
const paragraph = !showTerms ? null : someOtherCondition ? <p>By continuing,
you accept that we will not indemnify you for any damage or harm caused by our
products.</p> : null;
```

This code is difficult to read and even more difficult to understand. For this reason, you should typically **avoid writing nested ternary expressions** and fall back to `if` statements in such situations.

### Inlining Ternary Expressions in JSX

Despite these potential disadvantages, ternary expressions can help you write less code in React apps, especially when using them **inline**, directly inside some JSX code:

```jsx
import { useState } from 'react';

function TermsOfUse() {
 const [showTerms, setShowTerms] = useState(false);

 function handleShowTermsSummary() {
  setShowTerms(true);
 }

 return (  
  <section>
   <button onClick={handleShowTermsSummary}>Show Terms of Use Summary</button>
   {showTerms ? <p>By continuing, you accept that we will not indemnify you
for any damage or harm caused by our products.</p> : null}
  </section>
 );
}
```

#### Code Explanation dissected

  * `{showTerms ? <p>...</p> : null}`
      * This is the same example as before, only now it’s even shorter.
      * We avoid using the separate `paragraph` constant by utilizing the ternary expression directly inside of the returned JSX snippet.
      * This allows for relatively lean component code, so it is quite common to use ternary expressions in JSX code in React apps to take advantage of this.

-----

## 2. Abusing JavaScript Logical Operators

Ternary expressions are popular because they enable you to write less code, which, when used in the right places (and avoiding nesting), can help with overall readability.

Especially in React apps, in JSX code you will often write ternary expressions like this:

```jsx
 {showDetails ? <p>Product Details</p> : null}
```

Or, like this:

```jsx
 {showTerms ? <p>Our terms of use …</p> : null}
```

### The Problem

What do these two snippets have in common?

They are unnecessarily long because, in both examples, the `else` case (`: null`) must be specified, even though it adds nothing to the final user interface. After all, the primary purpose of these ternary expressions is to render JSX elements (`<p>` and `<p>`, in the preceding examples). The `else` case (`: null`) simply means nothing is rendered if the conditions (`showDetails` and `showTerms`) are not met.

### The Solution: Short-Circuiting

This is why a different pattern is popular among React developers:

```jsx
 {showDetails && <p>Product Details</p>}
```

This is the shortest possible way of achieving the intended result, rendering only the `<p>` element and its content if `showDetails` is `true`.

This code uses (or "abuses") an interesting behavior of JavaScript’s logical operators, specifically of the **`&&` (logical AND)** operator.

In JavaScript, the `&&` operator **returns the second value** (that is, the value after `&&`) if the **first value** (that is, the value before `&&`) is **true** or truthy (that is, not `false`, `undefined`, `null`, `0`, and so on).

Normally, you’d use the `&&` operator in `if` statements or ternary expressions. However, when working with React and JSX, you can take advantage of the behavior described previously to output truthy values conditionally. This technique is also called **short-circuiting**.

For example, the following code would output `'Hello'`:

```javascript
console.log(1 === 1 && 'Hello'); // 'Hello'
```

This behavior can be used to write very short expressions that check a condition and then output another value, as shown in the preceding example.

> **⚠️ Note on Falsy Values**
> It is worth noting that using `&&` can lead to unexpected results if you’re using it with non-Boolean condition values (that is, if the value in front of `&&` holds a non-Boolean value).
> **If `showDetails` were `0` instead of `false`** (for whatever reason), the number **`0` would be displayed on the screen**.
> You should therefore ensure that the value acting as a condition yields `null` or `false` instead of arbitrary falsy values. You could, for example, force a conversion to a Boolean by adding `!!` (for example, `!!showDetails`). That is not required if your condition value already holds `null` or `false`.

-----

## 3. Get Creative\!

At this point, you have learned about three different ways of defining and outputting content conditionally (regular `if` statements, ternary expressions, and using the `&&` operator). However, the most important point is that **React code is ultimately just regular JavaScript code**. Hence, any approach that selects values conditionally will work.

If it makes sense in your specific use case and React app, you could also have a component that selects and outputs content conditionally like this:

```jsx
const languages = {
 de: 'de-DE',
 us: 'en-US',
 uk: 'en-GB'
};

function LanguageSelector({country}) {
 return <p>Selected Language: {languages[country]}</p>
}
```

#### Code Explanation dissected

  * `const languages = { ... }`
      * This is a standard JavaScript object acting as a "map" or "dictionary".
  * `function LanguageSelector({country}) { ... }`
      * This component receives a `country` prop (e.g., `"us"`).
  * `{languages[country]}`
      * This component outputs either `'de-DE'`, `'en-US'`, or `'en-GB'` based on the value of the `country` prop.
      * This result is achieved by using JavaScript’s **dynamic property selection syntax**. Instead of selecting a specific property via the dot notation (such as `person.name`), you can select property values via the **bracket notation**.
      * With that notation, you can either pass a specific property name (`languages['de-DE']`) or an expression that yields a property name (`languages[country]`).

Selecting property values dynamically like this is another common pattern for picking values from a map of values. It is therefore an alternative to specifying multiple `if` statements or ternary expressions.

Also, in general, you can use any approach that works in standard JavaScript—because React is, after all, just standard JavaScript at its core.

-----

## 4. 🤔 Which Approach is Best?

Various ways of setting and outputting content conditionally have been discussed, but which approach is best?

That really is **up to you** (and, if applicable, your team). The most important advantages and disadvantages have been highlighted, but ultimately, it is your decision. If you prefer ternary expressions, there’s nothing wrong with choosing them over the logical `&&` operator, for example.

It will also depend on the exact problem you are trying to solve.

  * If you have a map of values (such as a list of countries and their country language codes), going for dynamic property selection instead of multiple `if` statements might be preferable.
  * On the other hand, if you have a single `true`/`false` condition (such as `age > 18`), using a standard `if` statement or the logical `&&` operator might be best.

-----

## 5. 🏷️ Setting Element Tags Conditionally

Outputting content conditionally is a very common scenario. But sometimes, you will also want to choose the **type of HTML tag** that will be outputted conditionally. Typically, this will be the case when you build components whose main task is to wrap and enhance built-in components.

Here’s an example:

```jsx
function Button({isButton, config, children}) {
 if (isButton) {
  return <button {...config}>{children}</button>;
 }
 return <a {...config}>{children}</a>;
};
```

#### Code Explanation dissected

  * `function Button({isButton, config, children})`
      * This component accepts three props: `isButton` (a boolean), `config` (an object), and `children` (the content to be displayed inside the element).
  * `if (isButton)`
      * The component checks whether the `isButton` prop value is truthy.
  * `return <button {...config}>{children}</button>;`
      * If `isButton` is true, it returns a standard HTML `<button>` element.
  * `return <a {...config}>{children}</a>;`
      * If `isButton` is not truthy (maybe because no value was provided, or the value is `false`), the `else` condition becomes active. Instead of a `<button>`, an `<a>` (anchor/link) element is returned.
  * `{...config}`
      * The `config` prop is expected to be a JavaScript object. The standard JavaScript **spread operator (`...`)** is used to add all key-value pairs from the `config` object as props to the element.

> **ℹ️ Note on the Spread Operator (...)**
> Using the spread operator (`...`) to translate an object’s properties (key-value pairs) into component props is another common React pattern (and was introduced in **Previous Section, Components and Props**).
> The spread operator is not a React-specific operator, but using it for this special purpose *is*.
> When spreading an object such as `{href: 'https://some-url.com', target: '_blank'}` onto an `<a>` element (via `<a {...config}>`), the result would be the same as if all props had been set individually (that is, `<a href='https://some-url.com' target='_blank'>`).
> This pattern is particularly popular in situations where you build custom wrapper components that wrap a common core component (e.g., `<button>`, `<a>`, or `<input>`) to add certain styles or behaviors, while still allowing the component to be used in the same way as the built-in component (that is, you can set all the default props).

### Using Variables for Component Types

You can even store pointers to your custom component functions in variables:

```jsx
import MyComponent from './my-component.jsx';
import MyOtherComponent from './my-other-component.jsx';

// ... inside your component ...
const Tag = someCondition ? MyComponent : MyOtherComponent;

// ... in your return ...
return <Tag />;
```

This is another useful pattern that can help save code and hence leads to leaner components.

---
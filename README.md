 # Calculator App

This is a simple calculator app built with React, Tailwind CSS, and Vite.

## Getting Started

To get started, clone the repo and install the dependencies:

```
git clone https://github.com/your-username/calculator-app.git
cd calculator-app
npm install
```

Once the dependencies are installed, you can start the development server:

```
npm run dev
```



## Code Structure

The codebase is structured as follows:

* `index.html`: The main HTML file that loads the app.
* `postcss.config.js`: The PostCSS configuration file.
* `src/App.css`: The main CSS file for the app.
* `src/App.jsx`: The main React component for the app.
* `src/components/Calculator.jsx`: The React component for the calculator.
* `src/main.jsx`: The main React file that renders the app.
* `tailwind.config.js`: The Tailwind CSS configuration file.

## Understanding the Code

### `index.html`

The `index.html` file is the main HTML file that loads the app. It includes the necessary HTML elements and links to the CSS and JavaScript files.

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Calculator</title>
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

### `postcss.config.js`

The `postcss.config.js` file is the PostCSS configuration file. It tells PostCSS which plugins to use when processing CSS files.

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### `src/App.css`

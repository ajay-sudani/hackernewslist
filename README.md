# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Added unit and snapshot tests. Snapshot tests will create a **snapshots** in a folder.
Snapshots tests have been added for the `elements` folder. Unit tests have been added for the `home` component.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## 🧐 What's inside?

A quick look at the top-level files and directories in this directory:

    .
    ├── __mocks__/
    ├── src/
    ├── design-system
    ├── public
    ├── .gitignore
    ├── babel.config.js
    ├── package.json
    ├── package-lock.json
    └── README.md

1. **`__mocks__`**: This folder is a special directory used by the Jest testing framework for creating mock implementations of modules that your code depends on. Jest uses these mock modules to replace the real modules during testing, which allows you to test your code in isolation and ensures that your tests are not affected by any external dependencies.

2. **`src`**: Directory containing all of the code related to what is seen on the front-end of the site (what you see in the browser) `src` is a conventional abbreviation for “source code”. `Components` folder is for functional components and `elements` folder is used
   as presentational components. The `elements` components have no internal state. It is only useful for displaying purpose.

3. **`design-system`**: This is a set of low-level "atomic" components and design tokens that codify our design / brand language and can be reused across different digital experiences. These are non-application / non-CMS specific.

4. **`public`**: Contains the static assets that are used by the application, such as the HTML file, images, fonts, and other static files. The public folder is the place to put files that are not processed by Webpack or other build tools, and are directly served to the browser

5. **`gitignore`**: Contains git ignored files/folders

6. **`babel.config.js`**: Contains configuration for babel

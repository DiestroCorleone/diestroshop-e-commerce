# DiestroShop | E-Commerce React App

Bootstraped with a [Create React App](https://github.com/facebook/create-react-app) site that can be deployed to Vercel with zero configuration.
Developed with [Stackblitz](https://stackblitz.com/), since my current PC doesn't support the most recent Node and NPM versions. You can access and fork the project [here](https://stackblitz.com/edit/react-5r6vbu).

## [Visit the site!](https://diestroshop-e-commerce-k7nvbe1ft-diestrocorleone.vercel.app/)

E-commerce app using the [Fake Story API](https://fakestoreapi.com/)

## About the project

Inspired by the [react-tutorial](https://react-tutorial.app/) [project](https://superm.react-tutorial.app/). I didn't actually finish that course, since I did one from Bob Ziroll on [Scrimba](https://scrimba.com/learn/learnreact). I thought it'd be a good idea to replicate the functionalities from that online market by applying the knowledge I've got during the course.

## Concepts applied

* [useState](https://es.reactjs.org/docs/hooks-state.html)
* [useEffect](https://es.reactjs.org/docs/hooks-effect.html)
* [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [Array.prototype.find()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
* [Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
* [Quark CSS](https://github.com/DiestroCorleone/quark-css) for styling.

### Dependencies used

* [react-router-dom](https://reactrouter.com/) for navigation.

## To do

- [ ] Integration with [Stripe](https://stripe.com/es-us) for payment.
- [ ] Pagination for the *Products* page.
- [ ] Categorie selection for the products.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

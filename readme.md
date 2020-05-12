# One fruit a day

This is an example app that's used in a screen cast that shows how to store your application state in a localStorage when using a `Factory  Function` in JavaScript.

## Web Server setup

To use `localStorage` from Chrome you need to run a little `http-server` locally.

To install `http-server` from `npm` do this:

```
npm install -g http-server
```

After cloning this repository from GitHub change into it.

And the project root folder run the http-server:

```
http-server
```

This will start an http-server on port `8080` if that port number is available. If that port number see on the console on which port number the server is started on.

Open the site in a browser at: `http://localhost:8080` or at the appropriate port number.

To prevent any caching issues start the server with this command:

```
 http-servr -c-1
``` 

## Storing a Factory Functions state in localStorage

To ensure that this widget can keep it's state after a refresh we need store it's state in the `localStorage` and the read the state back from `localStorage` again.

To do that we need to:

* Ensure the Factory Function can export it's state (it has a function that returns it's state),
* and that it can initialize it's state at Factory function instantiation.

* Once done with that we need to make sure that the Factory Function state is written to `localStorage`,
* and then that the state stored in `localStorage` is read back into the Factory Function when the widget reloads.

* To store application state which is an Object into `localStorage` we needs to use `JSON.stringify` to convert the Object into a string that can be stored in `localStorage`,
* then then we need to use `JSON.parse` to convert the string stored in `localStorage` back to an Object.


### Ensure your Factory Function can export it's state

After doing this:

```javascript
const oneFruitOfKindOnly = OneFruitOfKindOnly();
const response = oneFruitOfKindOnly.eat("apple");
const response = oneFruitOfKindOnly.eat("pear");
```

We would like to ensure that we can get the state of the Factory Function. For that we will add method called `fruitsEaten`.

Which returns:

```js
{
	'apple' : 0,
	'pear' : 1,
	'orange' : 1
}
```

### Store the state in localStorage

> This code sits inside the EventListener when a fruit is eaten.

To store the state of the Factory Function to localStorage you need to do this:

```js
const fruitState = oneFruitOfKindOnly.fruitsEaten();
// convert the object into String
const fruitStateString = JSON.stringify(fruitState);
localStorage["fruitState"] = fruitStateString;
```

### Initialize the Factory Function state on instantiation

Once the state is stored in `localStorage` it needs to be from there upon Widget initialization and stored in the Factory Function.

> All this code sits out side of any Event Listeners and executes once upon once the Widget loads.

```js
const storedFruitState = localStorage["fruitState"];

// convert the stored Fruit State string into an Object
const fruitState = JSON.parse(storedFruitState);

// Initialize the `OneFruitOfKindOnly` Factory Function with the stored state
const oneFruitOfKindOnly = OneFruitOfKindOnly(fruitState);
```

The factory function should look like this inside:

```js

function OneFruitOfKindOnly(initialState) {

	// check if any state was sent in if so make is the default state
	const hasEatenMap = initialState ? initialState : {
	  'apple' : 0,
	  'pear' : 0,
	  'orange' : 0
	};

	// other code below here
}

```


 





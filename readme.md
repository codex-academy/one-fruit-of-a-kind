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

* Ensure the Factory function can export it's state (it has a function that returns it's state),
* and that it can initialize it's state at Factory function instantiation.

* Once done with that we need to make sure that the Factory function state is written to `localStorage`,
* and then that the state stored in `localStorage` is read back into the Factory function when the widget reloads.

* To store application state which is an Object into `localStorage` we needs to use `JSON.stringify` to convert the Object into a string that can be stored in `localStorage`,
* then then we need to use `JSON.parse` to convert the string stored in `localStorage` back to an Object.
 





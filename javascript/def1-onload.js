// Both functions are used to perform tasks when the page is loaded in the browser but they some subtle differences in how and when they're executed.

// “window.onload” will execute code when browser has loaded the DOM tree and all other resources like images, objects, etc.

// onDocumentReady executes when the DOM tree is built, without waiting for other resources to load. This allows executing the code against the DOM faster with onDocumentReady.


# aXe Chrome Extension Demo

This simple demo was created for my talk at Cascadia Fest, Where in the Stack is Carmen Sanfrancisco? It demonstrates using background and content scripts together to test the DOM from an extension context. 

It is intentionally kept small to focus on the concepts behind extension contexts and message passing between them. For a real-world implementation, check out [axe-firefox-devtools](https://github.com/dequelabs/axe-firefox-devtools) or the [aXe Chrome Extension](chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US).

## Setup
Fetch [aXe](https://github.com/dequelabs/axe-core) as a dependency in `package.json`:
```bash
npm install
```

## Running the extension

`manifest.json` expects a demo page to be running on a local server at port 3333. It can be any page–you can easily change the port or the entire URL. To run the demo page included with this extension, start a web server and open it in your browser. This command expects [http-server](https://www.npmjs.com/package/http-server) to be installed:
```bash
http-server -u localhost -p 3333
````

In Chrome, go to `chrome://extensions` and choose "Load Unpacked Extension". Select the extension directory and it will be added to your browser's toolbar.

When you run the extension on the above page, audit details will be injected into the content page.

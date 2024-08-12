# See Outlook

This is a new project, with a bare-bones file structure.

## Goal

Make Microsoft's Outlook web application more accessible for persons with low vision.

## Strategy

Use the _[Witchcraft CSS/JS injector](https://chromewebstore.google.com/detail/witchcraft-jscss-injector/hokcepcfcicnhalinladgknhaljndhpc)_ Chrome extension to modify the code received from the server before displaying it in the user's browser.

Please see the extension's [GitHub repository](https://github.com/luciopaiva/witchcraft) and [Home page](https://luciopaiva.com/witchcraft/) for more information on its features, functionality and usage.

## Servers

The _Witchcraft_ extension uses _[Simple Web Server](https://simplewebserver.org/)_ to make its code injections. It may be possible to clone and modify a version of this server to meet our needs.

However, at least at this point, it seemed simpler to create a separate _Express_ server to gain access to the various source code analysis and processing libraries available within the _NPM_ environment.

## Development assets

To get us started, I used the "Copy as html" function in the dev console to capture the [entire HTML of the (inbox) page](./public/dev_assets/page-inbox.html) that the Outlook web app displays when it is first loaded.

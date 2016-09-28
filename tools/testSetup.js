/* eslint-disable no-var*/
// http://airbnb.io/enzyme/docs/guides/jsdom.html
//
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

// Prevent the .babelrc dev config (which includes
// hot module reloading code) from applying for tests.
process.env.NODE_ENV = 'test';

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';

(function(document) {
  
  let loadElements = () => {
    console.log('loading elements...');
    var importElements = document.createElement('link');
    importElements.rel = 'import';
    importElements.href = 'elements/elements.html';
    importElements.onload = () => {
      console.log('elements loaded');
      document.querySelector('#container').innerHTML = `    
        <template id="app" is="dom-bind">
          <app-view class="flex"></app-view>         
        </template>`;
      console.log('app loaded');
    };
    document.head.appendChild(importElements);
  };

  let loadWebComponentPolyfill = () => {
    var polyfill = document.createElement('script');
    polyfill.onload = () => {
      console.log('polyfill loaded');
      loadElements();
     };
    polyfill.src = 'bower_components/webcomponentsjs/webcomponents-lite.min.js';
    document.head.appendChild(polyfill);
  };

  // Check to see if Web Components have native support
  let webComponentsSupported = ('registerElement' in document &&
                                'import' in document.createElement('link') &&
                                'content' in document.createElement('template'));

  if (webComponentsSupported) {
    console.log('Web Components are supported, no need for polyfill!');
    loadElements();
  } else {
    console.log('Web Components NOT supported, we need to polyfill!');
    loadWebComponentPolyfill();
  }

})(document);

// ==UserScript==
// @name          just testing
// @description   this is a test to make sure that stuff works y'know?
// @version       0.0.2
// @match         *://*.example.com/*
// ==/UserScript==

// this is broken cuz it does it repatedly if you uhh back& forwrad bnut uhh this is actually Good:tm: You'll see.. YOU"LL ALL SEE!!!1
document.querySelector('h1').textContent += ': ' + location.pathname

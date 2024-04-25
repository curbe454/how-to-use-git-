// ==UserScript==
// @name         test script
// @namespace    https://github.com/curbe454/
// @version      0.2
// @description  it's my first script for tampermonkey.try to take over the world!
// @author       my name aaaaaaaaaa
// @match        *://*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// @license MIT
// ==/UserScript==

// (@match is the website to run the js)
    // use *://* to use for all website
// (@grant is the power(authority))


(// 这个括号引用这个匿名函数
    function() { // 这个括号声明这个匿名函数
    'use strict';

    // Your code here...
    console.log('hello again tampermonkey!');
    }
)(); // 这个括号表示执行这个函数(不传入参数?)
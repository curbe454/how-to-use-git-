// ==UserScript==
// @name         test script
// @namespace    https://github.com/curbe454/
// @version      2024-04-25
// @description  it's my first script for tampermonkey.try to take over the world!
// @author       my name aaaaaaaaaa
// @match        https://github.com/curbe454/how-to-use-git-
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

// (@match is the website to run the js)
    // use *://* to use for all website
// (@grant is the power(authority))


(// 这个括号创建一个匿名函数
    function() {
    'use strict';

    // Your code here...
    console.log('hello tampermonkey!');
    }
)(); // 这个括号表示执行这个函数(不传入参数?)
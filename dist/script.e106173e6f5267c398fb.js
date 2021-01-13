/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
eval("\r\n\r\n\r\nk = 0\r\n\r\nfunction get_add(){\r\n    var ul = document.getElementById('list')\r\n        li = document.createElement('li')\r\n        p = document.createElement('p')\r\n        buttonX = document.createElement('button')\r\n        \r\n        check = document.createElement('input')\r\n        check.type = 'checkbox'\r\n\r\n        task = document.getElementById('input').value\r\n        p.innerHTML = task\r\n        document.getElementById('input').value = ''\r\n\r\n        buttonX.innerHTML = 'X'\r\n    \r\n    ul.appendChild(li)\r\n    li.appendChild(check)\r\n    li.appendChild(p)\r\n    li.appendChild(buttonX)\r\n\r\n    li.id = 'li'\r\n    buttonX.id = 'buttonX'\r\n\r\n    \r\n\r\n}\r\n\r\nfunction get_del(){\r\n    if (document.getElementById('list').getElementsByTagName('li').length > 0) {\r\n        var ul = document.getElementById('list')\r\n        var li = document.getElementById('li')\r\n        var del = ul.removeChild(li);\r\n    } else{\r\n        alert('empty')\r\n    }\r\n        \r\n        \r\n\r\n}\r\n\r\n// buttonX = document.getElementById('buttonX')\r\n// buttonX.onclick = get_del\r\n\r\n\r\nvar del = document.getElementById('del')\r\ndel.onclick = get_del    \r\n\r\n\r\nvar button = document.getElementById('button')\r\nbutton.onclick = get_add\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");
/******/ })()
;
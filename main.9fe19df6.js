parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()}};function t(e,t){for(var o=0;o<e.length;o++)e[o].classList.remove(t)}window.onload=function(){document.addEventListener("click",function(o){var n=o.target;e.any()&&(document.body.classList.add("_touch"),n.classList.contains("menu__arrow")&&n.closest(".menu__item").classList.toggle("_active"),!n.closest(".menu__item")&&document.querySelectorAll(".menu__item._active").length>0&&t(document.querySelectorAll(".menu__item._active"),"_active"),n.classList.contains("menu-footer__title")&&n.closest(".menu-footer__column").classList.toggle("_active"),!n.closest(".menu-footer__column")&&document.querySelectorAll(".menu-footer__column._active").length>0&&t(document.querySelectorAll(".menu-footer__column._active"),"_active"))})};var o=document.querySelector(".icon-menu"),n=document.querySelector(".menu__body");o&&o.addEventListener("click",function(e){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),n.classList.toggle("_active")});var c=document.querySelectorAll(".menu__link[data-goto]");function i(e){var t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){var c=document.querySelector(t.dataset.goto).getBoundingClientRect().top+window.pageYOffset-document.querySelector(".header__body").offsetHeight;o.classList.contains("_active")&&(document.body.classList.remove("_lock"),o.classList.remove("_active"),n.classList.remove("_active")),window.scrollTo({top:c,behavior:"smooth"}),e.preventDefault()}}c.length>0&&c.forEach(function(e){e.addEventListener("click",i)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9fe19df6.js.map
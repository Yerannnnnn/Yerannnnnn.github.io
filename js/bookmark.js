"use strict";document.addEventListener("DOMContentLoaded",function(){function e(){localStorage.setItem("bookmark"+location.pathname,window.scrollY)}function n(){var e=localStorage.getItem("bookmark"+location.pathname),e=parseInt(e,10);isNaN(e)||""!==location.hash||window.anime({targets:document.scrollingElement,duration:200,easing:"linear",scrollTop:e})}var t,o;t=CONFIG.bookmark.save,o=document.querySelector(".book-mark-link"),window.addEventListener("scroll",function(){return o.classList.toggle("book-mark-link-fixed",0===window.scrollY)}),"auto"===t&&(window.addEventListener("beforeunload",e),document.addEventListener("pjax:send",e)),o.addEventListener("click",function(){e(),window.anime({targets:o,duration:200,easing:"linear",top:-30,complete:function(){setTimeout(function(){o.style.top=""},400)}})}),n(),document.addEventListener("pjax:success",n)});
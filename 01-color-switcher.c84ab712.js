!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0;var d=null;t.addEventListener("click",(function(){t.disabled=!0,a.disabled=!1,d=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),700)})),a.addEventListener("click",(function(){a.disabled=!0,t.disabled=!1,clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.c84ab712.js.map

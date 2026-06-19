// ==UserScript==
// @name        New script w3schools.com
// @namespace   Violentmonkey Scripts
// @icon        https://www.w3schools.com/favicon.ico
// @version     1.0.0
//
// @match       https://www.w3schools.com/js/tryit.asp*
// @grant       none
//
// @author      -
// @description
// ==/UserScript==

document.addEventListener("keydown", function (event) {
  // Check if Ctrl is held and Enter is pressed
  if (event.ctrlKey && event.key === "Enter") {
    const runBtn = document.querySelector("#runbtn");
    if (runBtn) {
      runBtn.click();
      runBtn.style.backgroundColor = "#026666";
      setTimeout(() => {
        runBtn.style.backgroundColor = "#04AA6D";
      }, 333);
    }
  }
});

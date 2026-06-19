// ==UserScript==
// @name        YT Course - youtube.com
// @namespace   Violentmonkey Scripts
// @icon        https://cdn-icons-png.flaticon.com/512/3256/3256012.png
// @version     1.0.0
//
// @match       https://www.youtube.com/watch*
// @grant       none
//
// @author      -
// @description Utility script for users with `YouTube Courses` extension
// ==/UserScript==

(function () {
  "use strict";

  function checkVideo(video) {
    setInterval(() => {
      if (video.duration && video.currentTime) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= 10) {
          const btn = document.querySelector(".tmc-watched-btn");
          if (btn && !btn.classList.contains("watched")) {
            btn.click();
          }
        }
      }
    }, 1000);
  }

  const observer = new MutationObserver(() => {
    const video = document.querySelector("video");
    if (video) {
      checkVideo(video);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();

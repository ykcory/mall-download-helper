// ==UserScript==
// @name         mall-download-helper
// @namespace    https://github.com/ykcory
// @version      0.1
// @description  try to take over the world!
// @author       ykcory
// @match        *://item.jd.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const leftBtns = document.querySelector(".preview-wrap .left-btns");
  // 添加下载图片按钮
  const downTopImgBtn = document.createElement("a");
  downTopImgBtn.href = "javascript:void(0)";
  downTopImgBtn.innerText = "下载当前图片";
  leftBtns.appendChild(downTopImgBtn);
  downTopImgBtn.addEventListener("click", () => {
    const img = document.querySelector(".preview-wrap #spec-img");
    const imgUrl = img.src;
    const bigImgUrl = imgUrl.replace("n1", "n12");
    window.open(bigImgUrl);
  });
  // 添加下载视频按钮
  const downVideoBtn = document.createElement("a");
  downVideoBtn.href = "javascript:void(0)";
  downVideoBtn.innerText = "下载视频";
  leftBtns.appendChild(downVideoBtn);
  downVideoBtn.addEventListener("click", () => {
    // 播放视频
    const previewBtn = document.querySelector(".preview-wrap .preview-btn .video-icon");
    previewBtn.click();
    // 获取播放按钮
    setTimeout(()=>{
        const video = document.querySelector(".preview-wrap .J-v-player #video-player_html5_api source");
        console.log(video.src);
        if(video){
            window.open(video.src)
        }
    },500)
    
});
})();

// ==UserScript==
// @name         mall-download-helper
// @namespace    https://github.com/ykcory
// @version      0.1
// @description  try to take over the world!
// @author       ykcory
// @match        *://(item.jd.com|detail.tmall.com)/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const currentHref = window.location.href;
  const isJd = currentHref.includes("item.jd.com");
  const isTm = currentHref.includes("detail.tmall.com");
  if (isJd) {
    jdDownload()
  }
  if (isTm) {
    tmDownload()
  }

  /**
     * 京东图片下载
     */
  function jdDownload() {
    const leftBtns = document.querySelector(".preview-wrap .left-btns");
    // 添加下载图片按钮
    const downTopImgBtn = createATag("下载当前图片")
    leftBtns.appendChild(downTopImgBtn);
    downTopImgBtn.addEventListener("click", () => {
      const img = document.querySelector(".preview-wrap #spec-img");
      const imgUrl = img.src;
      const bigImgUrl = imgUrl.replace("n1", "n12");
      window.open(bigImgUrl);
    });
    // 添加下载视频按钮
    const downVideoBtn = createATag("下载视频")
    leftBtns.appendChild(downVideoBtn);
    downVideoBtn.addEventListener("click", () => {
      // 播放视频
      const previewBtn = document.querySelector(
        ".preview-wrap .preview-btn .video-icon"
      );
      previewBtn.click();
      // 获取播放按钮
      setTimeout(() => {
        const video = document.querySelector(
          ".preview-wrap .J-v-player #video-player_html5_api source"
        );
        if (video) {
          window.open(video.src);
        }
      }, 500);
    });
  }
  /**
   * 天猫图片下载
   */
  function tmDownload(){
    console.log("天猫")
  }
  /**
   * 创建 a 标签
   */
  function createATag(innerText){
    const aTag = document.createElement("a");
    aTag.href = "javascript:void(0)";
    aTag.innerText = innerText;
  }
})();

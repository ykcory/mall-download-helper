// ==UserScript==
// @name         电商图片下载助手-京东|天猫｜淘宝
// @namespace    https://github.com/ykcory
// @version      0.3.0
// @description  一键保存京东、天猫、淘宝高清头图
// @author       ykcory
// @license      MIT
// @match        *://item.jd.com/*
// @match        *://detail.tmall.com/*
// @match        *://item.taobao.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  const currentHref = window.location.href;
  const isJd = currentHref.includes("item.jd.com");
  const isTm = currentHref.includes("detail.tmall.com");
  const isTb = currentHref.includes("item.taobao.com");
  if (isJd) {
    jdDownload();
  }
  if (isTm) {
    tmDownload();
  }
  if (isTb) {
    tbDownload();
  }
  /**
   * 京东图片下载
   */
  function jdDownload() {
    const leftBtns = querySelector(".preview-wrap .left-btns");
    // 添加下载图片按钮
    const downTopImgBtn = createATag("下载图片");
    leftBtns.appendChild(downTopImgBtn);
    downTopImgBtn.addEventListener("click", () => {
      const imgList = querySelectorAll(".preview-wrap .spec-list li img");
      imgList.forEach((img) => {
        const imgUrl = img.src.replace("n5", "n12");
        window.open(imgUrl);
      });
    });
    // 添加下载视频按钮
    const downVideoBtn = createATag("下载视频");
    leftBtns.appendChild(downVideoBtn);
    downVideoBtn.addEventListener("click", () => {
      // 播放视频
      const previewBtn = querySelector(
        ".preview-wrap .preview-btn .video-icon"
      );
      previewBtn.click();
      // 获取播放按钮
      setTimeout(() => {
        const video = querySelector(
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
  function tmDownload() {
    const picGalleryRoot = querySelector("[class|=PicGallery--root]");
    const downBtnsWrap = createElement("div");
    picGalleryRoot.appendChild(downBtnsWrap);
    const downTopImgBtn = createATag("下载图片");
    downBtnsWrap.appendChild(downTopImgBtn);
    downTopImgBtn.addEventListener("click", () => {
      const imgList = querySelectorAll(
        "[class|=PicGallery--thumbnails] li img"
      );
      imgList.forEach((img) => {
        const imgUrl = img.src.replace(/(.*\.jpg).*\.jpg.*/, "$1");
        window.open(imgUrl);
      });
    });
  }
  /**
   * 淘宝图片下载
   */
  function tbDownload() {
    const btnsWrap = querySelector("#J_Social")
    const downTopBtn = createATag("下载图片");
    btnsWrap.appendChild(downTopBtn);
    downTopBtn.addEventListener("click",()=>{
      const imgList = querySelectorAll("#J_UlThumb li img")
      imgList.forEach((img) => {
        const imgUrl = img.src.replace(/(.*\.jpg).*\.jpg.*/, "$1");
        window.open(imgUrl);
      });
    })
  }
  /**
   * 创建 a 标签
   */
  function createElement(tagName) {
    return document.createElement(tagName);
  }

  function createATag(innerText) {
    const aTag = createElement("a");
    aTag.href = "javascript:void(0)";
    aTag.innerText = innerText;
    return aTag;
  }
  /**
   * 简化 querySelector
   */
  function querySelector(selectors) {
    return document.querySelector(selectors);
  }
  function querySelectorAll(selectors) {
    return document.querySelectorAll(selectors);
  }
})();

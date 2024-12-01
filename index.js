
// ==UserScript==
// @name         电商图片下载助手-京东|天猫｜淘宝
// @namespace    https://github.com/ykcory/mall-download-helper
// @version      0.7.0
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
  'use strict';

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
        const imgUrl = img.src.replace(/\/(n5|n0)\/s.+\_jfs/, "/n12/jfs");
        window.open(imgUrl);
      });
    });
    // 添加下载视频按钮
    const downVideoBtn = createATag("下载视频");
    leftBtns.appendChild(downVideoBtn);
    downVideoBtn.addEventListener("click", () => {
      // 播放视频
      const previewBtn = querySelector(".preview-wrap .preview-btn .video-icon");
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
    // 下载详情页
    const descDownload = () => {
      setTimeout(() => {
        const detailContent = querySelector("#J-detail-banner");
        if (detailContent) {
          const downDetailBtn = createATag("下载详情页");
          detailContent.insertBefore(downDetailBtn, detailContent.firstChild);
          const allImg = querySelectorAll("#J-detail-content img");
          const allBg = querySelectorAll(".ssd-module-wrap .ssd-module");
          downDetailBtn.addEventListener("click", () => {
            allImg.forEach((imgUrl) => {
              if(imgUrl.dataset && imgUrl.dataset.lazyload){
                window.open(imgUrl.dataset.lazyload);
              }else {
                window.open(imgUrl.currentSrc);
              }
            });
            allBg.forEach((item) => {
              const style = getComputedStyle(item);
              const bg = style.backgroundImage;
              if (bg) {
                const regex = /url\("(.*?)"\)/;
                const match = bg.match(regex);
                if (match) {
                  window.open(match[1]);
                }
              }
            });
          });
        } else {
          descDownload();
        }

      }, 1000);
    };
    descDownload();
  }

  /**
   * 淘宝图片下载
   */
  function taobaoDownload() {
    window.setTimeout(() => {
      if (querySelector("[class^=mainPicWrap--]")) {
        topImgDownload();
        downloadSkuImg();
        taobalDescDownload();
      } else {
        taobaoDownload();
      }
    }, 1000);
  }

  function topImgDownload() {
    let btnsWrap = querySelector("[class^=picGallery--]");

    const downVideoBtn = createATag("下载视频");
    downVideoBtn.style.position = "absolute";
    downVideoBtn.style.bottom = "-12px";
    downVideoBtn.style.right = "100px";
    btnsWrap.appendChild(downVideoBtn);

    const topImg = querySelectorAll("[class^=picGallery--] ul li")[0];
    downVideoBtn.addEventListener("click", () => {
      topImg.click();
      setTimeout(() => {
        const video = querySelector("[class^=mainPicVideo--] video");
        if (video) {
          window.open(video.src);
        }
      }, 500);
    });

    const downTopBtn = createATag("下载图片");
    downTopBtn.style.position = "absolute";
    downTopBtn.style.bottom = "-12px";
    downTopBtn.style.right = "150px";

    btnsWrap.appendChild(downTopBtn);
    downTopBtn.addEventListener("click", () => {
      const imgList = querySelectorAll("[class^=picGallery--] ul li img");
      imgList.forEach((img) => {
        const baseSrc = img.src;
        let imgUrl = baseSrc.replace("img", "gw");
        imgUrl = baseSrc.replace("_.webp", "");
        window.open(imgUrl);
      });
    });
  }

  function downloadSkuImg() {
    const skuContentList = querySelectorAll("[class^=SkuContent--] [class^=skuItem--]");
    skuContentList.forEach((skuContent) => {
      const imgList = skuContent.querySelectorAll("img");
      if(imgList.length){
        skuContent.style.position = "relative";
        const downSkuImgBtn = createATag("下载sku图片");
        downSkuImgBtn.style.position = "absolute";
        downSkuImgBtn.style.bottom = "-10px";
        downSkuImgBtn.style.left = "75px";
        skuContent.appendChild(downSkuImgBtn);

        downSkuImgBtn.addEventListener("click", () => {
          imgList.forEach((img) => {
            const baseSrc = img.src;
            const imgUrl = baseSrc.replace("_.webp", "");
            window.open(imgUrl);
          });
        });
      }
    });
  }


  function taobalDescDownload(){
    const container = querySelector("#container");
    const downDetailBtn = createATag("下载详情页");
    container.insertBefore(downDetailBtn, container.firstChild);
    const allImg = querySelectorAll(".descV8-container img");
    downDetailBtn.addEventListener("click",()=>{
      allImg.forEach((imgUrl)=>{
        if(imgUrl.dataset && imgUrl.dataset.src){
          window.open(imgUrl.dataset.src);
        }else {
          window.open(imgUrl.currentSrc);
        }
      });
    });
  }

  const currentHref = window.location.href;
  const isJd = currentHref.includes("item.jd.com");
  const isTm = currentHref.includes("detail.tmall.com");
  const isTb = currentHref.includes("item.taobao.com");
  if (isJd) {
      jdDownload();
  }
  if (isTb || isTm) {
      taobaoDownload();
  }

})();

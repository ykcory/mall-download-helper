import {createATag, createElement, querySelector, querySelectorAll} from "../../shared/index.js";
/**
 * 天猫图片下载
 */
export default function tmallDownload() {
  const picGalleryRoot = querySelector("[class|=PicGallery--root]");
  const downBtnsWrap = createElement("div");
  picGalleryRoot.appendChild(downBtnsWrap);
  const downTopImgBtn = createATag("下载图片");
  downBtnsWrap.appendChild(downTopImgBtn);
  downTopImgBtn.addEventListener("click", () => {
    const imgList = querySelectorAll("[class|=PicGallery--thumbnails] li img");
    imgList.forEach((img) => {
      const imgUrl = img.src.replace(/(.*\.jpg).*\.jpg.*/, "$1");
      window.open(imgUrl);
    });
  });
}

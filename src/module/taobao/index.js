import {
  createATag,
  querySelector,
  querySelectorAll,
} from "../../shared/index.js";

/**
 * 淘宝图片下载
 */
export default function taobaoDownload() {
  window.setTimeout(() => {
    if (querySelector("[class^=mainPicWrap--]")) {
      topImgDownload();
    } else {
      taobaoDownload();
    }
  }, 1000);
}

function topImgDownload() {
  let btnsWrap = querySelector("[class^=picGallery--]");
  const downTopBtn = createATag("下载图片");
  downTopBtn.style.position = "absolute";
  downTopBtn.style.bottom = "-10px";
  downTopBtn.style.left = "100px";

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

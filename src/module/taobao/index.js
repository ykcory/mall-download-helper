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
      downloadSkuImg();
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
      skuContent.style.position = "relative"
      const downSkuImgBtn = createATag("下载sku图片");
      downSkuImgBtn.style.position = "absolute"
      downSkuImgBtn.style.bottom = "-10px"
      downSkuImgBtn.style.left = "75px"
      skuContent.appendChild(downSkuImgBtn)

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

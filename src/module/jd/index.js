import { createATag, querySelector, querySelectorAll } from "../../shared/index.js";

/**
 * 京东图片下载
 */
export default function jdDownload() {
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
      const ssdModule = querySelector(".ssd-module-wrap");
      if (ssdModule) {
        const downDetailBtn = createATag("下载详情页");
        ssdModule.insertBefore(downDetailBtn, ssdModule.firstChild);
        const alldiv = querySelectorAll(".ssd-module-wrap div")
        const allBg = []
        alldiv.forEach((item) => {
          const style = getComputedStyle(item)
          const bg = style.backgroundImage
          if (bg) {
            const regex = /url\("(.*?)"\)/;
            const match = bg.match(regex);
            if (match){
              allBg.push(match[1])
            }
          }
        })
        downDetailBtn.addEventListener("click", () => {
          allBg.forEach((imgUrl) => {
            window.open(imgUrl);
          });
        });
      } else {
        descDownload()
      }
    }, 1000)
  }
  descDownload()
}

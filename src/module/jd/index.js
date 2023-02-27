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
}

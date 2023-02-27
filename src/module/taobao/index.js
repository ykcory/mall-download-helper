import {createATag, querySelector, querySelectorAll} from "../../shared/index.js";

/**
 * 淘宝图片下载
 */
export default function taobaoDownload() {
  const btnsWrap = querySelector("#J_Social");
  const downTopBtn = createATag("下载图片");
  btnsWrap.appendChild(downTopBtn);
  downTopBtn.addEventListener("click", () => {
    const imgList = querySelectorAll("#J_UlThumb li img");
    imgList.forEach((img) => {
      const imgUrl = img.src.replace(/(.*\.jpg).*\.jpg.*/, "$1");
      window.open(imgUrl);
    });
  });
}

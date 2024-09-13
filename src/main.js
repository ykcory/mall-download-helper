import jdDownload from "./module/jd/index.js";
import tmallDownload from "./module/tmall/index.js";
import taobaoDownload from "./module/taobao/index.js";

const currentHref = window.location.href;
const isJd = currentHref.includes("item.jd.com");
const isTm = currentHref.includes("detail.tmall.com");
const isTb = currentHref.includes("item.taobao.com");
if (isJd) {
    jdDownload()
}
if (isTm) {
    tmallDownload()
}
if (isTb) {
    taobaoDownload()
}
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
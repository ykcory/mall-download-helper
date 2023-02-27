/**
   * 创建 a 标签
   */
export function createElement(tagName) {
    return document.createElement(tagName);
  }

export function createATag(innerText) {
    const aTag = createElement("a");
    aTag.href = "javascript:void(0)";
    aTag.innerText = innerText;
    return aTag;
  }
  /**
   * 简化 querySelector
   */
export function querySelector(selectors) {
    return document.querySelector(selectors);
  }
export function querySelectorAll(selectors) {
    return document.querySelectorAll(selectors);
  }

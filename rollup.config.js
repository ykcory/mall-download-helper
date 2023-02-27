import packageData from "./package.json" assert { type : 'json' };

const banner = `
// ==UserScript==
// @name         ${packageData.title}
// @namespace    ${packageData.repository.url}
// @version      ${packageData.version}
// @description  ${packageData.description}
// @author       ${packageData.author}
// @license      ${packageData.license}
// @match        *://item.jd.com/*
// @match        *://detail.tmall.com/*
// @match        *://item.taobao.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
`;

export default {
  input: "src/main.js",
  output: {
    file: "index.js",
    format: "iife",
    banner,
  },
};

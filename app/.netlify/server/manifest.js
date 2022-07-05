var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["Montserrat-Black.ttf", "Montserrat-BlackItalic.ttf", "Montserrat-Bold.ttf", "Montserrat-BoldItalic.ttf", "Montserrat-ExtraBold.ttf", "Montserrat-ExtraBoldItalic.ttf", "Montserrat-ExtraLight.ttf", "Montserrat-ExtraLightItalic.ttf", "Montserrat-Italic.ttf", "Montserrat-Light.ttf", "Montserrat-LightItalic.ttf", "Montserrat-Medium.ttf", "Montserrat-MediumItalic.ttf", "Montserrat-Regular.ttf", "Montserrat-SemiBold.ttf", "Montserrat-SemiBoldItalic.ttf", "Montserrat-Thin.ttf", "Montserrat-ThinItalic.ttf", "favicon.png", "fonts.css", "images/dykestowatchoutfor.jpeg"]),
  _: {
    mime: { ".ttf": "font/ttf", ".png": "image/png", ".css": "text/css", ".jpeg": "image/jpeg" },
    entry: { "file": "start-de4e63b5.js", "js": ["start-de4e63b5.js", "chunks/vendor-5019805d.js"], "css": ["assets/vendor-dc74a490.css"] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/5.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "about",
        pattern: /^\/about\/?$/,
        params: null,
        path: "/about",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        key: "data",
        pattern: /^\/data\/?$/,
        params: null,
        path: "/data",
        shadow: null,
        a: [0, 4],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/api\/movie\/([^/]+?)\.json$/,
        params: (m) => ({ movie: m[1] }),
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/movie/_movie_.json.js")))
      },
      {
        type: "page",
        key: "[id]",
        pattern: /^\/([^/]+?)\/?$/,
        params: (m) => ({ id: m[1] }),
        path: null,
        shadow: null,
        a: [0, 5],
        b: [1]
      }
    ]
  }
};

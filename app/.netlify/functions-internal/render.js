const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Montserrat-Black.ttf","Montserrat-BlackItalic.ttf","Montserrat-Bold.ttf","Montserrat-BoldItalic.ttf","Montserrat-ExtraBold.ttf","Montserrat-ExtraBoldItalic.ttf","Montserrat-ExtraLight.ttf","Montserrat-ExtraLightItalic.ttf","Montserrat-Italic.ttf","Montserrat-Light.ttf","Montserrat-LightItalic.ttf","Montserrat-Medium.ttf","Montserrat-MediumItalic.ttf","Montserrat-Regular.ttf","Montserrat-SemiBold.ttf","Montserrat-SemiBoldItalic.ttf","Montserrat-Thin.ttf","Montserrat-ThinItalic.ttf","favicon.png","fonts.css","images/dykestowatchoutfor.jpeg"]),
	_: {
		mime: {".ttf":"font/ttf",".png":"image/png",".css":"text/css",".jpeg":"image/jpeg"},
		entry: {"file":"start-4d4c1fa7.js","js":["start-4d4c1fa7.js","chunks/vendor-5019805d.js"],"css":["assets/vendor-dc74a490.css"]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "about",
				pattern: /^\/about\/?$/,
				params: null,
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				key: "data",
				pattern: /^\/data\/?$/,
				params: null,
				path: "/data",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/movie\/([^/]+?)\.json$/,
				params: (m) => ({ movie: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/movie/_movie_.json.js'))
			},
			{
				type: 'page',
				key: "[id]",
				pattern: /^\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				shadow: null,
				a: [0,5],
				b: [1]
			}
		]
	}
});

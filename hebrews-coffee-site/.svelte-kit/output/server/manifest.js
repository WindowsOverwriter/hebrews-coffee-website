export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "hebrews-coffee-site/_app",
	assets: new Set(["fonts/Comfortaa/Comfortaa-Bold.ttf","fonts/Comfortaa/Comfortaa-Light.ttf","fonts/Comfortaa/Comfortaa-Medium.ttf","fonts/Comfortaa/Comfortaa-Regular.ttf","fonts/Comfortaa/Comfortaa-SemiBold.ttf","fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf","fonts/Comfortaa/OFL.txt","icons/boxed_nav_arrow.svg","icons/dropdown_arrow.svg","icons/hamburger_menu.svg","icons/hot_deselected.svg","icons/hot_selected.svg","icons/iced_deselected.svg","icons/iced_selected.svg","icons/logo.svg","icons/simple_nav_arrow_brown.svg","icons/simple_nav_arrow_white.svg","icons/simple_tailless_nav_arrow.svg","icons/x_icon.svg"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CbHB_lm3.js",app:"_app/immutable/entry/app.CJi4Vagy.js",imports:["_app/immutable/entry/start.CbHB_lm3.js","_app/immutable/chunks/C6Z2_Q8O.js","_app/immutable/chunks/B9VogUKh.js","_app/immutable/chunks/CednUaVI.js","_app/immutable/chunks/EhsBt0o4.js","_app/immutable/entry/app.CJi4Vagy.js","_app/immutable/chunks/CednUaVI.js","_app/immutable/chunks/B9VogUKh.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/nEk7PoAX.js","_app/immutable/chunks/BZmv0-94.js","_app/immutable/chunks/BqfYsc1i.js","_app/immutable/chunks/DS5nTQr6.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/place-order/[drink]",
				pattern: /^\/place-order\/([^/]+?)\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/place-order/[drink]/confirm",
				pattern: /^\/place-order\/([^/]+?)\/confirm\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/place-order/[drink]/confirm/order-confirmation",
				pattern: /^\/place-order\/([^/]+?)\/confirm\/order-confirmation\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/hebrews-coffee-site/","/hebrews-coffee-site/check-order/","/hebrews-coffee-site/login/","/hebrews-coffee-site/place-order/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

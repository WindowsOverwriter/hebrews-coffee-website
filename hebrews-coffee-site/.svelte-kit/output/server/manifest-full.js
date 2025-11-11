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
		client: {start:"_app/immutable/entry/start.C5QvC3Uf.js",app:"_app/immutable/entry/app.D4XaPhHc.js",imports:["_app/immutable/entry/start.C5QvC3Uf.js","_app/immutable/chunks/D-Lfi2MX.js","_app/immutable/chunks/mZYaVlXh.js","_app/immutable/chunks/4tRy_9DW.js","_app/immutable/entry/app.D4XaPhHc.js","_app/immutable/chunks/4tRy_9DW.js","_app/immutable/chunks/mZYaVlXh.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/YaMAKQ02.js","_app/immutable/chunks/ihxhlco1.js","_app/immutable/chunks/BvnH6WBI.js","_app/immutable/chunks/GZJ2z3rj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/check-order",
				pattern: /^\/check-order\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/place-order",
				pattern: /^\/place-order\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/place-order/[drink]",
				pattern: /^\/place-order\/([^/]+?)\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/place-order/[drink]/confirm",
				pattern: /^\/place-order\/([^/]+?)\/confirm\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/place-order/[drink]/confirm/order-confirmation",
				pattern: /^\/place-order\/([^/]+?)\/confirm\/order-confirmation\/?$/,
				params: [{"name":"drink","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

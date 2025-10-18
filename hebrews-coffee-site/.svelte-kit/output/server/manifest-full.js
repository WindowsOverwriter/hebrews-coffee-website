export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "hebrews-coffee-site/_app",
	assets: new Set(["fonts/Comfortaa/Comfortaa-Bold.ttf","fonts/Comfortaa/Comfortaa-Light.ttf","fonts/Comfortaa/Comfortaa-Medium.ttf","fonts/Comfortaa/Comfortaa-Regular.ttf","fonts/Comfortaa/Comfortaa-SemiBold.ttf","fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf","fonts/Comfortaa/OFL.txt","icons/boxed_nav_arrow.svg","icons/dropdown_arrow.svg","icons/hamburger_menu.svg","icons/hot_deselected.svg","icons/hot_selected.svg","icons/iced_deselected.svg","icons/iced_selected.svg","icons/simple_nav_arrow_brown.svg","icons/simple_nav_arrow_white.svg","icons/simple_tailless_nav_arrow.svg","icons/x_icon.svg","logo.svg"]),
	mimeTypes: {".ttf":"font/ttf",".txt":"text/plain",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.HBOPqhsF.js",app:"_app/immutable/entry/app.Dx1ymAnz.js",imports:["_app/immutable/entry/start.HBOPqhsF.js","_app/immutable/chunks/CZzV8zSD.js","_app/immutable/chunks/B0ugiPo6.js","_app/immutable/chunks/DN-Y5FX1.js","_app/immutable/entry/app.Dx1ymAnz.js","_app/immutable/chunks/DN-Y5FX1.js","_app/immutable/chunks/B0ugiPo6.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D5Qwt-z6.js","_app/immutable/chunks/DuKA917J.js","_app/immutable/chunks/B3K-TgRg.js","_app/immutable/chunks/D5Elu2hf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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

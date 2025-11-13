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
		client: {start:"_app/immutable/entry/start.BPe0jLB7.js",app:"_app/immutable/entry/app.2IWTkbVt.js",imports:["_app/immutable/entry/start.BPe0jLB7.js","_app/immutable/chunks/r3tN5Qs3.js","_app/immutable/chunks/B3Yr4pq7.js","_app/immutable/chunks/D7JtEr4O.js","_app/immutable/chunks/Cw4pzU6C.js","_app/immutable/entry/app.2IWTkbVt.js","_app/immutable/chunks/D7JtEr4O.js","_app/immutable/chunks/B3Yr4pq7.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BKURqBGS.js","_app/immutable/chunks/Dkbn17K0.js","_app/immutable/chunks/DgrQxfD2.js","_app/immutable/chunks/B8zlTyjN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/hebrews-coffee-site/","/hebrews-coffee-site/place-order","/hebrews-coffee-site/place-order/latte","/hebrews-coffee-site/place-order/americano","/hebrews-coffee-site/place-order/cold-brew","/hebrews-coffee-site/place-order/chai-latte","/hebrews-coffee-site/place-order/dirty-chai-latte","/hebrews-coffee-site/place-order/london-fog","/hebrews-coffee-site/place-order/hot-chocolate","/hebrews-coffee-site/place-order/iced-tea","/hebrews-coffee-site/place-order/[drink]","/hebrews-coffee-site/place-order/[drink]/confirm","/hebrews-coffee-site/place-order/[drink]/confirm/order-confirmation","/hebrews-coffee-site/login","/hebrews-coffee-site/check-order"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

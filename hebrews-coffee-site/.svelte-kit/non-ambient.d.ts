
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/check-order" | "/login" | "/place-order" | "/place-order/[drink]" | "/place-order/[drink]/confirm" | "/place-order/[drink]/confirm/order-confirmation";
		RouteParams(): {
			"/place-order/[drink]": { drink: string };
			"/place-order/[drink]/confirm": { drink: string };
			"/place-order/[drink]/confirm/order-confirmation": { drink: string }
		};
		LayoutParams(): {
			"/": { drink?: string };
			"/check-order": Record<string, never>;
			"/login": Record<string, never>;
			"/place-order": { drink?: string };
			"/place-order/[drink]": { drink: string };
			"/place-order/[drink]/confirm": { drink: string };
			"/place-order/[drink]/confirm/order-confirmation": { drink: string }
		};
		Pathname(): "/" | "/check-order" | "/check-order/" | "/login" | "/login/" | "/place-order" | "/place-order/" | `/place-order/${string}` & {} | `/place-order/${string}/` & {} | `/place-order/${string}/confirm` & {} | `/place-order/${string}/confirm/` & {} | `/place-order/${string}/confirm/order-confirmation` & {} | `/place-order/${string}/confirm/order-confirmation/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/fonts/Comfortaa/Comfortaa-Bold.ttf" | "/fonts/Comfortaa/Comfortaa-Light.ttf" | "/fonts/Comfortaa/Comfortaa-Medium.ttf" | "/fonts/Comfortaa/Comfortaa-Regular.ttf" | "/fonts/Comfortaa/Comfortaa-SemiBold.ttf" | "/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf" | "/fonts/Comfortaa/OFL.txt" | "/icons/boxed_nav_arrow.svg" | "/icons/dropdown_arrow.svg" | "/icons/hamburger_menu.svg" | "/icons/hot_deselected.svg" | "/icons/hot_selected.svg" | "/icons/iced_deselected.svg" | "/icons/iced_selected.svg" | "/icons/logo.svg" | "/icons/simple_nav_arrow_brown.svg" | "/icons/simple_nav_arrow_white.svg" | "/icons/simple_tailless_nav_arrow.svg" | "/icons/x_icon.svg" | string & {};
	}
}
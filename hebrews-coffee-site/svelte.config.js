import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
        kit: {
                prerender: {
                        crawl: true,
                        entries: [
                                '/',
                                '/place-order',
                                '/place-order/latte',
                                '/place-order/americano',
                                '/place-order/cold-brew',
                                '/place-order/chai-latte',
                                '/place-order/dirty-chai-latte',
                                '/place-order/london-fog',
                                '/place-order/hot-chocolate',
                                '/place-order/iced-tea',
                                '/place-order/[drink]',
                                '/place-order/[drink]/confirm',
                                '/place-order/[drink]/confirm/order-confirmation'
                        ]
                },
                adapter: adapter({
                        pages: path.resolve('../build'),
                        assets: path.resolve('../build'),
                        fallback: '404.html'  // CHANGED: was null, now '404.html'
                }),
                paths: {
                        base: '/hebrews-coffee-site',
                        relative: false
                }
        }
};

export default config;
import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
        kit: {
                prerender: {
                        handleHttpError: 'ignore',
                        handleMissingId: 'ignore'
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
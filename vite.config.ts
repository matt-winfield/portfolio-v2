import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { flatRoutes } from 'remix-flat-routes';

installGlobals();

export default defineConfig({
    plugins: [
        remix({
            // We're using https://github.com/kiliman/remix-flat-routes so disable the Remix routing
            ignoredRouteFiles: ['**/.*'],
            routes: async (defineRoutes) => {
                return flatRoutes('routes', defineRoutes);
            },
        }),
        tsconfigPaths(),
    ],
});

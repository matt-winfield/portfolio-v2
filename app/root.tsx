import { MDXProvider } from '@mdx-js/react';
import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import {
    Link,
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useLocation,
    useMatches,
    useOutlet,
} from '@remix-run/react';
import { ChevronLeft } from 'lucide-react';
import { posthog } from 'posthog-js';
import { useEffect } from 'react';
import { GeneralErrorBoundary } from './components/errorBoundary';
import { mdxComponents } from './components/mdx';
import { Footer } from './features/footer';
import { NavMenu } from './features/navMenu';
import { ThemeProvider, useTheme } from './features/themes/themeProvider';
import { ThemeSwitch } from './features/themes/themeSwitcher';
import { getTheme } from './features/themes/themeUtils';
import fontsStylesheetUrl from './styles/fonts.css?url';
import tailwindStylesheetUrl from './styles/tailwind.css?url';
import { cn } from './utils/misc';

export const links: LinksFunction = () => {
    return [
        { rel: 'stylesheet', href: tailwindStylesheetUrl, as: 'style' },
        { rel: 'stylesheet', href: fontsStylesheetUrl, as: 'style' },
    ].filter(Boolean);
};

export const meta: MetaFunction = () => {
    return [
        { title: 'Matt Winfield | Digital Portfolio' },
        { name: 'description', content: `Matt Winfield's digital portfolio` },
    ];
};

function Layout({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <html lang="en" className={theme}>
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <script
                    defer
                    data-domain="matt-winfield.com"
                    src="https://pl.matt-winfield.com/js/script.js"
                ></script>
                {/* Standard favicon */}
                <link rel="icon" type="image/x-icon" href="favicon.ico" />

                {/* Specific size images */}
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="favicon-16.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="favicon-32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="64x64"
                    href="favicon-64.png"
                />

                {/* Apple touch icons */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="favicon-180.png"
                />

                {/* Android icons */}
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="favicon-192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                    href="favicon-512.png"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <MDXProvider components={mdxComponents}>{children}</MDXProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

const Header = () => {
    const matches = useMatches();
    const isOnIndexPage = matches.find((m) => m.id === 'routes/index');

    return (
        <div className="w-full overflow-hidden">
            <header
                // The header uses w-screen instead of w-full so it doesn't resize when the (vertical) scrollbar appears (which would cause a layout shift between pages)
                // The container has overflow-hidden to prevent the horizontal scrollbar from appearing due to this when the vertical scrollbar is visible
                className={cn(
                    isOnIndexPage && 'fixed',
                    'z-10 flex w-screen items-center py-6',
                )}
            >
                <nav
                    className={cn(
                        'flex flex-1 items-center justify-between',
                        isOnIndexPage && 'container',
                    )}
                >
                    {isOnIndexPage && <ThemeSwitch />}
                    <div className="mx-3 min-w-0 flex-1">
                        {!isOnIndexPage && <NavMenu />}
                    </div>
                    <div></div>
                </nav>
            </header>
        </div>
    );
};

export const loader: LoaderFunction = async ({ request }) => {
    const theme = getTheme(request);

    return { theme };
};

export default function App() {
    const { theme } = useLoaderData<typeof loader>();
    const matches = useMatches();
    const outlet = useOutlet();
    const location = useLocation();
    const isOnIndexPage = matches.find((m) => m.id === 'routes/index');

    useEffect(() => {
        posthog.capture('$pageview');
    }, [location.pathname]);

    return (
        <ThemeProvider initialTheme={theme}>
            <Layout>
                <div className="flex min-h-full flex-col justify-between">
                    <Header />
                    <div className="flex-1 basis-[1px]">{outlet}</div>
                    {!isOnIndexPage && <Footer />}
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export function ErrorBoundary() {
    const location = useLocation();
    return (
        <GeneralErrorBoundary
            statusHandlers={{
                404: () => (
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h1>We can&apos;t find this page:</h1>
                            <pre className="whitespace-pre-wrap break-all text-body-lg">
                                {location.pathname}
                            </pre>
                        </div>
                        <Link to="/" className="flex gap-1">
                            <ChevronLeft />
                            <span>Back to home</span>
                        </Link>
                    </div>
                ),
            }}
        />
    );
}

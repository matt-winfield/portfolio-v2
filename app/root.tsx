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
import tailwindStylesheetUrl from './styles/tailwind.css?url';
import fontsStylesheetUrl from './styles/fonts.css?url';
import { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { cn } from './utils/misc';
import { NavMenu } from './features/navMenu';
import { Footer } from './features/footer';
import { ThemeSwitch } from './features/themes/themeSwitcher';
import { getTheme } from './features/themes/themeUtils';
import { ThemeProvider, useTheme } from './features/themes/themeProvider';
import { GeneralErrorBoundary } from './components/errorBoundary';
import { ChevronLeft } from 'lucide-react';

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
                <Meta />
                <Links />
            </head>
            <body>
                {children}
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
        <header
            className={cn(
                isOnIndexPage && 'fixed',
                'z-10 flex w-full items-center py-6',
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
    const isOnIndexPage = matches.find((m) => m.id === 'routes/index');

    return (
        <ThemeProvider initialTheme={theme}>
            <Layout>
                <div className="flex min-h-screen flex-col justify-between">
                    <Header />
                    <div className="flex-1">{outlet}</div>
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

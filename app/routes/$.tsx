// This is called a "splat route" and as it's in the root `/app/routes/`
// directory, it's a catchall. If no other routes match, this one will and we
// can know that the user is hitting a URL that doesn't exist. By throwing a
// 404 from the loader, we can force the error boundary to render which will
// ensure the user gets the right status code and we can display a nicer error
// message for them than the Remix and/or browser default.

import { GeneralErrorBoundary } from '@/components/errorBoundary';
import { Link, useLocation } from '@remix-run/react';
import { ChevronLeft } from 'lucide-react';

export async function loader() {
    throw new Response('Not found', { status: 404 });
}

export default function NotFound() {
    // due to the loader, this component will never be rendered, but we'll return
    // the error boundary just in case.
    return <ErrorBoundary />;
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
                        <Link
                            to="/"
                            className="flex gap-1 text-sm items-center"
                        >
                            <ChevronLeft />
                            <span>Back to home</span>
                        </Link>
                    </div>
                ),
            }}
        />
    );
}
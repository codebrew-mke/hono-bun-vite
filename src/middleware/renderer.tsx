import { jsxRenderer } from 'hono/jsx-renderer';

export const renderer = jsxRenderer(({ children, title }) => {
    return (
        <html>
        <head>
            {import.meta.env.PROD ? (
                <>
                    <link href="/static/style.css" rel="stylesheet"/>
                    <script defer type="module" src="/static/bundle.js"></script>
                </>
            ) : (
                <>
                    <link href="/src/style.css" rel="stylesheet"/>
                    <script defer type="module" src="/src/bundle.ts"></script>
                </>
            )}

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                rel="stylesheet"/>
            <title>{title}</title>
        </head>
        <body>{children}</body>
        </html>
    );
});
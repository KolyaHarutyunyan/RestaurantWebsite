// import { Children } from "react";
// import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheets } from "@material-ui/core/styles";
// import { theme } from "@eachbase/theme";
// import { resetServerContext } from "react-beautiful-dnd";
// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="en">
//         <Head>
//           <meta charSet="utf-8" />
//           <meta name="theme-color" content={theme.palette.primary.main} />
//             <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//           />
//           <link
//             rel="stylesheet"
//             href="https://fonts.googleapis.com/icon?family=Material+Icons"
//           />
//           <script
//             src="https://kit.fontawesome.com/030cda6e9e.js"
//             crossOrigin="anonymous"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
//
// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with server-side generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render
//
//   // Render app and page and get the context of the page with collected side effects.
//   const sheets = new ServerStyleSheets();
//   const originalRenderPage = ctx.renderPage;
//
//
//   ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
//       });
//
//   const initialProps = await Document.getInitialProps(ctx);
//
//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [...Children.toArray(initialProps.styles), sheets.getStyleElement()],
//   };
// };



import Document, { Html, Head, Main, NextScript }  from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link rel="apple-touch-icon" href="favicon.ico"/>
                    <meta name="theme-color" content="#fff" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
}
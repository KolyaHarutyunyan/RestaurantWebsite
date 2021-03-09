// import 'lazysizes'
// import 'lazysizes/plugins/parent-fit/ls.parent-fit'
// import 'lazysizes/plugins/attrchange/ls.attrchange'
import { useRef } from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import { IconsProvider } from "../src/context/IconProvider"
import { UserProvider } from "../src/user"
import theme from "../src/theme"
import { CssBaseline } from "@material-ui/core"
import GlobalCss from "../src/theme/globalCss"
import Header from "../src/components/header";
// import { GlobalFonts } from "../public/assets/fonst";

function MyApp( {Component, pageProps} ) {
  const headerRef = useRef(null);

  return (
    <>
      <Head>
        {/* <title>{meta.pages.index.title}</title>
        <meta name="description" content={meta.pages.index.description} />
        <meta name="title" content={meta.pages.index.title} /> */}

        {/* <!-- Open Graph / Facebook --> */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.publicUrl} />
        <meta property="og:title" content={meta.pages.index.title} />
        <meta property="og:description" content={meta.pages.index.description} />
        <meta property="og:image" content={`${meta.publicUrl}${meta.pages.index.image}`} /> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content={`${meta.publicUrl}${meta.pages.index.image}`} />
        <meta property="twitter:url" content={meta.publicUrl} />
        <meta property="twitter:title" content={meta.pages.index.title} />
        <meta property="twitter:description" content={meta.pages.index.description} />
        <meta property="twitter:image" content={`${meta.publicUrl}${meta.pages.index.image}`} /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalCss />
        {/*<GlobalFonts/>*/}
        <IconsProvider>
          <UserProvider>

              <Header headerRef={headerRef}/>
              <Component {...pageProps} />
              {/*<Footer/>*/}

          </UserProvider>
        </IconsProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from "../src/theme"
import { CssBaseline } from "@material-ui/core"
import GlobalCss from "../src/theme/globalCss"
import { Store } from "./../src/store/index"
import { Footer, Header } from "../src/fragments"
import {IconProvider} from "../src/contexts"

export default function MyApp( {Component, pageProps} ) {


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
        <title>Menuz</title>
      </Head>
      {/*<Store>*/}
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <GlobalCss/>

        <IconProvider>
        {/*  <UserProvider>*/}

        <Header/>
        <Component {...pageProps} />
        <Footer/>

        {/*</UserProvider>*/}
        </IconProvider>
      </ThemeProvider>
      {/*</Store>*/}
    </>
  )
}

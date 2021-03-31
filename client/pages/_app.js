import Head from 'next/head'
import { Theme, useGlobalStyles } from "@eachbase/theme"
import { Store } from "@eachbase/store"
import { Header, Footer } from "@eachbase/fragments"
import { ContextProvider } from "@eachbase/context"

export default function MyApp( {Component, pageProps} ) {
  let classes = useGlobalStyles()

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
        <title>Menuz</title>
      </Head>
      <Store>
        <Theme>
          <ContextProvider>
            <Header/>
            <main className={classes.main}>
            <Component {...pageProps} />
            </main>
            <Footer/>
          </ContextProvider>
        </Theme>
      </Store>
    </>
  )
}

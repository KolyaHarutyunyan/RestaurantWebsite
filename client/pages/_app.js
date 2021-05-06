import { Fragment } from "react";
import Head from "next/head";
import { Theme, STYLED } from "@eachbase/theme";
import { Store } from "@eachbase/store";
import { Header, Footer } from "@eachbase/fragments";
import { ContextProvider } from "@eachbase/context";
import { initAxiosInterceptors } from "@eachbase/utils";

initAxiosInterceptors();
export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Menuz</title>
      </Head>
      <Store>
        <Theme>
          <ContextProvider>
            <Header />
            <STYLED.Main main={true}>
              <Component {...pageProps} />
              <Footer />
            </STYLED.Main>
          </ContextProvider>
        </Theme>
      </Store>
    </Fragment>
  );
}

import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import { Store } from "@eachbase/store";
import { initAxiosInterceptors } from "@eachbase/utils";
import { ModalProvider } from "@eachbase/components";
import { Layout, Modals } from "@eachbase/fragments";

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
        <ThemeProvider>
          <ModalProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <Modals />
          </ModalProvider>
        </ThemeProvider>
      </Store>
    </Fragment>
  );
}

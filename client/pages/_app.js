import { Fragment, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import { initAxiosInterceptors } from "@eachbase/utils";
import { ModalProvider } from "@eachbase/components";
import { Layout, Modals } from "@eachbase/fragments";
import { reduxWrapper } from "@eachbase/store";
initAxiosInterceptors();
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
        <script
          async
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places"
        ></script>
        <title>Menuz</title>
      </Head>
      <ThemeProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Modals />
        </ModalProvider>
      </ThemeProvider>
    </Fragment>
  );
}

export default reduxWrapper().withRedux(MyApp);

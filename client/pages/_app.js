import { Fragment, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import { initAxiosInterceptors } from "@eachbase/utils";
import { ModalProvider } from "@eachbase/components";
import { Modals } from "@eachbase/fragments";
import { reduxWrapper } from "@eachbase/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

initAxiosInterceptors();
const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <title>Welcome Menuz</title>
    </Head>
    <ThemeProvider>
      <ModalProvider>
        <Component {...pageProps} />
        <Modals />
        <ToastContainer hideProgressBar position="bottom-right" />
      </ModalProvider>
    </ThemeProvider>
  </Fragment>
);

export default reduxWrapper().withRedux(MyApp);

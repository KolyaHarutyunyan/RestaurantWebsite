import { Fragment, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import { initAxiosInterceptors } from "@eachbase/utils";
import { ModalProvider } from "@eachbase/components";
import { Modals } from "@eachbase/fragments";
import { reduxWrapper } from "@eachbase/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Modal } from "@material-ui/core";
import "../src/theme/styles/allStyles.scss";

initAxiosInterceptors();
const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places"
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <meta name="theme-color" content="#fff" />

      {/*<link rel="manifest.json" href="../public/manifest.json.json" />*/}
      {/*<link rel="apple-touch-icon" href="../public/icon-512x512.png"/>*/}
      {/*<meta name="theme-color" content="#fff" />*/}

      {/*<link*/}
      {/*  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap"*/}
      {/*  rel="stylesheet"*/}
      {/*></link>*/}
      {/*  <link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
      {/*          <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>*/}
      {/*<script*/}
      {/*  async*/}
      {/*  src="https://www.googletagmanager.com/gtag/js?id=G-31HYXR4Z5Q"*/}
      {/*></script>*/}
      {/*<script*/}
      {/*  type="text/javascript"*/}
      {/*  src="/static/google_data_layer.js"*/}
      {/*></script>*/}
      {/*<script type="text/javascript" src="/static/google_tag_code.js"></script>*/}
      <title>Welcome Menuz</title>
    </Head>
    {/*<noscript>*/}
    {/*  <iframe*/}
    {/*    src="https://www.googletagmanager.com/ns.html?id=GTM-M4ZFMXN"*/}
    {/*    height="0"*/}
    {/*    width="0"*/}
    {/*    styles="display:none;visibility:hidden"*/}
    {/*  ></iframe>*/}
    {/*</noscript>*/}
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

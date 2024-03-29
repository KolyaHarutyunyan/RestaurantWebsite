import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import {
  initAxiosInterceptors,
  SideSheetsDrawerContextProvider,
  TabItemsContextProvider,
} from "@eachbase/utils";
import { ModalProvider } from "@eachbase/components";
import { Layout, Modals } from "@eachbase/fragments";
import { reduxWrapper } from "@eachbase/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

initAxiosInterceptors();
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
      <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80&libraries=places"
      />

      {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}

      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"/>

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@700&display=swap"
        rel="stylesheet"
      ></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>

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
        <SideSheetsDrawerContextProvider>
          <TabItemsContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TabItemsContextProvider>
        </SideSheetsDrawerContextProvider>
        <Modals />
        <ToastContainer hideProgressBar position="bottom-right" />
      </ModalProvider>
    </ThemeProvider>
  </>
);

export default reduxWrapper().withRedux(MyApp);

import { Fragment } from "react";
import Head from "next/head";
import { ThemeProvider } from "@eachbase/theme";
import { Store } from "@eachbase/store";
import { initAxiosInterceptors } from "@eachbase/utils";
import { ModalProvider, Modal } from "@eachbase/components";
import {
  SignInForm,
  ForgotPasswordForm,
  SignUpForm,
  Layout,
  CheckEmailHelper,
  SignUpSuccessHelper,
} from "@eachbase/fragments";
import { MODAL_NAMES } from "@eachbase/constants";

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
            <Modal modalName={MODAL_NAMES.SIGN_IN}>
              <SignInForm />
            </Modal>
            <Modal
              backButton
              onBackButtonClick={({ open }) => open(MODAL_NAMES.SIGN_IN)}
              modalName={MODAL_NAMES.FORGOT_PASSWORD}
            >
              <ForgotPasswordForm />
            </Modal>
            <Modal modalName={MODAL_NAMES.SIGN_UP}>
              <SignUpForm />
            </Modal>
            <Modal modalName={MODAL_NAMES.CHECK_EMAIL_HELPER}>
              <CheckEmailHelper />
            </Modal>
            <Modal modalName={MODAL_NAMES.SIGN_UP_SUCCESS_HELPER}>
              <SignUpSuccessHelper />
            </Modal>
          </ModalProvider>
        </ThemeProvider>
      </Store>
    </Fragment>
  );
}

import { Modal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
import { Fragment } from "react";
import {
  SignInForm,
  ForgotPasswordForm,
  SignUpForm,
  CheckEmailHelper,
  SignUpSuccessHelper,
  CreateRestaurantForm,
} from "@eachbase/fragments";

export const Modals = () => {
  return (
    <Fragment>
      <Modal modalName={MODAL_NAMES.SIGN_IN}>
        <CreateRestaurantForm />
        {/* <SignInForm /> */}
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
      <Modal modalName={MODAL_NAMES.CREATE_RESTAURANT}>
        <CreateRestaurantForm />
      </Modal>
      <Modal modalName={MODAL_NAMES.CHECK_EMAIL_HELPER}>
        <CheckEmailHelper />
      </Modal>
      <Modal modalName={MODAL_NAMES.SIGN_UP_SUCCESS_HELPER}>
        <SignUpSuccessHelper />
      </Modal>
    </Fragment>
  );
};

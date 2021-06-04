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
  DeleteAccountForm,
  EditRestaurantForm,
  EditRestaurantExtraDetailsForm,
  MenuForm,
} from "@eachbase/fragments";
import { useRouter } from "next/router";

export const Modals = () => {
  const router = useRouter();
  return (
    <Fragment>
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
      <Modal
        modalName={MODAL_NAMES.CREATE_RESTAURANT}
        fixed={router.pathname === "/restaurant"}
      >
        <CreateRestaurantForm />
      </Modal>
      <Modal modalName={MODAL_NAMES.CHECK_EMAIL_HELPER}>
        <CheckEmailHelper />
      </Modal>
      <Modal modalName={MODAL_NAMES.SIGN_UP_SUCCESS_HELPER}>
        <SignUpSuccessHelper />
      </Modal>
      <Modal modalName={MODAL_NAMES.DELETE_ACCOUNT}>
        <DeleteAccountForm />
      </Modal>
      <Modal modalName={MODAL_NAMES.EDIT_RESTAURANT}>
        <EditRestaurantForm />
      </Modal>
      <Modal modalName={MODAL_NAMES.EDIT_RESTAURANT_EXTRA_DETAILS}>
        <EditRestaurantExtraDetailsForm />
      </Modal>
      <Modal modalName={MODAL_NAMES.MENU_FORM}>
        <MenuForm />
      </Modal>
    </Fragment>
  );
};

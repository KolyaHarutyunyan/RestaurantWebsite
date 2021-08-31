import { Fragment } from "react";
import { Modal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";
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
  ResetPasswordHelper,
  ConfirmCategoryDeleteDialog,
  ConfirmItemDeleteDialog,
  MenuItemForm,
} from "@eachbase/fragments";
import { useRouter } from "next/router";

export const Modals = () => {
  const router = useRouter();
  return (
    <Fragment>
      <Modal
          closeBorder={'close'}
          modalName={MODAL_NAMES.SIGN_IN}>
        <SignInForm />
      </Modal>
      <Modal
          closeBorder={'back'}
        max={463}
        backButton
        onBackButtonClick={({ open }) => open(MODAL_NAMES.SIGN_IN)}
        modalName={MODAL_NAMES.FORGOT_PASSWORD}
      >
        <ForgotPasswordForm />
      </Modal>
      <Modal
          closeBorder={'close'}
          modalName={MODAL_NAMES.SIGN_UP}>
        <SignUpForm />
      </Modal>
      <Modal
        border={true}
        modalName={MODAL_NAMES.CREATE_RESTAURANT}
        fixed={router.pathname === "/restaurant"}
      >
        <CreateRestaurantForm />
      </Modal>
      <Modal
          closeBorder={'close'}
          max={400}
          modalName={MODAL_NAMES.CHECK_EMAIL_HELPER}>
        <CheckEmailHelper />
      </Modal>
      <Modal modalName={MODAL_NAMES.SIGN_UP_SUCCESS_HELPER}>
        <SignUpSuccessHelper />
      </Modal>
      <Modal modalName={MODAL_NAMES.DELETE_ACCOUNT}>
        <DeleteAccountForm />
      </Modal>
      <Modal border={true} modalName={MODAL_NAMES.EDIT_RESTAURANT}>
        <EditRestaurantForm />
      </Modal>
      <Modal border={true} modalName={MODAL_NAMES.EDIT_RESTAURANT_EXTRA_DETAILS}>
        <EditRestaurantExtraDetailsForm />
      </Modal>
      <Modal border={true} modalName={MODAL_NAMES.MENU_FORM}>
        <MenuForm  />
      </Modal>
      <Modal modalName={MODAL_NAMES.RESET_PASSWORD_SUCCESS_HELPER}>
        <ResetPasswordHelper />
      </Modal>
      <Modal border={true} modalName={MODAL_NAMES.MENU_ITEM_FORM}>
        <MenuItemForm />
      </Modal>
      <Modal border={true} max={464} modalName={MODAL_NAMES.CONFIRM_CATEGORY_DELETION}>
        <ConfirmCategoryDeleteDialog />
      </Modal>
      <Modal modalName={MODAL_NAMES.CONFIRM_ITEM_DELETION}>
        <ConfirmItemDeleteDialog />
      </Modal>
    </Fragment>
  );
};

import { Fragment } from "react";
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
  MenuItemForm, InvoiceInfo
} from "@eachbase/fragments";
import { useRouter } from "next/router";
import {CustomModal} from "../../components";
import { PaymentSuccess } from "../helpers/paymentSuccess/paymentSuccess";

export const Modals = () => {
  const router = useRouter();

  return (
      <Fragment>
      <CustomModal
          closeBorder={'close'}
          modalName={MODAL_NAMES.SIGN_IN}>
        <SignInForm />
      </CustomModal>
      <CustomModal
          closeBorder={'back'}
        max={463}
        backButton
        onBackButtonClick={({ open }) => open(MODAL_NAMES.SIGN_IN)}
        modalName={MODAL_NAMES.FORGOT_PASSWORD}
      >
        <ForgotPasswordForm />
      </CustomModal>
      <CustomModal
          closeBorder={'close'}
          modalName={MODAL_NAMES.SIGN_UP}>
        <SignUpForm />
      </CustomModal>
      <CustomModal
        border={true}
        modalName={MODAL_NAMES.CREATE_RESTAURANT}
        fixed={router.pathname === "/restaurant"}
      >
        <CreateRestaurantForm />
      </CustomModal>
      <CustomModal
          closeBorder={'close'}
          max={400}
          modalName={MODAL_NAMES.CHECK_EMAIL_HELPER}>
        <CheckEmailHelper />
      </CustomModal>
        <CustomModal
          closeBorder={'close'}
          max={400}
          modalName={MODAL_NAMES.CHECK_PAYMENT_HELPER}>
        <PaymentSuccess />
      </CustomModal>

        <CustomModal
          closeBorder={'close'}
          max={400}
          modalName={MODAL_NAMES.INVOICE_INFO}>
        <InvoiceInfo />
      </CustomModal>

      <CustomModal closeBorder={'close'} modalName={MODAL_NAMES.SIGN_UP_SUCCESS_HELPER}>
        <SignUpSuccessHelper />
      </CustomModal>
      <CustomModal modalName={MODAL_NAMES.DELETE_ACCOUNT}>
        <DeleteAccountForm />
      </CustomModal>
      <CustomModal border={true} modalName={MODAL_NAMES.EDIT_RESTAURANT}>
        <EditRestaurantForm />
      </CustomModal>
      <CustomModal border={true} modalName={MODAL_NAMES.EDIT_RESTAURANT_EXTRA_DETAILS}>
        <EditRestaurantExtraDetailsForm />
      </CustomModal>
      <CustomModal border={true} modalName={MODAL_NAMES.MENU_FORM}>
        <MenuForm  />
      </CustomModal>
      <CustomModal modalName={MODAL_NAMES.RESET_PASSWORD_SUCCESS_HELPER}>
        <ResetPasswordHelper />
      </CustomModal>
      <CustomModal border={true} modalName={MODAL_NAMES.MENU_ITEM_FORM}>
        <MenuItemForm />
      </CustomModal>
      <CustomModal border={true} max={464} modalName={MODAL_NAMES.CONFIRM_CATEGORY_DELETION}>
        <ConfirmCategoryDeleteDialog />
      </CustomModal>
      <CustomModal border={true}   modalName={MODAL_NAMES.CONFIRM_ITEM_DELETION}>
        <ConfirmItemDeleteDialog />
      </CustomModal>
      </Fragment>
  );
};

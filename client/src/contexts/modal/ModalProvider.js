import { createContext, useState } from "react";
import { Modal, AuthModal } from "@eachbase/fragments";

const initData = { status: false, props: {} };

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    auth: initData,
    removeMenuItem: initData,
    removeCategory: initData,
    removeMenu: initData,
    removeAccount: initData,
    editMenu: initData,
    editMenuItem: initData,
    editRestaurantInfo: initData,
    editRestaurantExtraDetails: initData,
  });

  const close = (type) =>
    setModal((current) => ({ ...current, [type]: initData }));

  const open = (type, props) =>
    setModal((current) => ({ ...current, [type]: { status: true, ...props } }));

  const openModal = {
    auth: (props = {}) => open("auth", props),
    removeMenuItem: (props = {}) => open("removeMenuItem", props),
    removeCategory: (props = {}) => open("removeCategory", props),
    removeMenu: (props = {}) => open("removeMenu", props),
    removeAccount: (props = {}) => open("removeAccount", props),
    editMenu: (props = {}) => open("editMenu", props),
    editMenuItem: (props = {}) => open("editMenuItem", props),
    editRestaurantInfo: (props = {}) => open("editRestaurantInfo", props),
    editRestaurantExtraDetails: (props = {}) =>
      open("editRestaurantExtraDetails", props),
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      <AuthModal {...modal.auth} close={() => close("auth")} />
      <Modal.RemoveMenu
        {...modal.removeMenu}
        close={() => close("removeMenu")}
      />
      <Modal.RemoveCategory
        {...modal.removeCategory}
        close={() => close("removeCategory")}
      />
      <Modal.RemoveMenuItem
        {...modal.removeMenuItem}
        close={() => close("removeMenuItem")}
      />
      <Modal.RemoveAccount
        {...modal.removeAccount}
        close={() => close("removeAccount")}
      />
      <Modal.EditMenu {...modal.editMenu} close={() => close("editMenu")} />
      <Modal.EditMenuItem
        {...modal.editMenuItem}
        close={() => close("editMenuItem")}
      />
      <Modal.EditRestaurantInfo
        {...modal.editRestaurantInfo}
        close={() => close("editRestaurantInfo")}
      />
      <Modal.EditRestaurantExtraDetails
        {...modal.editRestaurantExtraDetails}
        close={() => close("editRestaurantExtraDetails")}
      />
      {children}
    </ModalContext.Provider>
  );
};

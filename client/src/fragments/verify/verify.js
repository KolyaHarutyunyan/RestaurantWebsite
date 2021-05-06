import { Styled } from "./core";
import { useDispatch } from "react-redux";
import { profileActions } from "@eachbase/store";
import { useContext } from "react";
import { ModalContext } from "@eachbase/context";

export const Verify = () => {
  let dispatch = useDispatch();
  let { openModal } = useContext(ModalContext);

  let handlerRemove = () => {
    openModal.alert({
      submit: (password) => dispatch(profileActions.remove({ password })),
    });
  };

  return (
    <Styled.Content>
      <Styled.RemoveBtn onClick={handlerRemove}>
        Delete my Account
      </Styled.RemoveBtn>
    </Styled.Content>
  );
};

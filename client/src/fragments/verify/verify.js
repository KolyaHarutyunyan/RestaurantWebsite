import { Styled } from "./core";
import { useDispatch } from "react-redux";

export const Verify = () => {
  let handlerRemove = () => {};

  return (
    <Styled.Content>
      <Styled.RemoveBtn onClick={handlerRemove}>
        Delete my Account
      </Styled.RemoveBtn>
    </Styled.Content>
  );
};

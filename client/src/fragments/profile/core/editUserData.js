import { Styled } from ".";
import { useState } from "react";

export const EditUserData = () => {
  const [readOnly, setReadOnly] = useState(true);

  const [userData, setUserData] = useState({
    email: { value: "", error: "" },
    fullName: { value: "", error: "" },
  });

  let handlerClick = () => {
    // if ( readOnly ) {
    setReadOnly(!readOnly);
    // }
  };
  return (
    <Styled.Block>
      <Styled.SaveBtn onClick={handlerClick}>
        {" "}
        {readOnly ? "edit" : "save"}
      </Styled.SaveBtn>
      <Styled.BlockForm open></Styled.BlockForm>
    </Styled.Block>
  );
};

import { Styled } from ".";
import { useState } from "react";

export const EditPassword = () => {
  const [readOnly, setReadOnly] = useState(true);

  const [passwords, setPasswords] = useState({
    current: { value: "", error: "" },
    NewPass: { value: "", error: "" },
    conformPass: { value: "", error: "" },
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
      <Styled.BlockTitle>Change Password</Styled.BlockTitle>
      <Styled.BlockDescription>
        Use strong password to keep your account secure.
      </Styled.BlockDescription>

      <Styled.BlockForm open={!readOnly}></Styled.BlockForm>
    </Styled.Block>
  );
};

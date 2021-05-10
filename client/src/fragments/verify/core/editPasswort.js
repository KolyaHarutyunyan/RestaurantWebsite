import { Styled } from ".";
import { useState } from "react";
import { Input } from "@eachbase/components";
import { Change, Check } from "@eachbase/components";

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

      <Styled.BlockForm open={!readOnly}>
        <Input.pass
          {...passwords.current}
          onChange={(value) => Change.text(value, "current", setPasswords)}
          onBlur={() => Check.password(setPasswords, "current")}
          placeholder="Password"
          blockTitle={"Use at least 8 characters, 1 upper case and 1 digit"}
          brd={8}
          mt={24}
          mtt={32}
        />
      </Styled.BlockForm>
    </Styled.Block>
  );
};

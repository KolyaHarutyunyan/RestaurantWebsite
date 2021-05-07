import { Styled } from ".";
import { useState } from "react";
import { Change, Check } from "@eachbase/components";
import { Input } from "@eachbase/components/inputs";

export const EditUserData = () => {
  const [readOnly, setReadOnly] = useState(true);

  const [userData, setUserData] = useState({
    email: { value: "", error: "" },
    fullName: { value: "", error: "" },
  });

  const handlerClick = () => {
    setReadOnly(!readOnly);
  };

  return (
    <Styled.Block>
      <Styled.SaveBtn onClick={handlerClick}>
        {" "}
        {readOnly ? "edit" : "save"}
      </Styled.SaveBtn>
      <Styled.BlockForm open>
        <Input
          {...userData.fullName}
          onChange={(value) => Change.text(value, "fullName", setUserData)}
          onBlur={() => Check.text("fullName", setUserData, 3, 40)}
          placeholder="full name"
          readOnly={readOnly}
          blockTitle="Full Name"
          brd={8}
          mt={16}
          mtt={8}
        />
        <Input
          {...userData.email}
          onChange={(value) => Change.text(value, "email", setUserData)}
          onBlur={() => Check.email(setUserData)}
          placeholder="email"
          blockTitle="Email"
          readOnly={readOnly}
          brd={8}
          mt={16}
          mtt={24}
        />
      </Styled.BlockForm>
    </Styled.Block>
  );
};

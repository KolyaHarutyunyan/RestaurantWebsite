import { Styled } from ".";
import { useState } from "react";

export const EditUserData = () => {
  const [readOnly, setReadOnly] = useState(true);

  const [userData, setUserData] = useState({
    email: { value: "", error: "" },
    fullName: { value: "", error: "" },
  });

  const handlerClick = () => {
    setReadOnly(!readOnly);
  };

  return <Styled.Block></Styled.Block>;
};

import { Styled } from ".";
import { useState } from "react";
import { Input } from "@eachbase/components";

export const EditPassword = () => {
  const [readOnly, setReadOnly] = useState(true);

  const [passwords, setPasswords] = useState({
    current: { value: "", error: "" },
    NewPass: { value: "", error: "" },
    conformPass: { value: "", error: "" },
  });

  return <Styled.Block></Styled.Block>;
};

import { Typography, Button, useModal } from "@eachbase/components";
import { useEffect, useState } from "react";
import { Container } from "./style";

export const ConfirmDeleteDialog = () => {
  const { params } = useModal();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = params.options ? params.options : [];

  useEffect(() => {
    if (!params.options) {
      setSelectedOption(null);
    }
  }, []);

  return (
    <Container>
      <Typography>{params.title ? params.title : ""}</Typography>
      {/* <ul className="options">{params}</ul> */}
      <div className="actions">
        <Button>Delete</Button>
        <Button>Cancel</Button>
      </div>
    </Container>
  );
};

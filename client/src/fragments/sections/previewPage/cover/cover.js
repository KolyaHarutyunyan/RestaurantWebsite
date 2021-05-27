import { Container } from "./style";
import { BsChevronDown } from "react-icons/bs";
import { Typography } from "@eachbase/components";
export const Cover = () => {
  return (
    <Container>
      <div className="content">
        <Typography color="invert">Happy Hour Menu</Typography>
        <BsChevronDown />
      </div>
    </Container>
  );
};

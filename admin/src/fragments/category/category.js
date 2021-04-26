import { SideStaticMenu } from "@eachbase/components";
import { Container } from "./style";
import { useHistory } from "react-router";

export const Category = () => {
  const history = useHistory();
  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
      <Container>Category</Container>
    </SideStaticMenu>
  );
};

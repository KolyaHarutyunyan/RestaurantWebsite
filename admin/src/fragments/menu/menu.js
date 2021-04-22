import { Container } from "./style";
import { SideStaticMenu } from "@eachbase/components";
import { useHistory } from "react-router";
export const Menu = () => {
  const history = useHistory();
  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
      <Container>Menu</Container>
    </SideStaticMenu>
  );
};

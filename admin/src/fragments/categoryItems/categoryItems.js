import { SideStaticMenu } from "@eachbase/components";
import { useHistory } from "react-router";
import { Container } from "./style";
export const CategoryItems = () => {
  const history = useHistory();
  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
      <Container>CategoryItems</Container>
    </SideStaticMenu>
  );
};

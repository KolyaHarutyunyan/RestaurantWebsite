import { Container } from "./style";
import { Categories } from "./categories";
import { Items } from "./Items";
import { Menu } from "./menu";

export const MenuPageSections = () => {
  return (
    <Container className="container">
      <Menu />
      <Categories />
      <Items />
    </Container>
  );
};

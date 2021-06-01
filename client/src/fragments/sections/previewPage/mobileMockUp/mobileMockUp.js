import { Container } from "./style";

export const MobileMockUp = ({ children }) => {
  return (
    <Container>
      <div className="wrapper">{children}</div>
    </Container>
  );
};

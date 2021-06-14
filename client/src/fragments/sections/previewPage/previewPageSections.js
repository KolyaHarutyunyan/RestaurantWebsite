import { Categories } from "./categories";
import { Cover } from "./cover";
import { MobileMockUp } from "./mobileMockUp";

import { Container } from "./style";

export const PreviewPageSections = () => {
  return (
    <Container>
      <div className="wrapper">
        <MobileMockUp>
          <Cover />
          <Categories />
        </MobileMockUp>
      </div>
    </Container>
  );
};

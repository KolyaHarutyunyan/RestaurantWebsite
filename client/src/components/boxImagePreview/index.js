import { TiDelete } from "react-icons/ti";
import { Container } from "./style";

export const BoxImagePreview = ({
  url,
  main = false,
  bigOne = false,
  onRequestToRemove,
}) => (
  <Container main={main} bigOne={bigOne} url={url}>
    <div
      className="remove"
      onClick={(e) => {
        e.stopPropagation();
        onRequestToRemove();
      }}
    >
      <TiDelete />
    </div>
  </Container>
);

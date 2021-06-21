import { Typography } from "@eachbase/components";
import { Container } from "./style";

export const ItemCard = ({ item, onRequestToDelete, onRequestToEdit }) => {
  return (
    <Container>
      <div className="image" />
      <div className="content">
        <div className="upper">
          <div className="info">
            <Typography color="text">Title</Typography>
            <Typography color="text">descr</Typography>
          </div>
          <Typography color="text" className="price">
            0000
          </Typography>
        </div>
        <div className="under">
          <Typography color="text">Special offers...</Typography>
          <div className="actions"></div>
        </div>
      </div>
    </Container>
  );
};

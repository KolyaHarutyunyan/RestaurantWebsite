import { Typography } from "@eachbase/components";
import { Container } from "./style";
import { TiPencil } from "react-icons/ti";
import { IoIosTrash } from "react-icons/io";

export const ItemCard = ({
  item,
  onRequestToDelete = () => {},
  onRequestToEdit = () => {},
}) => {
  return (
    <Container>
      <div className="image" />
      <div className="content">
        <div className="upper">
          <div className="info">
            <Typography color="text" weight="bold">
              {item.item.name}
            </Typography>
            <Typography className="poor" color="text">
              {item.item.description}
            </Typography>
          </div>
          <Typography color="text" className="price">
            ${item.item.price}
          </Typography>
        </div>
        <div className="under">
          <Typography color="text" className="poor">
            {item.item.option}
          </Typography>
          <div className="actions">
            <button className="edit" onClick={() => onRequestToEdit()}>
              <div className="icon">
                <TiPencil />
              </div>
              <p>Edit</p>
            </button>
            <button className="delete" onClick={() => onRequestToDelete()}>
              <div className="icon">
                <IoIosTrash />
              </div>
              <p>Delete</p>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

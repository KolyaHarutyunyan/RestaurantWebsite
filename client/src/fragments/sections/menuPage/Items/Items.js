import { Typography, Button, Fab, Select } from "@eachbase/components";
import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./style";
export const Items = () => {
  return (
    <Container>
      <div className="head">
        <Typography color="text" weight="bold" size="1.250rem">
          Category Name
        </Typography>
        <Button color="action">Preview</Button>
      </div>
      <div className="add-or-choice">
        <Button link color="action" className="action-button">
          <Fab size={25}>
            <AiOutlinePlus />
          </Fab>
          Add New Menu Item
        </Button>
        <Typography color="text">OR</Typography>
        <Select>
          <option>Choose from the list</option>
        </Select>
      </div>
    </Container>
  );
};

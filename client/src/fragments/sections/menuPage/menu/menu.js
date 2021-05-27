import { Container } from "./style";
import { Typography, Button, Switch, Image } from "@eachbase/components";
import { IoIosTrash } from "react-icons/io";
export const Menu = () => {
  return (
    <Container>
      <div className="head">
        <Typography weight="bold" color="text" size="3rem">
          Menu
        </Typography>
        <div className="actions">
          <Button link>
            <div className="icon">
              <IoIosTrash />
            </div>
            Delete Menu
          </Button>
          <div className="switch-container">
            <Switch />
            <Typography color="action" weight="bold">
              Deactivate
            </Typography>
          </div>
        </div>
      </div>
      <div className="card">
        <Image className="logo" />
        <div className="info">
          <Typography color="text" className="title" weight="bold">
            Test
          </Typography>
          <Typography color="text" className="descr">
            Test
          </Typography>
        </div>
        <div className="actions">
          <Button>Edit</Button>
        </div>
      </div>
    </Container>
  );
};

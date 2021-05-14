import { Button, Typography } from "@eachbase/components";
import { Icons } from "@eachbase/theme";

import { Container } from "./style";
import { IoMdDownload } from "react-icons/io";
import { GoPlus } from "react-icons/go";
export const RestaurantPageSections = () => {
  return (
    <Container className="container">
      <div className="header">
        <Typography color="text" size="1.5rem" weight="bold">
          Restaurant
        </Typography>
        <Button active link className="qr-button">
          <IoMdDownload />
          Download QR Code
        </Button>
      </div>
      <div className="content">
        <div className="restaurant-card">
          <div className="header">
            <Typography color="text" size="1.5rem" weight="bold">
              X Restaurant
            </Typography>
            <Button>Edit</Button>
          </div>
          <div className="descr">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop.
          </div>
        </div>
        <div className="extra-details-card">
          <div className="header">
            <Typography color="text" size="1.5rem" weight="bold">
              X Restaurant
            </Typography>
            <Button>Edit</Button>
          </div>
        </div> 
        <div className="menu-list">
          <Typography color="text" size="1.5rem" weight="bold">Menus</Typography>
          <div className="list">
            <div className="add-card">
              <div className="image">
                <Icons.MenuIcon />
              </div>
              <div className="footer">
                <Button link inactive><GoPlus /> Add Menu</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

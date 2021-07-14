import { Container } from "./style";
import {Typography, Button, Image, useModal} from "@eachbase/components";
import {MODAL_NAMES} from "@eachbase/constants";
import {useEffect, useState} from "react";
export const Hero = () => {

  const { open } = useModal();
  // const [token, setToken] = useState( localStorage.getItem("token"));



  return (
    <Container>
      <div className="hero container">
        <div className="content">
          <Typography color="text"  weight="bold" className="title">
            Build Free Interactive
          </Typography>
          <Typography weight="bold" className="title">
            QR Menus
          </Typography>
          <Typography color="text" className="description">
            No more paper or PDF QR menus that are static and hard to change and manage.
            Let your customers scroll through your menu, click and interact with the menu items.
          </Typography>
          <Button
              // onClick={() => token ? open(MODAL_NAMES.MENU_FORM) : open(MODAL_NAMES.SIGN_IN) }
          >Create FREE Menu</Button>
        </div>
        <div className="image-wrapper">
          {/*<Image src="./assets/homePage/qr_code_scanning.svg" />*/}
          <Image src={'./assets/images/heroHomepage.png'}/>
        </div>
      </div>
    </Container>
  );
};

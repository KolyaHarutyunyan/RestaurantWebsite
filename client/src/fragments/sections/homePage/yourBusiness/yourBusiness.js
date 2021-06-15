import { Container } from "./style";
import { Typography, Image } from "@eachbase/components";

export const YourBusiness = () => {
  return (
    <Container>
      <Typography size="3rem" className="g-title" color="text" weight="bold">
        How to Enhance your business
      </Typography>
      <ul>
        <li>
          <Image src="./assets/homePage/create.svg" />
          <Typography color="text" className="title" weight="bold">
            Create an Account
          </Typography>
          <Typography color="text" className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </li>
        <li>
          <Image src="./assets/homePage/add_menu.svg" />
          <Typography color="text" className="title" weight="bold">
            Add Menus
          </Typography>
          <Typography color="text" className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </li>
        <li>
          <Image src="./assets/homePage/download_qr_code.svg" />
          <Typography color="text" className="title" weight="bold">
            Add Menus
          </Typography>
          <Typography color="text" className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </li>
      </ul>
    </Container>
  );
};

import { Container } from "./style";
import { Typography, Image } from "@eachbase/components";

export const YourBusiness = () => {
  return (
    <Container className="container-mini">
      <Typography  className="g-title" color="text" weight="bold">
        Enhance Your Customer Experience
      </Typography>
      <ul>
        <li>
          <Image src="./assets/homePage/create.svg" />
          <Typography color="text" className="title" weight="bold">
            Quick and Easy Account Creation
          </Typography>
          <Typography color="text" className="content">
            Creating an account takes a minute and allows you to start building your FREE menu right away.
            There are no hassles or spam sent to your email. With an account you can always log back in to make
            adjustments to your menus and publish new ones.
          </Typography>
        </li>
        <li>
          <Image src="./assets/homePage/add_menu.svg" />
          <Typography color="text" className="title" weight="bold">
            Easy to Use Menu Builder
          </Typography>
          <Typography color="text" className="content">
            Our menu builder is easy to use and doesn’t require hours of training.
            Our two main areas of focus are ease of menu creation and ease of use for the customer.
          </Typography>
        </li>
        <li>
          <Image src="./assets/homePage/download_qr_code.svg" />
          <Typography color="text" className="title" weight="bold">
            Interactive Digital Menus
          </Typography>
          <Typography color="text" className="content">
            Customers can scroll through menu items, click through to see images and other more detailed information.
            No more zooming in and out with your phone and dealing with PDF menus.
          </Typography>
        </li>
      </ul>
    </Container>
  );
};

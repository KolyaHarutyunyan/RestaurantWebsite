import { Typography, Image } from "@eachbase/components";
import { Container } from "./style";
export const DigitalMenu = () => {
  return (
      <Container className="container-mini">

          <div className='mobile'>
              <div className="content">
                  <Typography weight="bold" className="g-title" color="text" size="3rem">
                      How Your Menu Will Look
                  </Typography>
              </div>
              <Image src={'/assets/images/mobileViewHomepage.png'} className="main" />
              <div className="content">
                  <Typography className='content-text' color="text">
                      Once the menu is scanned via QR code on the table your menu will appear.
                      The menu will be fully interactive and clickable containing titles,
                      ingredients and images of the menu items. Once the menu item is clicked,
                      the customer is directed to the Menu Item Detail page where they can see more
                      details about the item such as ingredients. MenuMango is simple and intuitive to use.
                  </Typography>
                  <Image src="./assets/homePage/qr_code_scanning.svg" />
              </div>
              <Image className="qr" src={"/assets/images/QR_Code.png"} />
          </div>



          <div className='desktop'>
      <Image src={'/assets/images/mobileViewHomepage.png'} className="main" />
      <div className="content">
        <Typography weight="bold" className="g-title" color="text" size="3rem">
            How Your Menu Will Look
        </Typography>

        <Typography className='content-text' color="text">
            Once the menu is scanned via QR code on the table your menu will appear.
            The menu will be fully interactive and clickable containing titles,
            ingredients and images of the menu items. Once the menu item is clicked,
            the customer is directed to the Menu Item Detail page where they can see more
            details about the item such as ingredients. MenuMango is simple and intuitive to use.
        </Typography>
        <Image src="./assets/homePage/qr_code_scanning.svg" />
      </div>
      <Image className="qr" src={"/assets/images/QR_Code.png"} />
          </div>
    </Container>
  );
};

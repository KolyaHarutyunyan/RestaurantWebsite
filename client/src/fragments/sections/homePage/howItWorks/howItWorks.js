import { Container } from "./style";
import { Image, Typography } from "@eachbase/components";
import { MdDone } from "react-icons/md";
export const HowItWorks = () => {
  return (
    <Container className="container-mini">
      <Typography className="g-title" size="3rem" color="text" weight="bold">
        How it works
      </Typography>
      <section>
        <Image className='title-image' src='assets/images/howIts.png'/>
        <ul className='ul'>
          <li>

            <span className="num line">1</span>
            <Typography color="text" weight="bold" className="title">
              Create an Account
            </Typography>
            <Typography className='description' color="text">
              Account creation takes less than a minute and allows you to create, store and manage your menus in the future.
            </Typography>
          </li>
          <li>
            <span className="num line">2</span>
            <Typography color="text" weight="bold" className="title">
              Create Menus
            </Typography>
            <Typography  className='description'   color="text">
              Add and create different menus all of which are accessed through one QR code placed on your table.
              Simply activate a menu of choice.
            </Typography>
          </li>
          <li>
            <span className="num">3</span>
            <Typography color="text" weight="bold" className="title">
              Add Menu Item Information
            </Typography>
            <Typography className='description' color="text">
              Add some basic information about your menu items such as titles and
              ingredients to provide transparency to your customers.
            </Typography>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <div className="checkmark">
              <MdDone />
            </div>
            <div className="content">
              <Typography  className="title" color="text" weight="bold">
                Create Food and Drink Categories
              </Typography>
              <Typography className='description' color="text">
                Creating/editing categories is quick, simple and easy within the administrator dashboard.
                You can first add all of the categories then fill in menu items or add categories as you go.
              </Typography>
            </div>
          </li>
          <li>
            <div className="checkmark">
              <MdDone />
            </div>
            <div className="content">
              <Typography  className="title" color="text" weight="bold">
                Add Menu Items
              </Typography>
              <Typography className='description' color="text">
                Add menu items with pictures, a title and some basic information about the dish. The items will be
                saved and can later be accessed and transferred to other menus so won’t need to redo any work.
              </Typography>
            </div>
          </li>
        </ul>
        <Image  className='title-image' src='assets/images/howItWorks2.png'/>
      </section>
    </Container>
  );
};

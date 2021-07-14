import { Container } from "./style";
import { Image, Typography, Button } from "@eachbase/components";
export const MenusAndMenuItems = () => {
  return (
    <Container>
      <div className="container">
        <Typography className="g-title" color="text" size="3rem">
          Recent Restaurants Using Our Menus
        </Typography>
        <Typography color="text" className="descr">
          The list of companies using our new dynamic and interactive menus is growing.
          Our clients are not just customers, but people who we are building a long term
          relationship with. We are constantly listening and improving.
        </Typography>
      </div>
      <ul className="cards">
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
        <li>
          <Image />
          <Typography weight="bold" color="text">
            Happy Hour Menu
          </Typography>
        </li>
      </ul>
      <Button>Add Free Menu</Button>
    </Container>
  );
};

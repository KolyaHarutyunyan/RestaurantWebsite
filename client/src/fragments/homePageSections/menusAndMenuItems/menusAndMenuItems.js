import { Container } from "./style";
import { Image, Typography, Button } from "@eachbase/components";
import { STYLED } from "@eachbase/theme";
export const MenusAndMenuItems = () => {
  return (
    <Container>
      <STYLED.Container>
        <Typography className="g-title" color="text" size="3rem">
          Categorize Menus & Menu Items
        </Typography>
        <Typography color="text" className="descr">
          Lorem Ipsum is simply dummy text` of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
        </Typography>
      </STYLED.Container>
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
      <Button.Common>Add Menu FREE</Button.Common>
    </Container>
  );
};

import { Container } from "./style";
import { Typography, Button, Image } from "@eachbase/components";
export const Hero = () => {
  return (
    <Container>
      <div className="content">
        <Typography color="text" size="3rem" weight="bold" className="title-a">
          FROM PAPER TO
        </Typography>
        <Typography weight="bold" size="3rem" className="title-b">
          DIGITAL MENU
        </Typography>
        <Typography color="text" size="1.250rem" className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
        <Button>Add Menu FREE</Button>
      </div>
      <div className="image-wrapper">
        <Image />
      </div>
    </Container>
  );
};

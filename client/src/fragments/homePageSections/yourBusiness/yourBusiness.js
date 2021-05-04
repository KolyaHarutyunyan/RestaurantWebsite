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
          <Image />
          <Typography color="text" className="title" weight="bold">
            Create an Account
          </Typography>
          <Typography color="text" className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </li>
        <li>
          <Image />
          <Typography color="text" className="title" weight="bold">
            Add Menus
          </Typography>
          <Typography color="text" className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </Typography>
        </li>
        <li>
          <Image />
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

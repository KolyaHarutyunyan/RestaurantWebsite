import { Typography, Image } from "@eachbase/components";
import { Container } from "./style";
export const DigitalMenu = () => {
  return (
    <Container>
      <Image className="main" />
      <div className="content">
        <Typography weight="bold" className="g-title" color="text" size="3rem">
          How will your Digital Menu Look Like?
        </Typography>
        <Typography color="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s.
        </Typography>
      </div>
      <Image className="qr" src={"/assets/images/QR_Code.png"} />
    </Container>
  );
};

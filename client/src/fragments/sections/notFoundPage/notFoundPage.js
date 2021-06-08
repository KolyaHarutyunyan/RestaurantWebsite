import { Container } from "./style";
import { Typography, Button, Image } from "@eachbase/components";
import { useRouter } from "next/dist/client/router";

export const NotFoundPageSections = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="wrapper">
        <Typography className="title" color="text" weight="bold" size="3.5rem">
          Oops!
        </Typography>
        <Image src="/assets/images/error_404.svg" />
        <Typography
          className="description"
          color="text"
          weight="bold"
          size="1.100rem"
        >
          Sorry, the page you requested was not found.
        </Typography>
        <Button onClick={() => router.push("/")}>Go Back Home</Button>
      </div>
    </Container>
  );
};

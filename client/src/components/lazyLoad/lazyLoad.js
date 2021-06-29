import { Container } from "./style";
import { Typography } from "@eachbase/components";
import { Icons } from "@eachbase/theme";

export const LazyLoad = ({ loaded = false, children }) => {
  return (
    <Container loaded={loaded}>
      {children}
      <div className={`loader ${loaded ? "hide" : "show"}`}>
        <Icons.LogoInvert />
        <Typography>Menuz</Typography>
      </div>
    </Container>
  );
};

import { Container } from "./style";
import { Typography } from "@eachbase/components";
import { Icons } from "@eachbase/theme";

export const LazyLoad = ({ loaded = false, children, smallIcon }) => {
  return (
    <Container loaded={loaded}>
      {children}
      <div className={`loader ${loaded ? "hide" : "show"}`}>
          {smallIcon === true?
              <Icons.SmallIcon/>
              :
              <Icons.LogoIcon/>
          }
        {/*<Typography>Menuz</Typography>*/}
      </div>
    </Container>
  );
};

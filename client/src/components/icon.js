import { memo, useContext } from "react";
import { IconContext } from "@eachbase/context";

export const Icon = memo((props) => {
  const { SVGIcon } = useContext(IconContext);
  return <SVGIcon {...props} />;
});

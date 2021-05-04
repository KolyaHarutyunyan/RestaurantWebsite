import { Fragment } from "react";
import { Colors } from "./colors";
import { Font } from "./font";
import { GlobalStyle } from "./globalStyles";
export { breakPoints } from "./breakPoints";
export { animation } from "./animation";
export const Theme = () => {
  return (
    <Fragment>
      <Colors />
      <Font />
      <GlobalStyle />
    </Fragment>
  );
};

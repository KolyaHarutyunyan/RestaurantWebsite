import { IconContext } from "..";
import { SVGS } from "./imports";

export const IconProvider = ({ children }) => {
  const SVGIcon = (props) => {
    let SVG = SVGS[props.name];
    return SVG ? (
      <SVG
        {...props}
        className={`icon icon-${props.name} ${props.className}`}
        fill={props.color}
      />
    ) : (
      <>a</>
    );
  };
  return (
    <IconContext.Provider value={{ SVGIcon }}>{children}</IconContext.Provider>
  );
};

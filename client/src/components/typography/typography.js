import PropTypes from "prop-types";
import { Paragraph } from "./style";

export const Typography = ({
  size = "1rem",
  color = "primary",
  weight = "normal",
  children,
  ...rest
}) => (
  <Paragraph size={size} color={color} weight={weight} {...rest}>
    {children}
  </Paragraph>
);

Typography.propTypes = {
  color: PropTypes.oneOf(["primary", "text", "invert", "active"]),
  weight: PropTypes.oneOf(["bold", "normal"]),
  size: PropTypes.string,
};

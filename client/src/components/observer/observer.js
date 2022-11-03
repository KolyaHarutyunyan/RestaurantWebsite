import styled from "styled-components";
import { InView } from "react-intersection-observer";

const StyledInView = styled(InView).attrs((props) => ({
  className: props.className,
}))`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50% -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: inherit;
`;

const Observer = ({ className, children, onChange, ...restProps }) => {
  return (
    <StyledInView
      {...restProps}
      className={`observer ${className}`}
      onChange={onChange}
    >
      {children}
    </StyledInView>
  );
};

export default Observer;

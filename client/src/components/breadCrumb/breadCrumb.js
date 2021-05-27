import { BeadCrumbContainer, BeadCrumbItemContainer } from "./style";

/* should be integrated */

export const BreadCrumb = ({ children, ...rest }) => {
  return <BeadCrumbContainer {...rest}>{children}</BeadCrumbContainer>;
};

export const BreadCrumbItem = ({ children, last = false, ...rest }) => {
  return (
    <BeadCrumbItemContainer last={last} {...rest}>
      {children}
    </BeadCrumbItemContainer>
  );
};

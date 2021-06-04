import { BeadCrumbContainer, BeadCrumbItemContainer } from "./style";

export const BreadCrumb = ({ children, ...rest }) => (
  <BeadCrumbContainer {...rest}>{children}</BeadCrumbContainer>
);

export const BreadCrumbItem = ({ children, last = false, ...rest }) => (
  <BeadCrumbItemContainer last={last} {...rest}>
    {children}
  </BeadCrumbItemContainer>
);

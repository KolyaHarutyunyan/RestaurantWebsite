import { Button } from "@material-ui/core";
import { useBtnStyles } from "./style";

export const Btn = ({ onClick, type, className, children }) => {
  let classes = useBtnStyles();
  return (
    <Button onClick={onClick} className={classes[type] + " " + className}>
      {children}
    </Button>
  );
};

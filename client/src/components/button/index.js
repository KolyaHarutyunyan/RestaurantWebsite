import { Btn } from "./button";
import { ActionBtn } from "./actionBtn";
import { Common } from "./common";
export const Button = {
  Accept: (props) => <Btn type={"accept"} {...props} />,
  Cancel: (props) => <Btn type={"cancel"} {...props} />,
  Action: (props) => <ActionBtn {...props} />,
  Common,
};

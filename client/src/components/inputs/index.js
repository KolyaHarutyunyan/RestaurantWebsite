import { TextInput } from './textInput'
import { TextArea } from "./TextArea";
import { VerifyInput } from "./verifyInput";
export * as Styled from "./style"
export const Input = {
  email: props => <TextInput type={"email"} {...props}/>,
  pass: props => <TextInput type={"password"} {...props}/>,
  text: props => <TextInput type={"text"} {...props}/>,
  area: props => <TextArea   {...props}/>,
  verify: props => <VerifyInput   {...props}/>,
}
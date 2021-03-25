import { TextInput } from './types/textInput'
import { TextArea } from "./types/TextArea";
import { VerifyInput } from "./types/verifyInput";
export * as Styled from "./style"
export const Input = {
  email: props => <TextInput type={"email"} {...props}/>,
  pass: props => <TextInput type={"password"} {...props}/>,
  text: props => <TextInput type={"text"} {...props}/>,
  area: props => <TextArea   {...props}/>,
  verify: props => <VerifyInput   {...props}/>,
}
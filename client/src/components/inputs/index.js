import { TextArea, TextInput } from "./core";
import { ImagePiker } from "./core/imagePiker";

export { Change, Check, CheckForm, InputTypes } from "./core/formFunctions";
export * as Styled from "./core/style";

export const Input = {
  Email: (props) => <TextInput {...props} />,
  Password: (props) => <TextInput {...props} />,
  FullName: (props) => <TextInput {...props} />,
  Name: (props) => <TextInput {...props} />,
  Prise: (props) => <TextInput inType={"price"} {...props} />,
  Description: (props) => <TextArea {...props} />,
  Options: (props) => <TextInput {...props} />,
  WebSite: (props) => <TextInput {...props} />,
  Phone: (props) => <TextInput {...props} />,
  Location: (props) => <TextInput {...props} />,
  Image: (props) => <ImagePiker {...props} />,
};

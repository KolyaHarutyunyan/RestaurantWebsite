import { TextArea, TextInput } from "./core";
import { CONSTANTS } from "@eachbase/constants";
import { ImagePiker } from "./core/imagePiker";

export { Change, Check, CheckForm, InputTypes } from "./core/formFunctions";
export * as Styled from "./core/style";

export const Input = {
  Email: (props) => <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Email} {...props} />,
  Password: (props) => (
    <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Password} {...props} />
  ),
  FullName: (props) => (
    <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Profile} {...props} />
  ),
  Name: (props) => <TextInput {...props} />,
  Prise: (props) => <TextInput inType={"price"} {...props} />,
  Description: (props) => <TextArea {...props} />,
  Options: (props) => <TextInput {...props} />,
  WebSite: (props) => (
    <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Website} {...props} />
  ),
  Phone: (props) => <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Call} {...props} />,
  Location: (props) => <TextInput icon={CONSTANTS.CONSTANTS.SVGNames.Map} {...props} />,
  Image: (props) => <ImagePiker {...props} />,
};

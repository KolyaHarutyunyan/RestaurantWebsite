import { FileInput, TextArea, TextInput } from './core'
import { SVGNames } from "@eachbase/constants"
import { ImagePiker } from "./core/imagePiker";

export * as Styled from "./core/style"
// export const Input = props => <TextInput   {...props}/>
export const Input = {
	Email: props => <TextInput icon={SVGNames.Email} {...props} />,
	Password: props => <TextInput icon={SVGNames.Password} {...props} />,
	FullName: props => <TextInput icon={SVGNames.Profile} {...props} />,
	Name: props => <TextInput {...props}   />,
	Prise: props => <TextInput inType={"price"} {...props} />,
	Description: props => <TextArea {...props}/>,
	Options: props => <TextInput {...props} />,
	WebSite: props => <TextInput icon={SVGNames.Website} {...props} />,
	Phone: props => <TextInput icon={SVGNames.Call} {...props}/>,
	Location: props => <TextInput icon={SVGNames.Map} {...props} />,
	Image: props => <ImagePiker {...props} />,
}

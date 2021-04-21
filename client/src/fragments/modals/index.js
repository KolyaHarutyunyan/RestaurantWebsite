import { RemoveItem } from "./removeItem";
import { RemoveAccount } from "./removeAccount";

export const Modal = {
	RemoveMenu: props => <RemoveItem type={"menu"} {...props}/>,
	RemoveMenuItem: props => <RemoveItem type={"menuItem"} {...props}/>,
	RemoveCategory: props => <RemoveItem type={"category"} {...props}/>,
	RemoveAccount: props => <RemoveAccount {...props}/>,
}
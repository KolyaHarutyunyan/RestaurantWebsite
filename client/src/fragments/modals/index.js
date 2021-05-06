import { RemoveItem } from "./removeItem";
import { RemoveAccount } from "./removeAccount";
import { EditMenuItem } from "./editMenuItem";
import { EditMenu } from "./editMenu";
import { EditRestaurantExtraDetails } from "./editRestaurantExtraDetails";
import { EditRestaurantInfo } from "./editRestaurantInfo";

export const Modal = {
  RemoveMenu: (props) => <RemoveItem type={"menu"} {...props} />,
  RemoveMenuItem: (props) => <RemoveItem type={"menuItem"} {...props} />,
  RemoveCategory: (props) => <RemoveItem type={"category"} {...props} />,
  RemoveAccount: (props) => <RemoveAccount {...props} />,
  EditMenuItem: (props) => <EditMenuItem {...props} />,
  EditMenu: (props) => <EditMenu {...props} />,
  EditRestaurantExtraDetails: (props) => (
    <EditRestaurantExtraDetails {...props} />
  ),
  EditRestaurantInfo: (props) => <EditRestaurantInfo {...props} />,
};

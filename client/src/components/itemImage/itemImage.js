import {Styled} from "./style"
import { SVGNames } from "../../constants";
import { Icon } from "../icon";
export const ItemImage = ({ url, type,className }) => {
	console.log("item data is : ",{ url, type,className })
	let svg = {
		foods:SVGNames.Map,
		drinks:SVGNames.Call,
		restaurant:SVGNames.Build,
		menuItem:SVGNames.Menu,
	}[type]
	return (
		<Styled.Block className={className} bgi={url}>
			<div className="bgItemImage"/>
			{
				!url && <Icon name={svg}/>
			}
		</Styled.Block>
	)
}
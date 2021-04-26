import {Styled} from "./style"
import { SVGNames } from "../../constants";
import { Icon } from "../icon";
export const ItemImage = ({ url, type,className,onRemove,onClick=()=>{} }) => {
	let svg = {
		foods:SVGNames.Food,
		drinks:SVGNames.Drink,
		restaurant:SVGNames.Build,
		menu:SVGNames.Menu,
	}[type]

	return (
		<Styled.Block className={className} bgi={url} onClick={()=>{if(!url)onClick()}}>
			<div className="bgItemImage"/>
			{
				!url && <Icon name={svg} className="itemIcon"/>
			}
			{
				url && onRemove && <button onClick={onRemove} className="removeItemImage"> <Icon name={SVGNames.Close}/> </button>
			}
			
		</Styled.Block>
	)
}
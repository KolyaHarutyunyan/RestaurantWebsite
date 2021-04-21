import {Styled} from "./style"
import { useSelector } from "react-redux";
import {Button} from "@eachbase/components"
import { useContext } from "react";
import { ModalContext } from "../../contexts";

export const MenuItem = ({itemId,parentName}) =>{
	let item  = useSelector(state=>state.menuItems.find(menuItem=>menuItem.id === itemId) || false)
	let { openModal } = useContext(ModalContext)
	if(!item)return null
	return(
		<Styled.Block>
			<Styled.BlockImage bgi={item.imageUrl}><div className="bg"/></Styled.BlockImage>
		 	<Styled.BlockInfo>
				<div className="title">
					<span className="name">{item.title}</span>
					<span className="price">${item.price}</span>
				</div>
				<div className="description">
					{item.description}
				</div>
				<div className="options">
					<div className="option">{item.options || ""}</div>
					<div className="actions">
						<Button.Action  type={"edit"}/>
						<Button.Action className={"remove"} type={"remove"} onClick={()=>openModal.removeMenuItem({id:item.id,parentName })}/>
					</div>
					
				</div>
			</Styled.BlockInfo>
			
		</Styled.Block>
	)
}
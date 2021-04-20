import { useSelector } from "react-redux"
import { Styled } from "./style"
import { MenuItem } from "@eachbase/components"


export const ItemsList = ({ activeCategoryId }) => {

	let itemIds = activeCategoryId
		?useSelector(state=>state.categories.find(category=>category.id === activeCategoryId).items || [])
		:[]
	
	console.log(itemIds)
	return (
		<Styled.ItemsList className="items" hasScroll={itemIds.length>4}>
			<div className="content">
				{
					itemIds?
						itemIds.map(item => <MenuItem key={item} itemId={item}/>)
						:<Styled.NotItem></Styled.NotItem>
				}
			</div>
		
		</Styled.ItemsList>
	)
}
import { useSelector } from "react-redux"
import { Styled } from "./style"
import { MenuItem } from "../../../components"


export const CategoryList = ({ activeCategory }) => {
	
	let itemIds = useSelector(state=>state.categories.find(category=>category.id === activeCategory).items || [])
	
	
	
	return (
		<Styled.CategoryList className="items" hasScroll={itemIds.length>4}>
			<div className="content">
				{
					itemIds.map(item => <MenuItem itemId={item}/>)
				}
			</div>
		
		</Styled.CategoryList>
	)
}
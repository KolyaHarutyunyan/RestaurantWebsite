import { useSelector } from "react-redux"
import { Styled } from "."
import { Icon, Button } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"


export const CategoriesItem = ({ categoryId, activeCategory, changeTo }) => {
	let category = useSelector(state => state.categories.find(category => category.id === categoryId) || false)
 
	if (!category) return null
	console.log(categoryId === activeCategory,activeCategory)
	return (
		<Styled.CategoryItem active={categoryId === activeCategory} onClick={()=>changeTo(categoryId)}>
			<div className="name">
				{category.title}
				<Button.Action onClick={() => console.log(`remove category - ${category.title}`)} type={"remove"}/>
			</div>
			<Icon name={SVGNames.LeftArrow} />
		</Styled.CategoryItem>
	)
}
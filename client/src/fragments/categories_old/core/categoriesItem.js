import { useSelector } from "react-redux"
import { ActionBtn, CategoryList, Styled } from "."
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { CategoryTitle } from "./categoryTitle";

export const CategoriesItem = ({ categoryId,activeCategory,onClick }) => {
	let category = useSelector(state=>state.categories.find(category=>category.id === categoryId) || false)
	console.log(category)
	if( !category)return null
	return (
		<Styled.CategoryItem active={categoryId === activeCategory} onClick={onClick}>
			<div className="title">
				<div className="name">
					{category.title}
					<ActionBtn type={"remove"}/>
				</div>
				<Icon  name={SVGNames.LeftArrow}/>
			</div>
			{
				categoryId === activeCategory &&
					<div className="forMobile">
						<CategoryTitle activeCategory={activeCategory}/>
						<CategoryList activeCategory={activeCategory} />

					</div>
			}
		</Styled.CategoryItem>
	)
}
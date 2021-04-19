import { CategoriesList, Styled, CategoriesTitle, CategoryList } from "./core";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CategoryTitle } from "./core/categoryTitle";

export const Categories = ( ) => {
	let categories = useSelector(state=>state.menu.categories)
	let [ activeType, setActiveType ] = useState("foods")
	let [activeCategory,setActiveCategory] = useState(categories[activeType][0])
	const changeTypeTo = val => {
		setActiveType(val)
		setActiveCategory(categories[val][0])
	}
	const changeCategoryTo = val =>setActiveCategory(val)
	
	console.log(activeType,activeCategory)
	return (
		
		<Styled.Content>
			<Styled.LeftBlock>
				<CategoriesTitle activeType={activeType} changeTo={changeTypeTo}/>
				<CategoriesList  activeType={activeType} activeCategory={activeCategory} changeTo={changeCategoryTo}/>
			</Styled.LeftBlock>
			<Styled.RightBlock>
				<CategoryTitle  activeType={activeType}  activeCategory={activeCategory}/>
				<CategoryList activeCategory={activeCategory} />
			</Styled.RightBlock>
			
		</Styled.Content>

)
}
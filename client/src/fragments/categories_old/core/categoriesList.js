import { useSelector } from "react-redux";
import { CategoriesItem, Styled } from "."

export const CategoriesList = ({ activeType,activeCategory,changeTo }) => {
	let categories = useSelector(state =>state.menu.categories[activeType] || [])
	return (
		<Styled.CategoriesList>
			{
				categories.map(categoryId => <CategoriesItem key={categoryId} activeCategory={activeCategory} categoryId={categoryId} onClick={()=>changeTo(categoryId)}/>)
			}
		</Styled.CategoriesList>
	)
}
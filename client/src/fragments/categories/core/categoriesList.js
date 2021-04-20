import { useSelector } from "react-redux";
import { CategoriesItem, Styled } from "."

export const CategoriesList = ({ activeType, activeCategoryId, changeTo }) => {
	let categories = useSelector(state => state.menu.categories[activeType] || [])
	return (
		<Styled.CategoriesList>
			{
				 categories.map(categoryId => <CategoriesItem key={categoryId} activeCategory={activeCategoryId}
																												 categoryId={categoryId} changeTo={changeTo}/>)
					 
			}
		</Styled.CategoriesList>
	)
}
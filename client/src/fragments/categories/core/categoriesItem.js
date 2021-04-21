import { useSelector } from "react-redux"
import { Styled } from "."
import { Icon, Button } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useContext } from "react";
import { ModalContext } from "../../../contexts";


export const CategoriesItem = ({ categoryId, activeCategory, changeTo }) => {
	let category = useSelector(state => state.categories.find(category => category.id === categoryId) || false)
	let { openModal } = useContext(ModalContext)
	if (!category) return null
	console.log(categoryId === activeCategory,activeCategory)
	return (
		<Styled.CategoryItem active={categoryId === activeCategory} onClick={()=>changeTo(categoryId)}>
			<div className="name">
				{category.title}
				<Button.Action onClick={()=>openModal.removeCategory({id:categoryId,parentName:"menuName"})} type={"remove"}/>
			</div>
			<Icon name={SVGNames.LeftArrow} />
		</Styled.CategoryItem>
	)
}
import { SelectMenuItem, Styled } from ".";
import { Button, Icon } from "../../../components";
import { SVGNames } from "../../../constants";
import { useSelector } from "react-redux";

export const CategoryTitle = ({ activeCategory,activeType }) => {
	let title = useSelector(state=>state.categories.find(category=>category.id === activeCategory).title || false)
	
	if(!title)return null
	
	return (
		<Styled.CategoryTitle>
			<div className="name">
				{title}
				<Button.Accept className={"preview"}>Preview</Button.Accept>
			</div>
			<div className="newItem">
				<button className="add">
					<span className="iconBlock">
					<Icon name={SVGNames.AddIcon}/>
					
					</span>
					Add New Menu Item
				</button>
				<div className="or">OR</div>
				<SelectMenuItem activeType={activeType} activeCategory={activeCategory} />
			</div>
		
		</Styled.CategoryTitle>
	)
}
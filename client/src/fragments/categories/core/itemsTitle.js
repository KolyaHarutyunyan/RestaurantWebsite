import { SelectMenuItem, Styled } from "."
import { Button, Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useSelector } from "react-redux"

export const ItemsTitle = ({ activeCategory, activeType, close }) => {
	
	let title = activeCategory
		? useSelector(state => state.categories.find(category => category.id === activeCategory).title || false)
		: false
	
	if (!title) return null
	
	return (
		<Styled.ItemsTitle>
			<div className="name">
				<p>
					<Styled.BackBtn onClick={close}>
						<Icon name={SVGNames.LeftArrow}/>
					</Styled.BackBtn>
					{title}
				</p>
				
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
		
		</Styled.ItemsTitle>
	)
}
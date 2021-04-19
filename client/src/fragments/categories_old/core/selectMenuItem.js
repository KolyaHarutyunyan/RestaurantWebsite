import { Styled } from "."
import { Button, Icon } from "@eachbase/components"
import { useRef, useState } from "react"
import { SVGNames } from "@eachbase/constants"
import { useSelector } from "react-redux";

export const SelectMenuItem = ({   activeType,activeCategory }) => {
	let [ open, setOpen ] = useState(false)
	let input = useRef()
	let openCategories = () => {
		if (open) setOpen(false)
		else {
			input.current.focus()
			setOpen(true)
		}
	}
	let [newCategoryName,setNewCategoryName] = useState("")
	let  changeNewCategoryName = setNewCategoryName
	let menuId = useSelector(state => state.menu.id)
	let categories = useSelector(state => state.categories.filter(category => category.type === activeType && category.parents.indexOf(menuId) === -1) || [])
	console.log(categories)
	
	return (
		<Styled.SelectType>
			<Styled.SelectBlock open={open}>
				<div className="title">
					<input
						ref={input}
						type={"text"}
						value={newCategoryName}
						placeholder={"Create Category"}
						onChange={e => changeNewCategoryName(e.target.value)}
					/>
					<p>Select/Create Category</p>
					
					<Icon name={SVGNames.DropdownArrow} onClick={openCategories}/>
				</div>
				<div className="bg" onClick={openCategories}/>
				<div className="items">
					{categories.map(category => <div onClick={() => console.log(category.title)} key={category.id}
																					 className='item'>{category.title}</div>)}
				</div>
			
			</Styled.SelectBlock>
			<Button.Accept className={"add"}>Add</Button.Accept>
		</Styled.SelectType>
	)
}
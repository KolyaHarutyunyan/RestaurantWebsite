import { Styled } from "."
import { Button, Icon } from "@eachbase/components"
import { useEffect, useRef, useState } from "react"
import { SVGNames } from "@eachbase/constants"
import { useSelector } from "react-redux"

export const SelectCategory = ({ activeType }) => {
	let [ open, setOpen ] = useState(false)
	
	let input = useRef()
	
	let toggleCategories = () => {
		if (open) setOpen(false)
		else {
			input.current.focus()
			setOpen(true)
		}
	}
	
	let [ newCategoryName, setNewCategoryName ] = useState("")
	
	let changeNewCategoryName = value=> {
		setNewCategoryName(value)
		filterItems(value)
	}
	
	let menuId = useSelector(state => state.menu.id)
	
	let categories = useSelector(state => state.categories.filter(category => category.type === activeType && category.parents.indexOf(menuId) === -1) || [])
	
	let [filteredItems,setFilteredItems] = useState([])
	
	const filterItems = filter=>setFilteredItems(categories.filter(category=>category.title.indexOf(filter)!==-1 || !filter))
	
	useEffect(()=>filterItems(),[])
 
	
	const selectCategory = value =>{
		setNewCategoryName(value)
		toggleCategories()
	}
	
	return (
 
			<Styled.SelectType className="newCategory">
				<Styled.SelectBlock open={open} className="addCategory">
					<div className="title">
						<input
							ref={input}
							type={"text"}
							value={newCategoryName}
							placeholder={"Search/Create Category"}
							onChange={e => changeNewCategoryName(e.target.value)}
						/>
						<p>{newCategoryName || "Select / Create Category"}</p>
						
						<Icon name={SVGNames.DropdownArrow} onClick={  toggleCategories}/>
					</div>
					<div className="bg" onClick={toggleCategories}/>
					<div className="items">
						{filteredItems.length
							?filteredItems.map(category => <div onClick={() => selectCategory(category.title)} key={category.id}
																						 className='item'>{category.title}</div>)
							:<div className='item'>No Options</div>
						}
					</div>
				</Styled.SelectBlock>
				<Button.Accept className={"add"}>Add</Button.Accept>
			</Styled.SelectType>
 
	)
}
import { Styled } from "."
import { Button, Icon } from "@eachbase/components"
import { useEffect, useRef, useState } from "react"
import { SVGNames } from "@eachbase/constants"
import { useSelector } from "react-redux";

export const SelectMenuItem = ({ activeType, activeCategoryId }) => {
	let [ open, setOpen ] = useState(false)
	let input = useRef()
	let openItems = () => {
		if (open) {
			//add selected items on category
			setOpen(false)
			
		} else {
			input.current.focus()
			setOpen(true)
		}
	}
	let [ newItemName, setNewItemName ] = useState("")
	let changeNewItemName = value => {
		setNewItemName(value)
		filterItems(value)
	}
	
	let items = useSelector(state => state.menuItems.filter(item => item.type === activeType && item.parents.indexOf(activeCategoryId) === -1))
	console.log(items)
	let [ filteredItems, setFilteredItems ] = useState([])
	let [ selectedItems, setSelectedItems ] = useState([])
	
	const filterItems = filter => setFilteredItems(items.filter(item => item.title.indexOf(filter) !== -1 || !filter))
	useEffect(() => filterItems(), [])
	
	// const selectItem =(item.)
	
	console.log(selectedItems)
	
	let select = itemId => {
		let newSelectedItems = selectedItems
		
		newSelectedItems.indexOf(itemId) === -1
			? newSelectedItems.push(itemId)
			: newSelectedItems.splice(newSelectedItems.indexOf(itemId), 1)
		
	 
		setSelectedItems(newSelectedItems		)
	}
	
	return (
		<Styled.SelectType className={"addMenuItems"}>
			<Styled.SelectBlock open={open}>
				<div className="title">
					<input
						ref={input}
						type={"text"}
						value={newItemName}
						placeholder={"search"}
						onChange={e => changeNewItemName(e.target.value)}
					/>
					<p>Choose from the List</p>
					
					<Icon name={SVGNames.DropdownArrow} onClick={openItems}/>
				</div>
				<div className="bg" onClick={openItems}/>
				<div className="items">
					{filteredItems.length
						? filteredItems.map(item =>
							<div onClick={() => select(item.id)} key={item.id}
									 className={`item whitCheckBox ${selectedItems.indexOf(item.id) !==-1 ? "selected":"" }`}>
								<div className="checkBox">
									<Icon name={SVGNames.Checkmark}/>
								</div>
								<div className="title">{item.title}</div>
							</div>
						)
						: <div className='item'>No Options</div>
					}
				</div>
			
			</Styled.SelectBlock>
		</Styled.SelectType>
	)
}
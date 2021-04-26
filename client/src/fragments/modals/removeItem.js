import { Styled } from "./core"
import { useSelector } from "react-redux"
import { Button, BaseModal } from "@eachbase/components"
import { useState } from "react";

let description = {
	menuItem: "Deleting a menu item will permanently remove it from the relevant category.",
	category: "Deleting a category will permanently remove it from the relevant menu.",
	menu: "Deleting a menu will permanently remove it from the system.",
}

export const RemoveItem = ({ status, close, type, id, parentName }) => {
	// console.log(status, close, type, id)
	let item = useSelector(state => {
		switch (type) {
			case  "menuItem":
				return state.menuItems.find(item => item.id === id)
			case "category":
				return state.categories.find(item => item.id === id)
			case "menu":
				return state.menu
			default:
				return false
		}
	})
	
	// console.log(item)
	let hasActions = item && item.parents && item.parents.length > 1 || false
	let [ activeType, setActiveType ] = useState("one")
	if (!item) return null
	
	let Option = ({ children, status, onClick }) => (
		<div className={`option`} onClick={onClick}>
			<div className="round">
				{status && <div className="center"/>}
			</div>
			<p>{children}</p>
		</div>
	)
	console.log(activeType)
	return (
		<BaseModal close={close} status={status} type={"remove"}>
			<Styled.Remove hasActions={hasActions}>
				<Styled.Title>Delete {item.title} {type === "menu" ? "Menu" : ""}?</Styled.Title>
				
				{
					hasActions
						? <Styled.Options>
							<Option status={activeType === "one"} onClick={() => setActiveType("one")}>
								Delete from <span>{parentName}</span> {type === "category" ? "menu" : "category"}
							</Option>
							<Option status={activeType === "all"} onClick={() => setActiveType("all")}>
								Delete from all {type === "category" ? "menus" : "categories"}
							</Option>
						</Styled.Options>
						: <Styled.Description>{description[type]}</Styled.Description>
				}
				<Styled.Actions brd={8}>
					<Button.Accept className="delete action" onClick={() => console.log("Delete")}>Delete</Button.Accept>
					<Button.Cancel className="cancel action" onClick={close}>Cancel</Button.Cancel>
				
				</Styled.Actions>
			</Styled.Remove>
		</BaseModal>
	)
}
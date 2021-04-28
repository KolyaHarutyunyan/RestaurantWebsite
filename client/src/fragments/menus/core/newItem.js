import { Styled } from "."
import { Icon, Switch } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useContext, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router";
import { ModalContext } from "../../../contexts";

export const Item = ({ item, newItem }) => {
	let {openModal} = useContext(ModalContext)
	let [ openOptions, setOpenOptions ] = useState(false)
	let toggleChecked = () => setOpenOptions(!openOptions)
	let router = useRouter()
 
	let openMenu = ()=>{
		if(!newItem)router.push(`/menu/${ item.tag}`,`/menu/${ item.tag}`,{})
		else {
			openModal.editMenu({title:"Add Menu Information"})
		}
	}
	
	return (
		
		<Styled.Item >
			<Styled.ItemImage onClick={openMenu} bgi={!newItem && item.backgroundImage}>
				{newItem && <Icon name={SVGNames.Menu}/>}
			</Styled.ItemImage>
			<Styled.ItemContent>
				{
					newItem
						?
							<button className="addNew" onClick={openMenu}>
								<Icon name={SVGNames.AddIcon}/>
								Add Menu
							</button>
					 
						: <>
							<Styled.ContentLine>
								<div className="title">{item.title}</div>
								<Switch status={item.status} onClick={toggleChecked}/>
							</Styled.ContentLine>
							<Styled.ContentLine mt={6}>
								<p className="description">{item.description}</p>
								
								<button className={"dropBtn"} onClick={toggleChecked} 	>
									<Icon name={SVGNames.More}/>
								</button>
								
								
								<Styled.DropMenu status={openOptions} >
									<div className="bg" onClick={toggleChecked}/>
									<Styled.DropAction onClick={()=> {
										openModal.editMenu({ title: "Edit Menu Information" })
										toggleChecked()
									}}>Edit</Styled.DropAction>
									<Styled.DropAction>Duplicate</Styled.DropAction>
									<Styled.DropAction remove onClick={()=> {
										openModal.removeMenu({ id: item.id })
										toggleChecked()
									}}>Delete</Styled.DropAction>
								
								</Styled.DropMenu>
							</Styled.ContentLine>
						
						</>
				}
			</Styled.ItemContent>
		
		</Styled.Item>
	)
}
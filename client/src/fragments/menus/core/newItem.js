import { Styled } from "."
import { Icon, Switch } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router";

export const Item = ({ item, newItem }) => {
	let [ openOptions, setOpenOptions ] = useState(false)
	let toggleChecked = () => setOpenOptions(!openOptions)
	let router = useRouter()
	let url = `/menu/${newItem?"newItem":item.tag}`
	console.log(item)
	let openMenu = ()=>router.push(url,url,{})
	
	return (
		
		<Styled.Item >
			<Styled.ItemImage onClick={openMenu} bgi={!newItem && item.backgroundImage}>
				{newItem && <Icon name={SVGNames.Menu}/>}
			</Styled.ItemImage>
			<Styled.ItemContent>
				{
					newItem
						? <Link href={"/menu/newMenu"}>
							<a className="addNew">
								<Icon name={SVGNames.AddIcon}/>
								Add Menu
							</a>
						</Link>
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
									<Styled.DropAction>Edit</Styled.DropAction>
									<Styled.DropAction>Duplicate</Styled.DropAction>
									<Styled.DropAction remove>Delete</Styled.DropAction>
								
								</Styled.DropMenu>
							</Styled.ContentLine>
						
						</>
				}
			</Styled.ItemContent>
		
		</Styled.Item>
	)
}
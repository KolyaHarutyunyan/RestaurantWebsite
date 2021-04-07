import { Styled } from "."
import { Icon, Switch } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useState } from "react"
import { Tooltip } from "@material-ui/core";

export const Item = ({ item, newItem }) => {
	let [ openOptions, setOpenOptions ] = useState(false)
	let toggleChecked = () => setOpenOptions(!openOptions)
	console.log(item)
	
	
	return (
		<Styled.Item>
			<Styled.ItemImage bgi={!newItem && item.backgroundImage}>
				{newItem && <Icon name={SVGNames.Menu}/>}
			</Styled.ItemImage>
			<Styled.ItemContent>
				{
					newItem
						? <div className="addNew">
							<Icon name={SVGNames.AddIcon}/>
							Add Menu
						</div>
						: <>
							<Styled.ContentLine>
								<div className="title">{item.title}</div>
								<Switch status={item.status} onClick={toggleChecked}/>
							</Styled.ContentLine>
							<Styled.ContentLine mt={6}>
								<p className="description">{item.description}</p>
								
								<button onClick={toggleChecked}>
									<Icon name={SVGNames.More}/>
								</button>
								
								
								<Styled.DropMenu status={openOptions}/>
							</Styled.ContentLine>
						
						</>
				}
			</Styled.ItemContent>
		
		</Styled.Item>
	)
}
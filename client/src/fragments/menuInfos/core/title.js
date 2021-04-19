import { Styled } from "./style"
import Link from "next/link"
import { Icon, PageTitle, Switch,Button } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"

export const Title = ({title,status,changeStatus})=>{
	return (
		<>
			<Styled.Navigator>
				<Link href={"/restaurant"}>
					<a>restaurant</a>
				</Link>
				<Icon name={SVGNames.Forward}/>
				Menu
			</Styled.Navigator>
			<Styled.Title status={status}>
				<PageTitle>Menu</PageTitle>
				<div className="ctrl">
					<Button.Action type={"remove"} className={"action remove"} onClick={()=>console.log("remove menu")} text={"Delete Menu"}/>
				 
					<div className="action status">
						<Switch onClick={changeStatus} status={status}/>
						<p className="text">
							{status ? "Deactivate" : "Activate"}
						</p>
					</div>
				
				</div>
			</Styled.Title>
		</>
	)
}
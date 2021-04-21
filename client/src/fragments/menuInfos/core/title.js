import { Styled } from "./style"
import Link from "next/link"
import { Icon, PageTitle, Switch,Button } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { useContext } from "react";
import { ModalContext } from "../../../contexts";

export const Title = ({title,id,status,changeStatus})=>{
	let {openModal} = useContext(ModalContext)
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
					<Button.Action type={"remove"} className={"action remove"} onClick={()=>openModal.removeMenu({id})} text={"Delete Menu"}/>
				 
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
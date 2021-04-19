import { Styled, Title } from "./core"
import {   Button} from "@eachbase/components"


export const MenuInfos = ({ title, id,status, backgroundImage,description }) => {
	
	let toggle = () => console.log("change Status")
	return (
		<>
			<Title title={title} status={status} id={id} changeStatus={toggle}/>
			<Styled.Block>
				<Button.Accept className="edit">Edit</Button.Accept>
				<div className="title">{title}</div>
				<Styled.BlockAvatar bgi={backgroundImage}/>
				<Styled.BlockDescription>
					<div className="title">{title}</div>
					{description}
				</Styled.BlockDescription>
			</Styled.Block>
		</>
	)
}
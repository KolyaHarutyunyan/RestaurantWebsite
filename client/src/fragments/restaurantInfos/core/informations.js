import { Styled } from "./style";
import { BlockTitle } from "./blockTitle";
import { useSelector } from "react-redux";

export const Information = () => {
	let {name,description,logo} = useSelector(state => state.restaurant || [])
	
	return (
		<Styled.Block>
			<BlockTitle hasLogo={true} logo={logo} title={name} editAction={()=>console.log("edit information")}/>
			<Styled.Description>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</Styled.Description>
		</Styled.Block>
	)
}
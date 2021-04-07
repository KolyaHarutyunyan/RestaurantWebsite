import { Styled } from "./style";

export const PageTitle = ({children}) =>{
	return(
		<Styled.Title className={"page-title"}>{children}</Styled.Title>
	)
}
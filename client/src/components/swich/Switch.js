
import { Styled } from "./style"
export const Switch = ({status,onClick}) =>{
 
	return(
		<Styled.Block status={status} onClick={onClick}>
			<Styled.Track/>
		</Styled.Block>
	)
}
import { Button } from "@material-ui/core"
import { Styled } from "."
import { Icon } from "../../../components";
import { SVGNames } from "../../../constants";

export const ActionBtn = ({ onClick,type }) => {
	return (
		 
			<Styled.ActionBtn remove={type==="remove"} onClick={onClick}>
				 
					<Icon name={ type==="remove"?SVGNames.Delete:SVGNames.Edit}/>
			 <div className="title">
				 {
					 type==="remove"?
						 "Delete":"Edit"
				 }
			 </div>
			
			 
		</Styled.ActionBtn>
	)
	
}
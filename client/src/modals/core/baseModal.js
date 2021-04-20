import { IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { Styled } from "./style"


export const BaseModal = ({ children, status, close, title, hasActions }) => {
	
	return (
		
		<Styled.Dialog open={status || false}>
			<div className="bg" onClick={close}/>
			<div className="container">
				<IconButton
					aria-label="close"
					className="close"
					onClick={close}>
					<CloseIcon/>
				</IconButton>
				<Styled.Title hasActions={hasActions}>{title}</Styled.Title>
				{status && children}
			</div>
		
		</Styled.Dialog>
	
	)
}
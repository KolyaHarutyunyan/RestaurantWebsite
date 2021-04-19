import { Box, Dialog, IconButton } from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { useBaseModalStyles,Styled } from "./style";


export const BaseModal = ({ children, status, close, title }) => {
	let classes = useBaseModalStyles()
	return (
		
		<Dialog
			className={classes.dialog}
			open={status || false}
			onClose={close}
		>
			
			
			<IconButton
				aria-label="close"
				className={classes.closeIcon}
				onClick={close}>
				<CloseIcon/>
			</IconButton>
			
			<Box className={classes.baseBox}>
				<Styled.Title>{title}</Styled.Title>
				{children}
			</Box>
		</Dialog>
	
	)
}
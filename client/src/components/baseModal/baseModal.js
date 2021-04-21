import { IconButton } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import { Styled } from "./style"
import { useEffect, useState } from "react";


export const BaseModal = ({ children, status, close,type }) => {
	
	let [ modalStatus, setModalStatus ] = useState(false)
	
	useEffect(()=>{
		if(status)setModalStatus(status)
		else setTimeout(()=>setModalStatus(status),1000)
	},[status])
	console.log("modalStatus is :",modalStatus)
	return (
		<>
			{
				modalStatus
					? <Styled.Dialog open={status || false} type={type}>
						<div className="bg" onClick={close}/>
						<div className="container">
							<IconButton
								aria-label="close"
								className="close"
								onClick={close}>
								<CloseIcon/>
							</IconButton>
							
							{ children}
						</div>
					
					</Styled.Dialog>
					: <></>
			}
		</>
	
	
	)
}
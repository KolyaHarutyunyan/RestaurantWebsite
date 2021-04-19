import { BaseModal } from "./baseModal";

export const RemoveMenuItem = ({status,close})=>{
	console.log	 (status,close)
	return(
		<BaseModal title={"remove Item"} close={close} status={status} >
			<h1>stacvec</h1>
		</BaseModal>
	)
}
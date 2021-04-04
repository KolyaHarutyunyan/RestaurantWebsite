import {   EditPassword, EditUserData, Styled } from "./core"
import { useDispatch } from "react-redux"
import { profileActions } from "@eachbase/store"
import { useContext } from "react"
import { ModalContext } from "@eachbase/context"
import { PageTitle } from "@eachbase/components"


export const Profile = () =>{
 	let dispatch = useDispatch()
	let {openModal} = useContext(ModalContext)

	let handlerRemove = ()=>{
 		openModal.alert({submit:password=>dispatch(profileActions.remove({password}))})
	}

	return(
		 <Styled.Content>
				<PageTitle>Account Settings</PageTitle>

			 <EditUserData/>
			 <EditPassword/>

			 <Styled.RemoveBtn onClick={handlerRemove}>
				 Delete my Account
			 </Styled.RemoveBtn>
		 </Styled.Content>
	)
}
import {Profile} from "@eachbase/fragments"
import { useDispatch } from "react-redux";
import { actions } from "../store";

export const ProfilePage = () =>{
	// const dispatch = useDispatch();
	//
	// dispatch(actions.auth.check.isAuth({}))
	return(
		<Profile/>
	)
}
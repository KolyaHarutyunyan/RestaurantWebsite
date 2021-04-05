import {  Styled, Title, useAuthStyles } from "..";
import { SVGNames } from "@eachbase/constants";
// import { change, check } from "@eachbase/utils";
import { useState } from "react";


export const ResetPass = ({open}) => {
	let classes = useAuthStyles()
	let [userData, setUserData] = useState({
		pass1: {value: "", error: ""},
		pass2: {value: "", error: ""}
	})
	let formData = {
		inputs: [
			{
				key: 0,
				type: "password",
				icon: SVGNames.Password,
				...userData.pass1,
				// onChange: value => change.pass(value, setUserData),
				// onBlur: () => check.pass(setUserData),
				placeholder: "new password",
			},
			{
				key: 1,
				type: "password",
				icon: SVGNames.Password,
				...userData.pass2,
				// onChange: value => change.pass(value, setUserData),
				// onBlur: () => check.pass(setUserData),
				placeholder: "conform password",
			},


		],
		submit: {
			event: event => {
				event.preventDefault()
				console.log("submit")
				open.done({type:"password"})
			},
			text: "Get Code",
			className: classes.submit
		}
	}

	return (
		<>
			<Title beforeText={"Reset Password"}/>
			<Styled.Description>Enter your new password. Use at least 8 characters, 1 upper case and 1 digit.</Styled.Description>
			{/*<Form data={formData}/>*/}
		</>
	)
}
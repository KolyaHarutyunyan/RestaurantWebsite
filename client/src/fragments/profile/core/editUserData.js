import { Styled } from "."
import { useState } from "react";
import { Input } from "../../../components";
import { SVGNames } from "../../../constants";
import { change, check } from "../../../utils";

export const EditUserData = () =>{
	let [readOnly, setReadOnly] = useState(true)

	let [userData, setUserData] = useState({
		email: {value: "", error: ""},
		fullName: {value: "", error: ""},
	})

	let handlerClick = () => {
		// if ( readOnly ) {
		setReadOnly(!readOnly)
		// }
	}
	return(
		<Styled.Block>
			<Styled.SaveBtn onClick={handlerClick}> {readOnly ? "edit" : "save"}</Styled.SaveBtn>
			<Styled.BlockForm open>
				<Input.text
					icon={SVGNames.User}
					{...userData.fullName}
					onChange={value => change.text("fullName",value, setUserData)}
					onBlur={() => check.text("fullName",setUserData)}
					placeholder="full name"
					readOnly={readOnly}
					blockTitle="Full Name"
					brd={8}
					mt={16}
					mtt={8}
				/>
				<Input.email
					icon={SVGNames.Password}
					{...userData.email}
					onChange={value => change.email(value, setUserData)}
					onBlur={() => check.email(setUserData)}
					placeholder="email"
					blockTitle="Email"
					readOnly={readOnly}
					brd={8}
					mt={16}
					mtt={24}
				/>
			</Styled.BlockForm>
		</Styled.Block>
	)
}
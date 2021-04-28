import { useState } from "react"
import { InputBlock, Styled } from "."
import { Change, Check } from "@eachbase/utils"

const EF = () => {
}

export const TextArea = ({
														type, isDisabled, error, setState, dataType, icon,inType,
														important, brd, value, onChange = false,
														onFocus = EF, onBlur = EF, placeholder, className
													}) => {
	
 
	let [ isVisible, setIsVisible ] = useState(false)
	let [ isFocused, setIsFocused ] = useState(false)
	
	const focus = () => {
		setIsFocused(true)
		onFocus()
	}
	const change = e => {
		if (onChange) onChange(e.target.value)
		else Change(setState, dataType, e.target.value)
	}
	
	const blur = () => {
		setIsFocused(false)
		Check(setState, dataType)
		onBlur()
	}
	
	return (
		<InputBlock
			icon={icon} brd={brd}
			className={className + (isDisabled ? " disabled" : "") + (isFocused ? " focused" : "") + (error ? " error" : "")}
			type={type} eye={isVisible}
			toggleEye={() => setIsVisible(!isVisible)}
			error={error}
			important={important && !value}
			inType={inType}
		>
	 
			<Styled.Description
				type={ "text"}
				value={value}
				onChange={e => change(e)}
				onFocus={focus}
				onBlur={blur}
				placeholder={important && "  " + placeholder || ""}
			/>
		
		</InputBlock>
	)
}


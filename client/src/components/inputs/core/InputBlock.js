import { Styled } from "."
import { Icon } from "@eachbase/components"
import { SVGNames } from "@eachbase/constants"
import { colors } from "@eachbase/theme"

export const InputBlock = ({ children, brd, className = "",important, inType,icon, type, eye, error, toggleEye }) => {
	return (
		<>
			<Styled.Block className={className} brd={brd} hasIcon={!!icon} inType={inType}>
				<div className={`content ${important && "important"}`}>
					{icon && <Icon className="leftIcon" name={icon} color={error ? colors.primary : ""}/>}
					
					{children}
					
					{type === "password"
						? <Icon onClick={toggleEye} name={eye ? SVGNames.EyeOff : SVGNames.EyeOn}/>
						: null
					}
				</div>
				{
					error
						? <p className="error">{error}</p>
						: null
				}
			</Styled.Block>
		
		</>
	)
	
}
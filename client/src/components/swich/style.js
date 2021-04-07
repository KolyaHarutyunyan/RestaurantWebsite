import styled from "styled-components"
import { animation, colors } from "../../theme";

export const Styled = {
	Block:styled.div`
		width: 36px;
		height: 18px;
		padding: 2px;
		display: flex;
		border-radius: 18px;
		justify-content: flex-${props=>props.status?"end":"start"};
		background-color:  ${props=>props.status?colors.action:"#D2D2D2"};
		align-items: center;
    cursor: pointer;
		${animation(["all"])};
	`,
	Track:styled.div`
		width: 14px;
    ${animation(["all"])};

    height: 14px;
		border-radius: 50%;
		background-color: ${colors.white};
	`
	
}
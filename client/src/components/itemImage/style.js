import styled from "styled-components"
import { colors, media, theme } from "@eachbase/theme"

let imgW = 118
let imgWM = 89

export const Styled = {
	Block:styled.div`
	 height: ${imgW}px;
    width: ${imgW}px;
    border-radius: 8px;
    background-color: ${colors.shadow};
    overflow: hidden;
    background-image: url('${props => { console.log(props);return props.bgi || ""}}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .bgItemImage {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: ${colors.shadow};
    }

    ${media.forMobile(`
			height: ${imgWM}px;
			width: ${imgWM}px;
		`)};
	`
}
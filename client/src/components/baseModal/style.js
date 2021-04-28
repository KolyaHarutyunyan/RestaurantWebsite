import styled from "styled-components"
import { animation, colors, media } from "@eachbase/theme"

export const Styled = {
	Dialog: styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    padding: 20px 16px;
    z-index: 100000;
    left: 0;
    top: 0;
    visibility: ${props => props.open ? "visible" : "hidden"};
    opacity: ${props => props.open ? 1 : 0};
    ${animation([ "visibility", "opacity" ])};
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      width: fit-content;
      height: fit-content;
      max-height: 100%;
      border-radius: 8px;
      ${media.forMobile`
				max-width: 343px;
				width: 100%;
			`};

      z-index: 100100;
      position: relative;
      background-color: ${colors.white};

      ${props => props.type === "remove"
              ? `
              	padding:40px;
							 	${media.downToLargeDesktop`padding:32px`};
								${media.forMobile`padding:16px`};
							`
              : `
              	padding:64px 48px;
							 	${media.downToLargeDesktop`padding:48px 32px`};
								${media.forMobile`padding:32px 16px`};
              `
      };
    }

    .bg {
      width: 100%;
      height: 100%;
      z-index: 100010;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0008;
    }

    .close {
      position: absolute;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      background-color: #2B273C1A;
    }
	
	`,
}

import { makeStyles } from "@material-ui/core";
import styled from "styled-components";
import { colors, media } from "@eachbase/theme";

export const useBaseModalStyles = makeStyles((theme) => ({
	dialog: {
		'& .MuiDialog-paper': {
			width: '100%',
			
			margin: "20px",
			borderRadius: "8px",
			
			maxWidth: '548px !important',
			padding: "64px 8px 64px 48px",
			overflow: "hidden",
			[theme.breakpoints.down('md')]: {
				maxWidth: '464px !important',
				padding: "64px 8px 64px 32px"
			},
			[theme.breakpoints.down('xs')]: {
				maxWidth: '464px !important',
				padding: "32px 16px"
			},
			
			
			'& .MuiDialogContent-root': {
				padding: 0,
				display: 'flex',
			},
			'& .MuiDialogActions-root': {
				position: 'absolute',
				bottom: 0,
				right: 0,
			},
			'& .MuiBox-root': {
				margin: 0
			}
		},
	},
	closeIcon: {
		width: '30px',
		height: '30px',
		position: 'absolute',
		right: '16px',
		top: '16px',
		zIndex: 10000,
		padding: 0,
		backgroundColor: '#2B273C1A',
		color: theme.palette.text.primary,
		'&:hover': {
			backgroundColor: '#2B273C1A',
		},
		'& .MuiSvgIcon-root': {
			width: '16px',
			height: '16px',
		}
	},
	baseBox: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		alignItems: "center",
		transition: "all 1s",
		opacity: 1,
		[theme.breakpoints.down('md')]: {
			maxWidth: '464px !important',
			paddingRight: "16px",
		},
		[theme.breakpoints.down('xs')]: {
			paddingRight: "0",
		},
		paddingRight: "32px",
		height: "100%",
		overflow: "hidden auto",
		"&::-webkit-scrollbar": {
			width: "8px",
			borderRadius: "5px",
		},
		"&::-webkit-scrollbar-track": {
			backgroundColor: "#9993",
			borderRadius: "5px",
			
		},
		"&::-webkit-scrollbar-thumb": {
			width: "10px",
			borderRadius: "10px",
			background: "linear-gradient(#9993,#4444,#9993)",
			transition: "all .5s",
			cursor: "pointer",
		},
		"&::-webkit-scrollbar-thumb:hover": {
			background: "#4444"
		},
		"&:hover::-webkit-scrollbar-thumb": {
			background: "#4444"
		}
		// padding: "32px 16px",
	},
	
}));

export const Styled = {
	Title:styled.div`
		width: 100%;
		text-align: center;
		color: ${colors.text};
    font: normal normal bold 24px/35px Poppins;
		${media.forMobile`font: normal normal bold 18px/27px Poppins;`}
	`
}
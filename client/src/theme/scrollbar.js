export const ScrollBar = `
  &::-webkit-scrollbar {
		width: 8px;
		border-radius: 5px;
		right:8px
	}

	&::-webkit-scrollbar-track {
		background-color: #9993;
		border-radius: 5px;
		background: #2B273C1A 0% 0% no-repeat padding-box;
	}

	&::-webkit-scrollbar-thumb {
		width: 10px;
		border-radius: 10px;
		background: linear-gradient(#2B273C96, #2B273C, #2B273C96);
		// background: #2B273C96 0% 0% no-repeat padding-box;
		transition: all .5s;
		cursor: pointer;
	}

	&::-webkit-scrollbar-thumb:hover, &:hover::-webkit-scrollbar-thumb {
		background: #2B273C 0% 0% no-repeat padding-box;
	}
`
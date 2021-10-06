import { withStyles } from "@material-ui/core";

export const GlobalCss = withStyles({
  // @global is handled by jss-plugin-global.
  "@global": {
    "*": {
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    body: {
      height:'auto !important',
      background:
        "transparent linear-gradient(179deg, #FFFFFF 0%, #F3F3F3DF 53%, #E3E3E3B3 100%) 0% 0% no-repeat padding-box;",
      "-ms-overflow-style": "none",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    "#__next": {
      position: "absolute",
      // height: "100vh",
      // top: 0,
      width: "100%",
    },
    "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button":
      {
        "-webkit-appearance": "none",
        margin: 0,
      },
    "li": {
      listStyleType: "circle",
      outline:'none',
    },
    "input:-internal-autofill-selected": {
      background: "none !important",
      color: "none !important",
    },
    ".justify-content-evenly": {
      justifyContent: "space-evenly !important",
    },
    a: {
      textDecoration: "none !important",
      listStyleType: "none",
    },
    ".logo": {
      fontSize: "20px",
    },
    p: {
      margin: 0,
    },
    button: {
      cursor: "pointer",
      outline: "none",
      background: "unset",
      border: "none",
    },
    ".cursorPointer": {
      cursor: "pointer",
    },
  },
})(() => null);

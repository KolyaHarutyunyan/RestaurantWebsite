import { withStyles } from '@material-ui/core';

export const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        "*":{
          boxSizing: "border-box",
          margin:0,
          padding:0
        },
       "input[type='number']::-webkit-inner-spin-button, input[type='number']::-webkit-outer-spin-button": {
            '-webkit-appearance': 'none',
            margin: 0,
        },
        'a, li': {
            listStyleType: 'none',
        },
        'input:-internal-autofill-selected': {
            background: 'none !important',
            color: 'none !important',
        },
        '.justify-content-evenly': {
            justifyContent: 'space-evenly !important',
        },
        a: {
            textDecoration: 'none !important',
        },
        '.logo': {
            fontSize: '20px',

        },
        p:{
            margin:0
        },
        'button':{
          cursor: 'pointer',
          outline:"none",
          background:"unset",
          border:"none",

        },
        '.cursorPointer': {
            cursor: 'pointer',
        },
    },
})(() => null);



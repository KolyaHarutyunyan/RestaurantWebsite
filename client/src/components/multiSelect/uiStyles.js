import {makeStyles} from "@material-ui/core/styles";

export const inputsStyle = makeStyles(() => ({

    inputTextFieldAutoHeight: {
        width:'100%',
        minWidth:'300px',
        background:'white',
        borderRadius:'8px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2B273C80',
            borderRadius:'8px',
        },

        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
            borderColor: '#2B273C80',
        },

        '& .MuiFormLabel-root.Mui-focused':{
            color:'#2B273C80',
        },
    },

}))
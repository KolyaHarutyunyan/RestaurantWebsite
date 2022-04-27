import {makeStyles} from "@material-ui/core/styles";

export const inputsStyle = makeStyles(() => ({

    inputTextFieldAutoHeight: {
        width: '100%',
        minWidth: '300px',
        background: 'white',
        borderRadius: '8px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2B273C80',
            borderRadius: '8px',
        },

        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2B273C80',
        },

        '& .MuiFormLabel-root.Mui-focused': {
            color: '#2B273C80',
        },
        '& .MuiChip-deleteIcon': {
            display: 'none'
        }
    },

    addItemIcon: {
        marginRight: '16px',
        padding: '2px',
        borderRadius: '50%',
        background: 'rgba(255, 69, 58, 0.1)',
        color: '#FF453A',
        fontSize: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

}))
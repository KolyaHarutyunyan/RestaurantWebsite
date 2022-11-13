import { colors } from "@eachbase/theme";
import { makeStyles } from "@material-ui/core/styles";

export const inputsStyle = makeStyles(() => ({


  noChip:{
    '& .MuiAutocomplete-tag':{
      display:'none'
    },
  },

  // inputTextFieldAutoHeight:{
  //   '& .MuiOutlinedInput-notchedOutline':{
  //     // borderColor:Colors.ThemeBorder
  //   },
  //   '& .MuiOutlinedInput-root':{
  //
  //   },
  //   '& .MuiInputLabel-outlined':{
  //
  //   },
  //   '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
  //     transform: 'translate(14px, -2px) scale(0.75)'
  //   }
  // },

  inputTextFieldAutoHeight: {
    width: "100%",
    minWidth: "300px",
    backgroundColor: colors.white,
    borderRadius: "8px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${colors.lightBlack}`,
      borderRadius: "8px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: `1px solid ${colors.lightBlack}`,
    },
    "& .MuiFormLabel-root, & .MuiFormLabel-root.Mui-focused": {
      color: colors.lightBlack,
    },
    "& .MuiChip-deleteIcon": {
      display: "none",
    },
    "& .MuiInputBase-root": {
      height: "48px",
      padding: "0px 16px",
    },
    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 16px) scale(1)",
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)'
    }
  },

  addItemIcon: {
    marginRight: "16px",
    padding: "2px",
    borderRadius: "50%",
    background: "rgba(255, 69, 58, 0.1)",
    color: colors.primary,
    fontSize: "20px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

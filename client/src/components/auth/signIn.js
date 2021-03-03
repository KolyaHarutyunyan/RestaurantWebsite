import { memo } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
import FormBuilder from "../formBuilder";
import data from '../../cms/signInUp.json';
import useGlobalStyles from "../../theme/globalStyles";
import theme from "../../theme";
import { Input } from "./inputs";


export const SignIn = memo(
  ({pos,changePosition}) => {

    const classes = useStyles();


    const button = {
      background: `transparent linear-gradient(90deg, #5690FF 0%, ${theme.palette.secondary.main} 100%) 0% 0% no-repeat padding-box`,
      borderRadius: '24px',
    };
    const globalClasses = useGlobalStyles({ button: button });

    const formStyles = {
      form: classes.form,
      fieldsGroup: classes.fieldsGroup,
      inputs: {
        textfield: {
          root: classes.fieldStyles,
          inputWrapper: classes.inputWrapper,
        },
        button: {
          root: globalClasses.button,
          inputWrapper: '',
        },
      },
    };
    const handleSubmit = async (values, setError, setMessage, setIsLoading) => {
      // const req = authDispatch(signUpUserAction(values));
      // setActionType(req.type);
      console.log("submit")
    };
    return (
      // <Box className={pos?classes.authBox.disabled:classes.authBox.active}>
      <Box className={classes.authBox+(pos!==0?" disabled":" active")}>

          {/*<Input iconName={}*/}
        <FormBuilder data={data.signIn.form} styles={formStyles} handleSubmit={handleSubmit} />

      </Box>
    )
  }
)
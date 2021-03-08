import { memo } from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";
// import FormBuilder from "../../../components/old_formBuilder";
import { FormBuilder } from "./detals/formBuilder";
import data from '../../../cms/signInUp.json';
import useGlobalStyles from "../../../theme/globalStyles";
import theme from "../../../theme";
import { Input } from "../../../components/auth/inputs";
import { SVGNames } from "../../constants/svgNames";
import { Title } from "./detals/title";
import { ForgotButton, TitleDivider } from "./detals/formBuilder/styles/style";
import { Socials } from "./detals/socials";
import { LineButton } from "./detals/lineButton";


export const SignIn = memo(
  ( {pos, changePosition} ) => {
  let {authBox} = useStyles()

    let formData = [

      {
        key:0,
        type:"email",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },placeholder:"Email",
      },
      {
        key:1,
        type:"password",
        icon:SVGNames.email,
        value:"",
        onChange :() => {},
        onFocus : () => {
        }, onBlur : () => {
        },
        placeholder:"Email",
        error:"dfsdfsdfsd",
      }

    ]
    let socialData={
      title:"Sign in with your social media account",
      icons:[
        {
          "link": "/auth/google",
          "icon": "googleColor"
        },
        {
          "link": "/auth/facebook",
          "icon": "facebook"
        },
        {
          "link": "/auth/twitter",
          "icon": "twitter"
        },
      ]
    }


    const submit = event =>{
      event.preventDefault()
      console.log("submit")
    }
    const gotoSignUp = ()=>{
      console.log("go to sign up")
      changePosition(2)
    }
    const gotoForgot = ()=>{
      changePosition(1)

    }
    return (
      <Box className={ authBox + ( pos !== 0 ? " disabled" : " active" )}>

        <Title afterText="Welcome to Menuz" logo/>

        <FormBuilder data={formData} onSubmit={submit} submitText={"Continue"}/>

        <ForgotButton  onClick={gotoForgot}>Forgot Password?</ForgotButton>
        <TitleDivider>
          <p>OR</p>
        </TitleDivider>
        <Socials data={socialData}/>

        <LineButton afterText={"Doesn't have an account?"} activeText={"SIGN UP"} action={gotoSignUp}/>

       </Box>
    )
  }
)





















// export const SignIn = memo(
//   ( {pos, changePosition} ) => {
//
//     const classes = useStyles();
//
//
//     const button = {
//       background: `transparent linear-gradient(90deg, #5690FF 0%, ${theme.palette.secondary.main} 100%) 0% 0% no-repeat padding-box`,
//       borderRadius: '24px',
//     };
//     const globalClasses = useGlobalStyles({button: button});
//
//     const formStyles = {
//       form: classes.form,
//       fieldsGroup: classes.fieldsGroup,
//       inputs: {
//         textfield: {
//           root: classes.fieldStyles,
//           inputWrapper: classes.inputWrapper,
//         },
//         button: {
//           root: globalClasses.button,
//           inputWrapper: '',
//         },
//       },
//     };
//     const handleSubmit = async ( values, setError, setMessage, setIsLoading ) => {
//       // const req = authDispatch(signUpUserAction(values));
//       // setActionType(req.type);
//       console.log("submit")
//     };
//     const handleClick = async ( values, setError, setMessage, setIsLoading ) => {
//       // const req = authDispatch(signUpUserAction(values));
//       // setActionType(req.type);
//       console.log("forgot")
//     };
//
//     return (
//       // <Box className={pos?classes.authBox.disabled:classes.authBox.active}>
//       <Box className={classes.authBox + ( pos !== 0 ? " disabled" : " active" )}>
//
//         {/*<Input iconName={}*/}
//         <FormBuilder data={data.signIn.form} styles={formStyles} handleClick={handleClick} handleSubmit={handleSubmit}/>
//
//       </Box>
//     )
//   }
// )
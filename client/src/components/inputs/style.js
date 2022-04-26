import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const inputsStyle = makeStyles(() => ({
  Icon: {
    flex: "0 0 22px",
    display: "flex",
    alignItems: "center",
    color: "#2B273C",
    justifyContent: "center",
  },
  SignInInput: {
    '& .MuiFormControl-root': {
      width: '395px',
      marginTop: '20px',
    },

    '& .MuiFormLabel-root.Mui-error': {
      color: '#F07379',
      fontWeight: 'bold',
    },

    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      border: '2px solid red',
    },
  },
  inputTextField: {
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      // borderColor: Colors.ThemeBlack,
    },
    '& .MuiOutlinedInput-root': {
      height: '48px',
      // color: Colors.ThemeLightGray,
    },
    '& .MuiInputLabel-outlined': {
      marginTop: '-3px',
      // color: Colors.ThemeLightGray,
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      // borderColor: Colors.ThemeBlack,
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: 14,
      color: '#4B5C6880',
    },
  },
  inputTextFieldSmall: {
    width: '100%',
    '& .MuiOutlinedInput-notchedOutline': {
      // borderColor: Colors.ThemeBlack,
    },
    '& .MuiOutlinedInput-root': {
      height: '36px',
      // color: Colors.ThemeLightGray,
    },
    '& .MuiInputLabel-outlined': {
      marginTop: '-3px',
      // color: Colors.ThemeLightGray,
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -2px) scale(0.75)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      // borderColor: Colors.ThemeBlack,
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: 14,
      color: '#4B5C6880',
    },
  },

  Input: {
    flex: "1",
    border: "none",
    outline: 0,
    height: "100%",
  },
  disabledInput: {
    cursor: "no-drop",
  },
  "&::placeholder": {
    fontSize: "16px",
    lineHeight: "22px",
    color: "#545F7EB3",
  },
  SearchAddress: {
    fontFamily: 'Open Sans, sans-serif',
    gap: "10px",
    fontSize: "16px",
    lineHeight: "22px",
    outline: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "48px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #2b273c80",
    borderRadius: "8px",
    padding: "0 18px",
    cursor: "pointer",
    color: "#545F7E",
    '& input':{
      fontFamily: 'Open Sans, sans-serif',
      fontSize: "16px",
      color:'#2B273C'
    }
  },
  SearchAddressDisable: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "16px",
    lineHeight: "22px",
    gap: "14px",
    outline: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "48px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "1px solid #2b273c80",
    borderRadius: "8px",
    padding: "0 18px",
    cursor: "no-drop",
    color: "#545F7E",
    '& input':{
      fontFamily: 'Open Sans, sans-serif',
      fontSize: "16px",
      color:'#2B273C'
    },

  },
  searchAddressDescription: {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 12px #0052E01A",
    borderRadius: "6px",
    position: "absolute",
    zIndex: "9999",
    width: "452px",
    display: "flex",
    flexDirection: "column",
    top: "326px",
    overflow:'auto',
    '@media (max-width: 767px)': {
      top: "280px",
      width: "308px",
}

  },

  searchAddressDescriptionText: {
    paddingTop: "5px",
    fontSize: "16px",
    lineHeight: "30px",
    color: "#545F7E",
    "& :hover": {
      background: "#387DFF1A 0% 0% no-repeat padding-box",
      borderRadius: "6px",
    },
  },
}));

export const InputContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
    height: 48px;
    border-radius: 8px;
    @media (max-width: 767px) {
      height: 42px;
    }
    
    .icon-container {
      padding-left: 16px;
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 0 0 30px;
    }
    .input-container {
      display: flex;
      .controller-eye {
        flex: 0 0 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      flex: 1;
      height: 100%;

      input {
        padding: 0 8px 0 8px;
        margin: 0;
        height: 100%;
        width: 90%;
        border: none;
        outline: 0;
        font-size: 16px;
        font-family: Open Sans, sans-serif;
        @media (max-width: 768px) {
          font-size: 14px;
        }
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 57px;
    font-size: 0.8rem;
    text-align: left;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;

export const TextareaContainer = styled.div`
  & * {
    box-sizing: border-box;
  }
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 100%;
  .main-container {
    padding: 2px;
    display: flex;
    gap: 5px;
    border: 1px solid;
    border-color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
    border-radius: 8px;
    .icon-container {
      display: ${({ icon }) => (icon !== null ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      flex: 0 0 30px;
    }
    .input-container {
      flex: 1;
      textarea {
        font-family: Open Sans, sans-serif;
        padding: 5px 5px 0 5px;
        margin: 0;
        font-size: 16px;
        width: 100%;
        height: 100%;
        resize: none;
        border: none;
        outline: 0;
      }
    }
  }
  .helper-container {
    padding-top: 2px;
    padding-left: 57px;
    font-size: 0.8rem;
    color: ${({ error }) => (error ? "#FF453A" : "#2b273c80")};
  }
`;

export const SelectContainer = styled.select`
  padding: 10px;
  width: 100%;
  border: 1px solid #2b273c80;
  border-radius: 8px;
  outline: 0;
`;

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 3px;
  input {
    transform: scale(1.5);
  }
`;

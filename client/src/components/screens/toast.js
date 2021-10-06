import React, {useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StyledToast} from "./style";
import {Icons} from "@eachbase/theme";

export const Toast = ({ info, text, type }) => {

    const screen =
        <StyledToast>
            { type === 'error' ? <Icons.Error/> : <Icons.Success/>   }
            <p>{text}</p>
        </StyledToast>

    useEffect(() => {
        if (info) {
            toast(screen);
        }
    }, [info]);
    return (
        <div>
            <ToastContainer
                className={type === 'error' ? 'error' : 'success'  }
                position={'bottom-right'}
            />
        </div>
    );
}
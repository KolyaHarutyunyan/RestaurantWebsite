import {CircularProgress} from "@material-ui/core";

export const Loader =({ small, color }) =>{
    return(
        <CircularProgress
            style={{
                color: color ? color : small ? '#007AFF' : '#FF453A',
                width: small ? '15px' : "100px",
                height: small ? '14px' :  "100px",
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        />
    )
}
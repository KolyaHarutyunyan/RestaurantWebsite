import {CircularProgress} from "@material-ui/core";

export const Loader =() =>{
    return(
        <CircularProgress
            style={{
                width: "100px",
                height: "100px",
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        />
    )
}
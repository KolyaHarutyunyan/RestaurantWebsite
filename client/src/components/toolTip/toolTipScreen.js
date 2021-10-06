import {toolTipStyles} from "./styles";

export const ToolTipScreen =({name, desc, sub})=>{
    const classes = toolTipStyles()
    return(
        <div>
            <div className={'tool-tip-wrapper'}>
                <p className={classes.name} > {name} </p>
                <p className={classes.desc} >{ desc }</p>
                <p className={classes.sub}  >{ sub }</p>
            </div>
        </div>
    )
}
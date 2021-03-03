import { makeStyles } from '@material-ui/core/styles';

/* 
    Purpose: 
        checks if the styles object exists before attempting to create the styles with makeStyle
    Args: 
        styles: an object containing the styles
        prop: which attribute of the object to return, should be of type "String"

    return: returns null if styles param is null, false or undefined, or string object for styles 
 */
export const createStyles = (styles, prop) => {
    if (styles) {
        return makeStyles(styles)()[prop];
    }
    return null;
};

export const getStyles = (styles, key) => {
    if (styles) {
        if (styles[key]) {
            return styles[key];
        }
    }
    return null;
};

/* 
  Purpose: to find out whether this component depends on another to be enabled or disabled

  Args: 
    * Object: dependsOn - an object containing the information of input field on which the calling component depends on
    * Object: values - an object that should contain a mapping between the form fields and the values
    
  Returns: 
    * Boolean: - whether the field should be enable(false) or disable(true)
 */
export const isDisabled = (dependsOn, value) => {
    if (dependsOn) {
        // let name = dependsOn.machineName;
        // let value = dependsOn.value;

        return !(value === dependsOn.value);
    }
    return false;
};

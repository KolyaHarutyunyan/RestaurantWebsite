import { useState, useEffect, useCallback } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PageTitle from '../../components/pageTitle/index';
import InputBuilder from './inputs';
import { getStyles } from './util';
import Loader from '../loader';
// import { Link } from 'react-router-dom';
// import BookLoader from '../bookLoader'

/*
	Purpose: 
		Creates a form using a data object that contais the instructions of the form creation.
		Uses an InputBuilder component that is custom built for this component to work. 
		This component takes in the form data by its data object, endpoint to which the form will be 
		submitted to, and the styles object that should be tailored for the particular form being created. 

	Args: 
		* Data: Object - contains the fields for form creation
						1. fields: array - contains objects that describe what type of inputs should be created
						2. btnText: string - the name that appears on the button title
						3. title: string - the title of the form 
						4. description: string - the description of the form
						5. messages: Object - contains failure and success fields that will be displayed after the form is submitted
		* endpoint: string - where this form will be submitted to
		* method: string - the http action by which the form will be submitted

	Invariants: 
		* method types - should be one of [GET, POST, DELETE, UPDATE]
 */

const FormBuilder = ({ data, handleSubmit, styles, filledValues, handleClick, classNames, animatedLabel, multiple, setImg, img }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState(false);

    //destructuring the data object
    const { fieldsGroup } = data;

    //extracts the machineNames from the field objects
    const getMachineNames = (fieldsGroup, defaultValues) => {
        // Get machineNames and default values in fields
        var machineNames = {};
        fieldsGroup.forEach((fields) => {
            fields.fields.forEach((field) => {
                machineNames[field.machineName] = defaultValues ? filledValues[field.machineName] : field.defaultValue;
            });
        });
        return machineNames;
    };

    //reset the fields of the form to their original state
    // const resetForm = () => {
    //   setValues(getMachineNames(fieldsGroup));
    // };

    //Setting the values for input binding
    const [values, setValues] = useState(getMachineNames(fieldsGroup));

    useEffect(() => {
        setValues(getMachineNames(fieldsGroup, filledValues));
        //TODO check depInjection latter
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filledValues]);

    //Handles the change in values for the form inputs
    const handleChange = useCallback((value, field, type, valid) => {
        if (type === 'number') {
            if (valid)
                setValues((_values) => ({
                    ..._values,
                    [field]: value,
                }));
        } else {
            setValues((_values) => ({
                ..._values,
                [field]: value,
            }));
        }
    }, []);

    //form submission
    const onSubmit = (e) => {
        console.log(values, 'values');
        e.preventDefault();
        handleSubmit(values, setError, setMessage, setIsLoading);
    };

    return (
        <form onSubmit={(e) => onSubmit(e)} className={getStyles(styles, 'form')}>
            {fieldsGroup.map((fields, index) => (
                <div key={index} className={`fieldsGroup-${index} ${getStyles(styles, 'fieldsGroup')}`}>
                    {classNames ? (
                        <Box className={classNames.createEventOption}>
                            <Box className={classNames.createEventOptionHeaderCont}>
                                <Box className={classNames.createEventOptionHeader}>
                                    <PageTitle
                                        title={fields.category}
                                        icon={fields.icon}
                                        iconStyle={classNames.iconStyle}
                                        style={classNames.titleStyle}
                                    />
                                </Box>
                                <Box className={classNames.createEventOptionDescCont}>
                                    <Typography className={classNames.createEventOptionDesc}>{fields.desc}</Typography>
                                </Box>
                            </Box>

                            {fields.fields.map((item, i) => (
                                <InputBuilder
                                    key={i}
                                    index={i}
                                    data={item}
                                    value={values[item.machineName]}
                                    dependsOn={item.dependsOn ? values[item.dependsOn] : false}
                                    // values={values}
                                    handleChange={handleChange}
                                    handleClick={handleClick}
                                    styles={getStyles(styles, 'inputs')}
                                    isLoading={isLoading}
                                    error={error}
                                    message={message}
                                    animatedLabel={animatedLabel}
                                    multiple={multiple}
                                    setImg={setImg}
                                    img={img}
                                />
                            ))}
                        </Box>
                    ) : (
                        fields.fields.map((item, i) => (
                            <InputBuilder
                                key={i}
                                index={i}
                                data={item}
                                value={values[item.machineName]}
                                dependsOn={item.dependsOn ? values[item.dependsOn] : false}
                                // values={values}
                                handleChange={handleChange}
                                handleClick={handleClick}
                                styles={getStyles(styles, 'inputs')}
                                isLoading={isLoading}
                                error={error}
                                message={message}
                                animatedLabel={animatedLabel}
                                multiple={multiple}
                                setImg={setImg}
                                img={img}
                            />
                        ))
                    )}
                </div>
            ))}
            {isLoading ? <Loader /> : null}
        </form>
    );
};

export default FormBuilder;

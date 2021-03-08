import { memo } from 'react';
import TextFieldBuilder from './textfieldBuilder';
import TextareaBuilder from './textareaBuilder';
import RadioBuilder from './radioBuilder';
import SelectBuilder from './selectBuilder';
import CheckboxBuilder from './checkboxBuilder';
import DatePickerBuilder from './datePickerBuilder';
import { getStyles } from '../util';
//import PhoneBuilder from './phoneBuilder';
import PasswordBuilder from './passwordBuilder';
import ButtonBuilder from './buttonBuilder';
import MessageBuilder from './messageBuilder';
import CodeVerificationBuilder from './codeVerificationBuilder';
import UploadFileBuilder from './uploadFileBuilder';
import dynamic from 'next/dynamic';
import TimePickerBuilder from './timePickerBuilder';

const WysiwygBuilder = dynamic(() => import('./wysiwygBuilder'), { ssr: false });

/* 
    Purpose: 
            serves as a mapper for the input type to a particular input - it builds an input based on 
            the type or shows a message to the developer if the input type is not supported
    Props: 
            data - an object that contains the props for an input 
                 - structure of this object may vary depending on the type of input (e.g options array for Select not present for textfield)
            handleChange - the change handler function that is called defined in FormBuilder component to which the generated input components will belong to.
            inputStyles - an object that will contain the  
    return: 
            the input element matched or an error message to be displayed
 */
const InputBuilder = ({
    data,
    value,
    dependsOn,
    handleChange,
    handleClick,
    styles,
    index,
    isLoading,
    message,
    error,
    wysiwygValue,
    setImg,
    img,
}) =>
    ({
        // Extracts the styles if they exist for a specific input type
        textfield: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'textfield')?.inputWrapper} `}>
                <TextFieldBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'textfield')}
                    index={index}
                />
            </div>
        ),
        textarea: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'textfield')?.inputWrapper}`}>
                <TextareaBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'textfield')}
                    index={index}
                />
            </div>
        ),
        radio: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'radio')?.inputWrapper}`}>
                <RadioBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'radio')}
                    index={index}
                />
            </div>
        ),
        select: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'select')?.inputWrapper}`}>
                <SelectBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'select')}
                    index={index}
                />
            </div>
        ),
        checkbox: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'checkbox')?.inputWrapper}`}>
                <CheckboxBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'checkbox')}
                    index={index}
                />
            </div>
        ),
        datePicker: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'datepicker')?.inputWrapper}`}>
                <DatePickerBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'datepicker')}
                    index={index}
                />
            </div>
        ),
        timePicker: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'timepicker')?.inputWrapper}`}>
                <TimePickerBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'timepicker')}
                    index={index}
                />
            </div>
        ),
        /* phone: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'phonefield')?.inputWrapper}`}>
                <PhoneBuilder
                    data={data}
                    value={value}
                    dependsOn={dependsOn}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'textfield')}
                    index={index}
                />
            </div>
        ), */
        passwrod: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'textfield')?.inputWrapper}`}>
                <PasswordBuilder
                    data={data}
                    value={value}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'textfield')}
                    index={index}
                />
            </div>
        ),
        codeVerification: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'codeVerification')?.inputWrapper}`}>
                <CodeVerificationBuilder
                    data={data}
                    value={value}
                    handleChange={handleChange}
                    styles={getStyles(styles, 'codeVerification')}
                    index={index}
                />
            </div>
        ),
        button: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'button')?.inputWrapper}`}>
                <ButtonBuilder
                    data={data}
                    handleClick={handleClick}
                    styles={getStyles(styles, 'button')}
                    isLoading={isLoading}
                    index={index}
                />
            </div>
        ),
        message: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'message')}`}>
                <MessageBuilder
                    data={data}
                    styles={getStyles(styles, 'message')}
                    isLoading={isLoading}
                    message={message}
                    error={error}
                    index={index}
                />
            </div>
        ),
        file: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'textfield')?.inputWrapper} `}>
                <UploadFileBuilder
                    data={data}
                    styles={getStyles(styles, 'file')}
                    isLoading={isLoading}
                    message={message}
                    error={error}
                    index={index}
                    setImg={setImg}
                    img={img}
                />
            </div>
        ),
        wysiwyg: (
            <div className={`inputWrapper-${index} ${getStyles(styles, 'wysiwyg')}`}>
                <WysiwygBuilder data={data} value={value} handleChange={handleChange} wysiwygValue={wysiwygValue} />
            </div>
        ),

        DEFAULT: (
            //If we got here that means the input type did not match supported types - give developer a feedback
            <div className="text-center">
                <p className="h2">[Wrong Input Type: input type of {data.type} is not supported]</p>
            </div>
        ),
    }[data.type]);

export default memo(InputBuilder);

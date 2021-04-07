import React, { useEffect, useState, Fragment } from 'react';
import { isDisabled } from '../util';
import { Spring } from 'react-spring/renderprops.cjs';
import Icon from '../../icon';
import { IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const UploadFileBuilder = ({ data, value, dependsOn, styles, index, setImg, img }) => {
    console.log(styles, 'uploaaaaaaaaaad');
    // Destructuring th data object
    const { machineName, label, required, inputType, icon, description2, description, span, fileType, multiple, paraLabel } = data;
    const [active, setActive] = useState(dependsOn ? false : true);
    const ref = React.createRef();

    useEffect(() => {
        if (dependsOn) {
            setActive(!isDisabled(dependsOn, value));
        }
    }, [dependsOn, value]);

    const handleFileChange = async (e) => {
        try {
            const image = await URL.createObjectURL(e.target.files[0]);
            setImg(image);
        } catch (error) {
            console.log(error);
        }
    };

    const handleInput = () => {
        const node = ref.current;
        node.click();
        node.addEventListener('change', handleFileChange);
    };

    return (
        <Fragment>
            {img ? (
                <div className={styles?.imgWrapper} style={{ width: '100%', height: '100%', margin: '32px', position: 'relative' }}>
                    <img src={img} width="100%" height="100%" alt="" style={{ borderRadius: '24px' }} />
                    <IconButton
                        aria-label="close"
                        style={{
                            width: '30px',
                            height: '30px',
                            position: 'absolute',
                            right: '14px',
                            top: '14px',
                            backgroundColor: '#F5FAFE',
                            color: '#387DFF',
                            '&:hover': {
                                backgroundColor: '#F5FAFE',
                            },
                        }}
                        onClick={() => setImg(null)}>
                        <CloseIcon />
                    </IconButton>
                </div>
            ) : (
                <Spring
                    from={dependsOn ? { height: 0, opacity: 0 } : { height: 'auto', opacity: 1 }}
                    to={dependsOn ? { height: active ? 'auto' : 0, opacity: active ? 1 : 0 } : {}}>
                    {(props) => (
                        <div style={props} className={(styles?.contWrapper, 'content-wrapper')}>
                            {icon ? (
                                <div className="icon-wrapper">
                                    <Icon name={icon} />
                                </div>
                            ) : null}
                            {description ? (
                                <div className="description-wrapper" onClick={handleInput}>
                                    <Typography>{description}</Typography>
                                    <Typography component="span">{span}</Typography>
                                    <Typography>{description2}</Typography>
                                </div>
                            ) : null}
                            {paraLabel ? (
                                <div className="label-wrapper" onClick={handleInput}>
                                    <Typography>{paraLabel}</Typography>
                                </div>
                            ) : null}

                            <input
                                ref={ref}
                                style={{
                                    display: 'none',
                                }}
                                accept={`${fileType}/*`}
                                multiple={multiple}
                                className={styles?.root}
                                id={`input-${machineName}-${index}`}
                                name={value}
                                type={inputType}
                                required={required}
                                disabled={isDisabled(dependsOn, value)}
                                label={label}
                                value={value}
                                margin="normal"
                            />
                        </div>
                    )}
                </Spring>
            )}
        </Fragment>
    );
};

export default UploadFileBuilder;

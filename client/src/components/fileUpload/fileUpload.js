import {useCallback, Fragment, useState, useEffect} from "react";
import {Icons} from "@eachbase/theme";
import {BoxImagePreview, Typography} from "@eachbase/components";
import {Container} from "./style";
import {useDropzone} from "react-dropzone";
import {v4 as uuid} from "uuid";
import {TiDelete} from "react-icons/ti";
import {
    businessesActions,
    categoryItemActions,
    imageService,
    itemActions,
    menusActions,
    useSagaStore
} from "@eachbase/store";


import {colors} from "@eachbase/theme";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {put} from "redux-saga/effects";
import {httpRequestsOnLoadActions} from "../../store/http_requests_on_load";
import {CircularProgress} from "@material-ui/core";

export const FileUpload = ({
                               title = "File",
                               // files = [],
                               // mainImageId = false,
                               // limit = false,
                               // menu,
                               // onChange = () => {
                               // },
                               url,
                               onImagePreviewClick,
                               // id, requestType, category, menuId, itemId,
                               building, type,
                               handleChange, handleRemove, many, handleRemoveMany, selectedIndex
                           }) => {


    const [error, setError] = useState(false)
    const onDrop =(acceptedFiles) => {
        handleChange(acceptedFiles)
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: "image/*",
        onDrop,
    });
    //
    // const [manyImages, setManyImages] = useState([])
    //
    // useEffect(() => {
    //     if (many && url) {
    //         setManyImages(url)
    //     }
    // }, [url])

    return (
        <Container {...getRootProps()}
            // isDragActive={isDragActive}
        >
            <Fragment>
                <div className="uploaded-files">
                    {many === true && url && url.length ?
                    url.map((file, j) => (
                        <div
                            key={file.id}
                            className={`file-preview ${selectedIndex === j ? "main" : ""} `}
                            style={{backgroundImage: `url(${file.url})`}}
                            onClick={(e) => {
                                e.stopPropagation();
                                onImagePreviewClick(j);
                            }}
                        >
                            <div
                                className="remove"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveMany(j, file);
                                }}
                            >
                                <TiDelete/>
                            </div>
                        </div>
                    )) : ''}

                    {many !== true && url &&

                    <BoxImagePreview
                        main
                        url={url?.url}
                        onRequestToRemove={handleRemove}
                    />

                    }

                    {many === true ?
                        <div
                            style={{borderRadius: '8px'}}
                            className={building === true ? `file-mock` : `file-mock-preview  big-one`}
                        >
                            {
                                type === 'food' ?
                                    <Icons.FoodIcon/>
                                    :
                                    <Icons.DrinkIcon/>
                            }
                        </div>
                        :

                        !url &&
                        <div
                            style={{borderRadius: '8px'}}
                            className={building === true ? `file-mock` : `file-mock-preview  big-one`}
                        >
                            {building === true ?
                                <Icons.BuildingIcon/> :
                                type === 'food' ?
                                    <Icons.FoodIcon/>
                                    :
                                    type === 'drink' ?
                                        <Icons.DrinkIcon/>
                                        :
                                        <Icons.MenuIcon/>
                            }
                        </div>
                    }
                    {/*{renderMockPreview()}*/}
                </div>
                <div className="content-container">
                    <div className="title">
                        *Drag & Drop or <span className="active">Upload</span> {title}
                    </div>
                    <div style={error === true ? {color: colors.primary} : {}} className="acceptable-file-size-noth">
                        {error === true ? 'Max size must be 2MB' : 'Max size 2MB'}
                    </div>
                    {/*{mainImageId !== false ? (*/}
                    {/*  <div className="acceptable-file-size-noth">*/}
                    {/*    Selected image will be used as the main*/}
                    {/*  </div>*/}
                    {/*) : null}*/}
                </div>
                {/*{!url &&*/}
                <input {...getInputProps()} />
                {/*}*/}
            </Fragment>
        </Container>
    );
};

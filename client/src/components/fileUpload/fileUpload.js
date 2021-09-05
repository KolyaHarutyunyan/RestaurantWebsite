import {useCallback, Fragment, useState} from "react";
import { Icons } from "@eachbase/theme";
import {BoxImagePreview, Typography} from "@eachbase/components";
import { Container } from "./style";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";
import { TiDelete } from "react-icons/ti";
import {
    businessesActions,
    categoryItemActions,
    imageService,
    itemActions,
    menusActions,
    useSagaStore
} from "@eachbase/store";


import { colors } from "@eachbase/theme";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
export const FileUpload = ({
  title = "File",
  files = [],
  mainImageId = false,
  limit = false,menu,
  onChange = () => {},url,id,requestType, category,menuId,itemId,building
}) => {
    const getBusinessSaga = useSagaStore(businessesActions.getBusinesses);
    const getMenusSaga = useSagaStore(menusActions.getMenusByBusiness);
    const getCurrentCategoryItemsSaga = useSagaStore(categoryItemActions.get);

    const [error, setError] = useState(false)
  const onDrop = useCallback((acceptedFiles) => {
      if (acceptedFiles[0].size > 2097152) {
          setError(true)
      } else {
          setError(false)
          acceptedFiles.map((file) =>
              Object.assign(file, {
                  preview: URL.createObjectURL(file),
                  id: uuid(),
              })
          ).filter((_file, index) => !limit || (limit && index < limit));
          onChange(acceptedFiles, "UPLOAD", acceptedFiles[0].id, mainImageId ? mainImageId : null);
      }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  const onImagePreviewClick = (currentImageId) =>
    onChange(files, "NEW_MAIN", currentImageId);

  const onImageRemoveClick = (file) => {
    const filteredFiles = files.filter((cFile) => cFile.id !== file.id);
    if (mainImageId === file.id && files.length) {
      onChange(filteredFiles, "DELETE", filteredFiles.length ? filteredFiles[0].id : null);
      files =[]
    } else {
      onChange(filteredFiles, "DELETE", mainImageId);
    }
  };

  // const renderMockPreview = () => {
  //   const mockPreview = [];
  //   if (files.length !== limit) {
  //     for (let i = 0; i < limit - files.length; i++) {
  //       mockPreview.push(
  //         <div
  //           key={i}
  //           style={{borderRadius:'8px'}}
  //           className={`file-mock-preview ${limit === 1 ? "big-one" : ""}`}
  //         >
  //           <Icons.MenuIcon />
  //         </div>
  //       );
  //     }
  //   }
  //   return mockPreview;
  // };
const dispatch =useDispatch()
    const router = useRouter();
    const editItemSaga = useSagaStore(itemActions.update);



    const getCurrentMenuSaga = useSagaStore(menusActions.getCurrentMenu);
    const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  return (
    <Container {...getRootProps()}
               // isDragActive={isDragActive}
    >
        <Fragment>
          <div className="uploaded-files">
            {files.filter((_f, index) => (limit ? index <= limit : true))
              .map((file) => (
                <div
                  key={file.id}
                  className={`file-preview ${mainImageId === file.id ? "main" : ""} `}
                  style={{ backgroundImage: `url(${file.preview})` }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onImagePreviewClick(file.id);
                  }}
                >
                  <div
                    className="remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      onImageRemoveClick(file);
                    }}
                  >
                    <TiDelete />
                  </div>
                </div>
              ))}

              {url &&
              <BoxImagePreview
                  main
                  url={url}
                  onRequestToRemove={() => {
                      imageService.removeImage([id]).then(() =>  requestType === 'item' ?
                          getCurrentCategoryItemsSaga.dispatch(itemId)

                           : requestType === 'menu' ?
                          getMenusSaga.dispatch(router.query.restaurantId) :
                              dispatch(businessesActions.getBusinesses()))
                              // menu === true && getCurrentMenuSaga.dispatch(menuId)
                              // dispatch(businessesActions.getBusinesses()))
                      // getBusinessSaga.dispatch());
                      // getBusinessesSaga.dispatch()
                  }}
              />
              }

            {!files.length && !url &&
            <div
                style={{borderRadius: '8px'}}
                className={building === true ? `file-mock` : `file-mock-preview  big-one`}
            >
                {building === true ?
                    <Icons.BuildingIcon/>:
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
            <div style={error === true ? {color:colors.primary} : {} } className="acceptable-file-size-noth">
                {error === true  ? 'Max size must be 2mb' :  'Max size 2mb' }
            </div>
            {/*{mainImageId !== false ? (*/}
            {/*  <div className="acceptable-file-size-noth">*/}
            {/*    Selected image will be used as the main*/}
            {/*  </div>*/}
            {/*) : null}*/}
          </div>
          {!url &&
          <input {...getInputProps()} />
          }
        </Fragment>
    </Container>
  );
};

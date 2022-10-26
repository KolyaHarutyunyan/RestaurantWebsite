// import {
//     useCallback,
//     useEffect,
//     useState,
// } from "react";
import { Icons } from "@eachbase/theme";
import {
  BoxImagePreview,
  // Typography
} from "@eachbase/components";
import { Container } from "./style";
import { useDropzone } from "react-dropzone";
// import { v4 as uuid } from "uuid";
import { TiDelete } from "react-icons/ti";
// import {
//   businessesActions,
//   categoryItemActions,
//   imageService,
//   itemActions,
//   menusActions,
//   useSagaStore,
// } from "@eachbase/store";

import { colors } from "@eachbase/theme";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/router";
// import { put } from "redux-saga/effects";
// import { httpRequestsOnLoadActions } from "../../store/http_requests_on_load";
// import { CircularProgress } from "@material-ui/core";
import { Images } from "@eachbase/theme/images";

export const FileUpload = ({
  fileClassName,
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
  building,
  type,
  handleChange,
  handleRemove,
  many,
  handleRemoveMany,
  selectedIndex,
  error,
  infoText = "",
}) => {
  const onDrop = (acceptedFiles) => {
    handleChange(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
    <Container
      className={fileClassName}
      {...getRootProps()}
      // isDragActive={isDragActive}
    >
      <div className="uploaded-files">
        {many === true
          ? url.map((file, j) => (
              <div
                key={file.id}
                className={`file-preview ${selectedIndex === j ? "main" : ""} `}
                style={{ backgroundImage: `url(${file.url})` }}
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
                  <TiDelete />
                </div>
              </div>
            ))
          : ""}

        {many !== true && url && (
          <BoxImagePreview
            main
            url={url?.url}
            onRequestToRemove={handleRemove}
          />
        )}

        {many === true ? (
          <div
            style={{ borderRadius: "8px" }}
            className={
              building === true ? `file-mock` : `file-mock-preview  big-one`
            }
          >
            {type === "FOOD" ? (
              <Images.MenuFoodIcon />
            ) : type === "DRINK" ? (
              <Icons.DrinkIcon />
            ) : null}
          </div>
        ) : (
          !url &&
          (building ? (
            <div
              style={{ borderRadius: "8px" }}
              className={
                building === true ? `file-mock` : `file-mock-preview  big-one`
              }
            >
              {building === true ? (
                <Icons.BuildingIcon />
              ) : type === "FOOD" ? (
                <Icons.FoodIcon />
              ) : type === "DRINK" ? (
                <Icons.DrinkIcon />
              ) : (
                <Icons.MenuIcon />
              )}
            </div>
          ) : (
            <div className="restaurant-logo">
              <Images.RestaurantLogo />
            </div>
          ))
        )}
        {/*{renderMockPreview()}*/}
      </div>
      <div className="content-container">
        <div className="title">
          {"*Drag & Drop or"} <span className="active">Upload</span> {title}
        </div>
        <div
          style={error === true ? { color: colors.primary } : {}}
          className="acceptable-file-size-noth"
        >
          {infoText + " "}{" "}
          {error === true ? "Max size must be 2MB" : "Max size 2MB"}
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
    </Container>
  );
};

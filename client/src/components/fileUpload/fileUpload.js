import { useCallback, Fragment } from "react";
import { Icons } from "@eachbase/theme";
import { Typography } from "@eachbase/components";
import { Container } from "./style";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";
import { TiDelete } from "react-icons/ti";

export const FileUpload = ({
  title = "File",
  maxSize = 2048,
  files = [],
  mainImageId = false,
  limit = false,
  onChange = () => {},
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles
      .map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: uuid(),
        })
      )
      .filter((_file, index) => !limit || (limit && index < limit));
    onChange(files, "UPLOAD", files[0].id, mainImageId ? mainImageId : null);
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
      onChange(
        filteredFiles,
        "DELETE",
        filteredFiles.length ? filteredFiles[0].id : null
      );
    } else {
      onChange(filteredFiles, "DELETE", mainImageId);
    }
  };

  const renderMockPreview = () => {
    const mockPreview = [];
    if (files.length !== limit) {
      for (let i = 0; i < limit - files.length; i++) {
        mockPreview.push(
          <div
            key={i}
            className={`file-mock-preview ${limit === 1 ? "big-one" : ""}`}
          >
            <Icons.MenuIcon />
          </div>
        );
      }
    }
    return mockPreview;
  };

  return (
    <Container {...getRootProps()} isDragActive={isDragActive} limit={limit}>
      {limit === 0 ? (
        <div className="limit-reached-container">
          <Typography color="text" weight="bold">
            Upload Limit Reached
          </Typography>
        </div>
      ) : (
        <Fragment>
          <div className="uploaded-files">
            {files
              .filter((_f, index) => (limit ? index <= limit : true))
              .map((file) => (
                <div
                  key={file.id}
                  className={`file-preview ${
                    mainImageId === file.id ? "main" : ""
                  } ${limit === 1 ? "big-one" : ""}`}
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
            {renderMockPreview()}
          </div>
          <div className="content-container">
            <div className="title">
              Drag & Drop or <span className="active">Upload</span> {title}
            </div>
            <div className="acceptable-file-size-noth">
              Max size {Math.round(maxSize / 1024)}mb
            </div>
            {mainImageId !== false ? (
              <div className="acceptable-file-size-noth">
                Selected image will be used as the main
              </div>
            ) : null}
          </div>
          <input {...getInputProps()} />
        </Fragment>
      )}
    </Container>
  );
};

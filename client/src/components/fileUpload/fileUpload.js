import { Container } from "./style";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { v4 as uuid } from "uuid";
import { TiDelete } from "react-icons/ti";

export const FileUpload = ({
  title = "File",
  maxSize = 2048,
  files = [],
  onChange = () => {},
}) => {
  const onDrop = useCallback((acceptedFiles) => {
    onChange(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
          id: uuid(),
        })
      )
    );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <Container {...getRootProps()} isDragActive={isDragActive}>
      <div className="uploaded-files">
        {files.map((file) => (
          <div
            key={file.id}
            className="file-preview"
            style={{ backgroundImage: `url(${file.preview})` }}
          >
            <div
              className="remove"
              onClick={(e) => {
                e.stopPropagation();
                onChange(files.filter((cFile) => cFile.id !== file.id));
              }}
            >
              <TiDelete />
            </div>
          </div>
        ))}
      </div>
      <div className="content-container">
        <div className="title">
          Drag & Drop or <span className="active">Upload</span> {title}
        </div>
        <div className="acceptable-file-size-noth">
          Max size {Math.round(maxSize / 1024)}mb
        </div>
      </div>
      <input {...getInputProps()} />
    </Container>
  );
};

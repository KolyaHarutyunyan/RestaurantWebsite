import { InputBlock, Styled } from ".";
import { useRef, useState } from "react";
import { ItemImage } from "../../itemImage";
import { colors } from "../../../theme";

export const ImagePiker = ({
  count,
  brd,
  values,
  onChange,
  className,
  type,
  title,
  description,
}) => {
  const [selected, setSelected] = useState(-1);
  const inputRefs = [...Array(count).keys()].map((_) => useRef());

  const fileSelectHandler = (file, id = -1) => {
    let reader = new FileReader();
    reader.onload = () => {
      if (id === -1) onChange(reader.result);
      else onChange(values.map((item, i) => (i === id ? reader.result : item)));
    };
    reader.readAsDataURL(file[0]);
  };

  const dragHandlerStart = (e, id) => {
    setSelected(id);
    console.log("dragHandlerStart", id);
  };
  const dragHandlerEnd = (e) => {
    e.target.style.boxShadow = "none";
  };
  const dragHandlerOver = (e) => {
    e.preventDefault();
    e.target.style.boxShadow = "0 0 10px " + colors.shadow;
  };
  const dragHandler = (e, id) => {
    e.preventDefault();
    let list = values;
    if (selected !== -1) {
      let t = list[id];
      console.log(id, selected);
      list[id] = list[selected];
      list[selected] = t;
      setSelected(-1);
      onChange(list);
    } else {
      console.log(id);
      if (id === -2) {
        let reader = new FileReader();
        reader.onload = () => {
          onChange(reader.result);
        };
        reader.readAsDataURL([...e.dataTransfer.files][0]);
      } else {
        console.log([...e.dataTransfer.files].length);
        let addImg = (files) => {
          console.log(files.length);
          let reader = new FileReader();
          let _id = -1;
          console.log(list);
          for (let i = 0; i < count; i++)
            if (!list[i]) {
              _id = i;
              break;
            }

          if (_id === -1 || !files.length) {
            onChange(list);
            console.log(_id, files.length);
            return;
          }
          reader.onload = () => {
            list = list.map((item, i) => (i === _id ? reader.result : item));
            console.log(list);

            addImg(files.splice(1, files.length - 1));
          };
          reader.readAsDataURL(files[0]);
        };
        addImg([...e.dataTransfer.files]);
      }
    }
    setSelected(-1);
  };
  const removeItem = (id) =>
    onChange(id === -1 ? "" : values.map((item, i) => (id === i ? "" : item)));

  return (
    <InputBlock brd={brd} className={className + " file"}>
      <Styled.ImagePiker>
        {typeof values === "object" ? (
          <div className="row">
            {values.map((item, id) => (
              <div
                key={id}
                style={{
                  cursor: "pointer",
                  borderRadius: 100,
                  width: "fit-content",
                }}
                draggable={!!item}
                onDrop={(e) => dragHandler(e, id)}
                onDragStart={(e) => dragHandlerStart(e, id)}
                onDragLeave={(e) => dragHandlerEnd(e)}
                onDragEnd={(e) => dragHandlerEnd(e)}
                onDragOver={(e) => dragHandlerOver(e)}
              >
                <input
                  ref={inputRefs[id]}
                  onChange={(e) => fileSelectHandler(e.target.files, id)}
                  type="file"
                  accept={"image/*"}
                  style={{ display: "none" }}
                />
                <ItemImage
                  onClick={() => inputRefs[id].current.click()}
                  className="item"
                  type={type || "menu"}
                  url={item}
                  onRemove={selected !== id ? () => removeItem(id) : false}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            <div
              style={{ cursor: "pointer" }}
              draggable={!!values}
              onDrop={(e) => dragHandler(e, -2)}
              onDragStart={(e) => dragHandlerStart(e, -2)}
              onDragLeave={(e) => dragHandlerEnd(e)}
              onDragEnd={(e) => dragHandlerEnd(e)}
              onDragOver={(e) => dragHandlerOver(e)}
            >
              <ItemImage
                type={type || "restaurant"}
                url={values}
                style={{ cursor: "pointer" }}
                onRemove={() => removeItem(-1)}
                onClick={() => inputRefs[0].current.click()}
              />
              <input
                ref={inputRefs[0]}
                onChange={(e) => fileSelectHandler(e.target.files, -1)}
                type="file"
                accept={"image/*"}
                style={{ display: "none" }}
              />
            </div>
          </div>
        )}
        <p className="title">{title} </p>
        <p className="description">{description} </p>
      </Styled.ImagePiker>
    </InputBlock>
  );
};

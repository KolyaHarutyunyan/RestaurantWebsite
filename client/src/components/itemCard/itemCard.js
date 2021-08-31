import {HtmlTooltip, ToolTipScreen, Typography} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { Container } from "./style";
import { TiPencil } from "react-icons/ti";
import { IoIosTrash } from "react-icons/io";
import { forwardRef } from "react";

export const ItemCard = forwardRef(
  (
    { item, onRequestToDelete = () => {}, onRequestToEdit = () => {}, ...rest },
    ref
  ) => {
    const image = item.item.mainImage ? item.item.mainImage.originalUrl : null;
    const imageStyle = {
      backgroundImage: `url(${image})`,
    };

    return (
      <Container {...rest} ref={ref}>
        <div className="image" style={imageStyle}>
          {image ? null : <Icons.FoodIcon />}
        </div>
        <div className="content">
          <div className="upper">
            <div className="info">
              <Typography className='item-title' color="text" weight="bold">
                {item.item.name}
              </Typography>

              <HtmlTooltip title={item.item.description.length > 50 ?
                  <ToolTipScreen
                      name={item.item.name}
                      desc={item.item.description}
                      sub={item.item.option}
                  />
                  : ''} placement="top-end">
              <Typography className="poor" color="text">
                {item.item.description.length > 50 ? `${item.item.description.slice(0,50)}...` : item.item.description}
              </Typography>
              </HtmlTooltip>

            </div>
            <Typography color="text" className="price"  weight="bold">
              <b>$</b>
              {item.item.price}
            </Typography>
          </div>
          <div className="under">
            <Typography color="text" className="poor-option">
              {item.item.option && item.item.option.length > 40 ? `${item.item.option.slice(0,40)}...` : item.item.option}
            </Typography>
            <div className="actions">
              <button className="edit" onClick={() => onRequestToEdit()}>
                <div className="icon">
                  <TiPencil />
                </div>
                <p>Edit</p>
              </button>
              <button className="delete" onClick={() => onRequestToDelete()}>
                <div className="icon">
                  <IoIosTrash />
                </div>
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
);

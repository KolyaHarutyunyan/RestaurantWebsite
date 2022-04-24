import {HtmlTooltip, SlicedText, ToolTipScreen, Typography} from "@eachbase/components";
import { Icons } from "@eachbase/theme";
import { Container } from "./style";
import { TiPencil } from "react-icons/ti";
import { IoIosTrash } from "react-icons/io";
import { forwardRef } from "react";

export const ItemCard = forwardRef(
  ({category, categoryType, item, onRequestToDelete = () => {}, onRequestToEdit = () => {}, ...rest },
    ref
  ) => {
    const image = item.item.images ? item.item.images.length && item?.item?.images[item.item.mainImage]?.url : null;
    const imageStyle = {
      backgroundImage: `url(${image})`,
    };
    const itemPrice = item && item.item && item.item.price.toString()
    let pricePoint = itemPrice.search("\\.");

    return (
      <Container {...rest} ref={ref}>
        <div className="image" style={imageStyle}>
          {image ? null :
              categoryType === 'FOOD' ?
                  <Icons.FoodIcon />
                  :
                  <Icons.DrinkIcon />
          }
        </div>
        <div className="content">
          <div className="upper">
            <div className="info">
              <Typography className='item-title' color="text" weight="bold">
                <SlicedText type={'name'} size={15} data={item && item.item.name}/>
              </Typography>

              <HtmlTooltip title={item &&  item.item.description && item.item.description.length > 50 ?
                  <ToolTipScreen
                      name={item.item.name}
                      desc={item && item.item.description && item.item.description }
                      sub={item.item.option}
                  />
                  : ''} placement="top-end">
              <Typography className="poor" color="text">
                <SlicedText type={'desc'} size={30} data={item && item.item.description}/>
              </Typography>
              </HtmlTooltip>

            </div>
            <Typography color="text" className="price"  weight="bold">
              <b>$</b>
              {pricePoint === -1 ? `${item.item.price}.00` : item.item.price}
            </Typography>
          </div>
          <div className="under">
            <Typography color="text" className="poor-option">
              <SlicedText type={'opt'} size={30} data={item && item.item.option && item.item.option}/>
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

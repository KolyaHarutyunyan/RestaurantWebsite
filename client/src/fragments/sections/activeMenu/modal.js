import { ModalContainer } from "./style";
import { Icons } from "@eachbase/theme";
import Carousel from "nuka-carousel";

export const Modal = ({ info, modalType, handleOpenClose }) => {
  return (
    <ModalContainer>
      <div className="line-class">
        <button onClick={handleOpenClose}>
          <Icons.BackButton />
        </button>
      </div>
      <div className="image-name">
        {info && info.images && info.images.length ?
          info.images.length > 1 ?
            <Carousel
              animation={"zoom"}
              zoomScale={0.7}
              pauseOnHover={false}
              autoplayInterval={2000}
              slidesToShow={1}
              slidesToScroll={1}
              style={{ outline: "none" }}
              renderBottomCenterControls={() => false}
              renderCenterLeftControls={() => false}
              renderCenterRightControls={() => false}
            >
              {info.images.map((i, k) => (
                <div className="modal-image-wrapper">
                  <img className="image" key={k} src={i.url} alt="icon" />
                </div>
              ))}
            </Carousel>
            :
            <div style={{ margin: "0 auto" }}>
              <img className="image" src={info.images[info.mainImage].url} alt="icon" />
            </div>
          :
          <div className="no-image">
            {modalType === "drinks" ?
              <Icons.DrinkIcon />
              :
              <Icons.FoodIcon />
            }
          </div>
        }
      </div>

      <div>
        <div className="priceName">
          <p style={{marginRight: '10px'}} className="name">{info?.name}</p>
          <p>{`$${info?.price.toString().search("\\.") === -1 ? `${info?.price}.00` : info.price}`}</p>
        </div>
        {info?.note &&
          <div>
            <p className="option-style">{info?.note}</p>
          </div>
        }
      </div>

      <hr className="modal-hr" />

      {info?.description &&
        <div>
          <p className="description-title">Description</p>
          <div>
            <p className='item-description'>{info?.description}</p>
          </div>
        </div>
      }
    </ModalContainer>
  );
};
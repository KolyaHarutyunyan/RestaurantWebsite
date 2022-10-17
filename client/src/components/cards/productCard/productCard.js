import { StyledProductCard } from "./style";
import {
  MoreDropdown,
  MultiSelect,
  Switch,
  NoItemsCard,
} from "@eachbase/components";
import { colors } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";

export const ProductCard = ({
  products = [],
  currentCategory,
  handleProductAdd,
  handleProductSwitch,
  handleProductEdit,
  handleProductDelete,
  selectText,
  noItemsText,
  multiProductsList = [],
}) => {
  return (
    <StyledProductCard>
      {currentCategory ? (
        <>
          <button
            type="button"
            className="add-menu-item-button"
            onClick={handleProductAdd}
          >
            <Images.AddIcon /> Add New Menu Item
          </button>
          <MultiSelect options={multiProductsList} />
          {products.length ? (
            <div className="product-list-box">
              <ul className="product-list">
                {products.map(({ item }) => (
                  <li
                    key={item.id}
                    className={`product-item 
              ${!item.isActive && false ? "inactive" : ""}`}
                  >
                    <div className="product-name-box">
                      <div className="product-image">
                        {item.images?.length ? (
                          <img src={item.images[0].url} alt={item.name} />
                        ) : (
                          <Images.GalleryEmpty />
                        )}
                      </div>
                      <p className="product-name">{item.name}</p>
                    </div>
                    <div className="product-action-box">
                      <div className="product-price">
                        <span className="price-text">{`$${item.price}`}</span>
                      </div>
                      <div className="switch-wrapper">
                        <Switch
                          status={item.isActive || true}
                          offColor={colors.lightBlack}
                          onClick={() => handleProductSwitch(item.id)}
                        />
                      </div>
                      <MoreDropdown
                        vertical
                        handleEdit={() => handleProductEdit(item)}
                        handleDelete={() => handleProductDelete(item)}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <NoItemsCard text={noItemsText} />
          )}
        </>
      ) : (
        <NoItemsCard text={selectText} />
      )}
    </StyledProductCard>
  );
};

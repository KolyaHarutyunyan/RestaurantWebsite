import { StyledProductCard } from "./style";
import { MoreDropdown, MultiSelect, Switch } from "@eachbase/components";
import { colors } from "@eachbase/theme";

export const ProductCard = ({ products = [] }) => {
  return (
    <StyledProductCard>
      <MultiSelect options={[]} />
      <div className="product-list-box">
        <ul className="product-list">
          {products.map(({ item }) => (
            <li
              key={item.id}
              className={`product-item ${
                !item.isActive && false ? "inactive" : ""
              }`}
            >
              <div className="product-name-box">
                <div className="product-image">
                  <img src={item.images[0].url} alt={item.name} />
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
                    onClick={() => {}}
                  />
                </div>
                <MoreDropdown
                  vertical
                  handleEdit={() => {}}
                  handleDelete={() => {}}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledProductCard>
  );
};

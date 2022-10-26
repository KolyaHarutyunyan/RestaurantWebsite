import { StyledProductCard } from "./style";
import {
  MoreDropdown,
  MultiSelect,
  Switch,
  NoItemsCard,
} from "@eachbase/components";
import { colors } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  searchbarValue,
  selectedProducts,
  onChange,
  onSearchbarValueChange,
  onDragProduct,
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
          <MultiSelect
            options={multiProductsList}
            categoryItems={products}
            searchBarValue={searchbarValue}
            selected={selectedProducts}
            onChange={onChange}
            onSearchBarValueChange={onSearchbarValueChange}
          />
          {products.length ? (
            <DragDropContext onDragEnd={onDragProduct}>
              <Droppable droppableId="product-list">
                {(provided) => (
                  <div className="product-list-box">
                    <ul
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="product-list"
                    >
                      {products.map(({ item }, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided) => (
                            <li
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={item.id}
                              className={`product-item 
                            ${!item.active ? "inactive" : ""}`}
                            >
                              <div className="product-name-box">
                                <div className="product-image">
                                  {item.images?.length &&
                                  item.mainImage >= 0 ? (
                                    <img
                                      src={item.images[item.mainImage].url}
                                      alt={item.name}
                                    />
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
                                    status={item.active}
                                    offColor={colors.lightBlack}
                                    onClick={() => handleProductSwitch(item)}
                                  />
                                </div>
                                <MoreDropdown
                                  vertical
                                  handleEdit={() => handleProductEdit(item)}
                                  handleDelete={() => handleProductDelete(item)}
                                />
                              </div>
                            </li>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </ul>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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

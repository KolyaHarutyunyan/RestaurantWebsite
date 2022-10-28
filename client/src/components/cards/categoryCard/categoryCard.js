import { StyledCategoryCard } from "./style";
import {
  Button,
  Switch,
  MoreDropdown,
  NoItemsCard,
} from "@eachbase/components";
import { Images } from "@eachbase/theme/images";
import { colors } from "@eachbase/theme";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export const CategoryCard = ({
  cardClassName,
  categories = [],
  currentCategory,
  handleCategoryAdd,
  handleCategoryEdit,
  handleCategoryDelete,
  handleCategorySwitch,
  handleCurrentCategory,
  noItemsText,
  onDragCategory,
}) => {
  return (
    <StyledCategoryCard className={cardClassName}>
      <div className="category-add-box">
        <Button
          square
          fullWidth
          className={"category-add-button"}
          onClick={handleCategoryAdd}
        >
          Add
        </Button>
      </div>
      {categories.length ? (
        <DragDropContext onDragEnd={onDragCategory}>
          <Droppable droppableId="category-list">
            {(provided) => (
              <div className="category-list-box">
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="category-list"
                >
                  {categories.map((category, index) => (
                    <Draggable
                      key={category.id}
                      draggableId={category.id}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={category.id}
                          className={`category-item ${
                            !category.active ? "inactive" : ""
                          } ${
                            category.id === currentCategory?.id ? "current" : ""
                          }`}
                          onClick={() => handleCurrentCategory(category)}
                        >
                          <div className="category-name-box">
                            <MoreDropdown
                              vertical
                              handleEdit={() => handleCategoryEdit(category)}
                              handleDelete={() =>
                                handleCategoryDelete(category)
                              }
                            />
                            <p className="category-name">{category.name}</p>
                          </div>
                          <div className="category-action-box">
                            <Switch
                              status={category.active}
                              offColor={colors.lightBlack}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCategorySwitch(category);
                              }}
                            />
                            <div className="right-arrow">
                              <Images.RightArrow />
                            </div>
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
    </StyledCategoryCard>
  );
};

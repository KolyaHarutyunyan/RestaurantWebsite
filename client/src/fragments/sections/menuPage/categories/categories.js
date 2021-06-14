import { Container } from "./style";
import { Tabs, Select, Button, ProSelect } from "@eachbase/components";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import { IoIosTrash } from "react-icons/io";
export const Categories = () => {
  const [activeTab, setActiveTab] = useState("food");
  const [categoriesSelect, setCategoriesSelect] = useState({
    value: null,
    options: [{ label: "hello", value: "hello" }],
  });
  const [searchBarValue, setSearchBarValue] = useState("");

  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
      >
        <Tabs.TabHeader>
          <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
          <Tabs.TabTitle tabName="drinks">Drinks</Tabs.TabTitle>
        </Tabs.TabHeader>
        <div className="select-create-category">
          <div className="select-wrapper">
            <ProSelect
              onChange={(value, options) => {
                setCategoriesSelect({
                  value,
                  options,
                });
              }}
              onSearchBarValueChange={(value) => setSearchBarValue(value)}
              options={categoriesSelect.options}
              value={categoriesSelect.value}
            />
          </div>

          <Button
            disabled={
              !searchBarValue ||
              !!categoriesSelect.options.find(
                (option) => option.label === searchBarValue
              )
            }
          >
            Add
          </Button>
        </div>
        <Tabs.TabContent contentOf="food">
          <ul className="categories">
            <li>
              <Typography className="category-name">
                Category Name
                <div className="action">
                  <Button link>
                    <div className="icon">
                      <IoIosTrash />
                    </div>
                    Delete
                  </Button>
                </div>
              </Typography>
            </li>
            <li>
              <Typography className="category-name">
                Category Name
                <div className="action">
                  <Button link>
                    <div className="icon">
                      <IoIosTrash />
                    </div>
                    Delete
                  </Button>
                </div>
              </Typography>
            </li>
            <li>
              <Typography className="category-name">
                Category Name
                <div className="action">
                  <Button link>
                    <div className="icon">
                      <IoIosTrash />
                    </div>
                    Delete
                  </Button>
                </div>
              </Typography>
            </li>
            <li>
              <Typography className="category-name">
                Category Name
                <div className="action">
                  <Button link>
                    <div className="icon">
                      <IoIosTrash />
                    </div>
                    Delete
                  </Button>
                </div>
              </Typography>
            </li>
          </ul>
        </Tabs.TabContent>
        <Tabs.TabContent contentOf="drinks"></Tabs.TabContent>
      </Tabs.Wrapper>
    </Container>
  );
};

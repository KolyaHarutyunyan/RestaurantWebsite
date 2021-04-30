import { SideStaticMenu } from "@eachbase/components";
import { Container } from "./style";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Menu } from "@eachbase/components";
import { useState } from "react";
import { useEffect } from "react";
import { categoriesActions } from "@eachbase/store";

export const Category = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("food");
  const { restaurantId, menuId } = useParams();
  const { restaurant, categories } = useSelector((store) => ({
    restaurant: {
      name: store.restaurant ? store.restaurant.name : "Loading...",
      logo: store.restaurant ? store.restaurant.logoUrl : null,
    },
    categories: store.categories || [],
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SideStaticMenu
      onRequestToClose={() => history.push("/restaurants")}
      onRequesToGoBack={() => history.goBack()}
    >
      <Container>
        <div className="restaurant">
          {restaurant.logo && <img src={restaurant.logo} alt="" />}
          <div className="name">{restaurant.name}</div>
        </div>
        <div className="content">
          <Tabs.Wrapper
            activeTab={activeTab}
            onRequestToChange={(newTab) => setActiveTab(newTab)}
          >
            <Tabs.TabHeader>
              <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
              <Tabs.TabTitle tabName="drinks">Drinks</Tabs.TabTitle>
            </Tabs.TabHeader>
            <Tabs.TabContent contentOf="food">
              <Menu.List>
                {categories.map((category, index) => (
                  <Menu.Item
                    key={index}
                    onClick={() =>
                      history.push(
                        `/restaurants/${restaurantId}/${menuId}/${category._id}`
                      )
                    }
                  >
                    {category.name}
                  </Menu.Item>
                ))}
              </Menu.List>
            </Tabs.TabContent>
            <Tabs.TabContent contentOf="drinks">
              <Menu.List>
                <Menu.Item>Nothing</Menu.Item>
              </Menu.List>
            </Tabs.TabContent>
          </Tabs.Wrapper>
        </div>
      </Container>
    </SideStaticMenu>
  );
};

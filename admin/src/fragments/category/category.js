import { SideStaticMenu } from "@eachbase/components";
import { Container } from "./style";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "@eachbase/components";
import { useState } from "react";
import { useEffect } from "react";
import { categoriesActions } from "@eachbase/store";
export const Category = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState("food");
  const { restaurant } = useSelector((store) => ({
    restaurant: {
      name: store.restaurant ? store.restaurant.name : "Loading...",
      logo: store.restaurant ? store.restaurant.logoUrl : null,
    },
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesActions.getCategories());
  }, []);

  return (
    <SideStaticMenu onRequestToClose={() => history.push("/restaurants")}>
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
            <Tabs.TabContent contentOf="food">one</Tabs.TabContent>
            <Tabs.TabContent contentOf="drinks">two</Tabs.TabContent>
          </Tabs.Wrapper>
        </div>
      </Container>
    </SideStaticMenu>
  );
};

import { Container } from "./style";
import { VTabs, Tabs } from "@eachbase/components";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Categories = () => {
  const [activeTab, setActiveTab] = useState("food");
  const menuCategories = useSelector(({ menuCategories }) => menuCategories);

  return (
    <Container>
      <Tabs.Wrapper
        activeTab={activeTab}
        onRequestToChange={(newActiveTab) => setActiveTab(newActiveTab)}
      >
        <Tabs.TabHeader square>
          <Tabs.TabTitle tabName="food">Food</Tabs.TabTitle>
          <Tabs.TabTitle tabName="drink">Drinks</Tabs.TabTitle>
        </Tabs.TabHeader>
        <Tabs.TabContent contentOf="food"></Tabs.TabContent>
        <Tabs.TabContent contentOf="drink"></Tabs.TabContent>
      </Tabs.Wrapper>
    </Container>
  );
};

import { Container } from "./style";
import { Tabs } from "@eachbase/components";
import { useState } from "react";
export const Categories = () => {
  const [activeTab, setActiveTab] = useState("food");
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

import React from "react";
import {
  plansAndPricingStandardList,
  plansAndPricingStarterList,
} from "./constants";
import { PlansAndPricingCard } from "./core/plansAndPricingCard";

export const RestaurantPlansAndPricingFragment = () => {
  return (
    <div className="cards-box">
      <div className="cards-wrapper">
        <PlansAndPricingCard
          cardTitle={"Starter"}
          cardSubtitle={"The quickest and easiest way to try Menumango"}
          cardType={"$0"}
          cardActionText={"Get Started"}
          cardActionHandler={() => alert("Starter")}
          cardList={plansAndPricingStarterList}
        />
        <PlansAndPricingCard
          cardTitle={"Standard"}
          cardSubtitle={"The quickest and easiest way to try Menumango"}
          cardType={"$25"}
          cardTime={"MO"}
          cardActionText={"Get Started"}
          cardActionHandler={() => alert("Standard")}
          cardList={plansAndPricingStandardList}
        />
      </div>
    </div>
  );
};

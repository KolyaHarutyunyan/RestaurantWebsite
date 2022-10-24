import Router from "next/router";
import {
  plansAndPricingStandardList,
  plansAndPricingStarterList,
} from "./constants";
import { PlansAndPricingCard } from "./core/plansAndPricingCard";
import { StyledRestaurantPlansAndPricing } from "./style";

export const RestaurantPlansAndPricingFragment = () => {
  return (
    <StyledRestaurantPlansAndPricing>
      <h2 className="plans-and-pricing-title">Plans and pricing</h2>
      <div className="cards">
        <div className="cards-wrapper">
          <PlansAndPricingCard
            cardTitle={"Starter"}
            cardSubtitle={"The quickest and easiest way to try Menumango"}
            cardType={"$0"}
            cardActionText={"Get Started"}
            cardActionHandler={() =>
              Router.push(`/plansAndPricing/checkout?price=0`)
            }
            cardList={plansAndPricingStarterList}
          />
          <PlansAndPricingCard
            cardTitle={"Standard"}
            cardSubtitle={"The quickest and easiest way to try Menumango"}
            cardType={"$25"}
            cardTime={"MO"}
            cardActionText={"Get Started"}
            cardActionHandler={() =>
              Router.push(`/plansAndPricing/checkout?price=25`)
            }
            cardList={plansAndPricingStandardList}
          />
        </div>
      </div>
    </StyledRestaurantPlansAndPricing>
  );
};

import React from "react";
import { useRouter } from "next/router";
import { MuiBreadcrumbs } from "@eachbase/components";
import {
  plansAndPricingBreadcrumbs,
  plansAndPricingStandardList,
  plansAndPricingStarterList
} from "./constants";
import { PlansAndPricingCard } from "./core/plansAndPricingCard";
import { StyledRestaurantPlansAndPricing } from "./style";

export const RestaurantPlansAndPricingFragment = () => {
  const router = useRouter();
  return (
    <>
      <MuiBreadcrumbs breadcrumbs={plansAndPricingBreadcrumbs} />
      <StyledRestaurantPlansAndPricing>
        <div className="cards-wrapper">
          <PlansAndPricingCard
            cardTitle={"Starter"}
            cardSubtitle={"The quickest and easiest way to try Menumango"}
            cardType={"$0"}
            cardActionText={"Get Started"}
            cardActionHandler={() => router.push(`/checkout?price=0`)}
            cardList={plansAndPricingStarterList}
          />
          <PlansAndPricingCard
            cardTitle={"Standard"}
            cardSubtitle={"The quickest and easiest way to try Menumango"}
            cardType={"$25"}
            cardTime={"MO"}
            cardActionText={"Get Started"}
            cardActionHandler={() => router.push(`/checkout?price=25`)}
            cardList={plansAndPricingStandardList}
          />
        </div>
      </StyledRestaurantPlansAndPricing>
    </>
  );
};

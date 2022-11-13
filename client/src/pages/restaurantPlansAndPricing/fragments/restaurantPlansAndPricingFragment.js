import { useState } from "react";
import { useDispatch } from "react-redux";
import Router, { useRouter } from "next/router";
import { userInfo } from "@eachbase/utils";
import { services, httpRequestsOnSuccessActions } from "@eachbase/store";
import { plansAndPricingStandardList, plansAndPricingStarterList, } from "./constants";
import { PlansAndPricingCard } from "./core/plansAndPricingCard";
import { StyledRestaurantPlansAndPricing } from "./style";

export const RestaurantPlansAndPricingFragment = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const [loader, setLoader] = useState(false)

  const handleActivateFree = async () => {
    setLoader(true)
    try {
      dispatch(httpRequestsOnSuccessActions.appendSuccess('FREE_PACKAGE_WAS_ACTIVATED'))
      // await services.activateStarter()

      const user = {
        ...userInfo,
        subscription: true
      }
      localStorage.setItem('menuUser', JSON.stringify(user))
      // window.location.replace('/menus')

    }catch (e){

    }finally {
      setLoader(false)
    }
  }

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
            cardActionHandler={() => handleActivateFree()}
            cardList={plansAndPricingStarterList}
            loading={loader}
            // subscriptionPlan={true}
            subscriptionPlan={userInfo?.subscription}
          />
          <PlansAndPricingCard
            cardTitle={"Standard"}
            cardSubtitle={"The quickest and easiest way to try Menumango"}
            cardType={"$25"}
            cardTime={"MO"}
            cardActionText={userInfo?.subscription  ? "Upgrade" : "Get Started"}
            cardActionHandler={() => Router.push(`/plansAndPricing/checkout?price=25`)}
            cardList={plansAndPricingStandardList}
            subscriptionPlan={false}
          />
        </div>
      </div>
    </StyledRestaurantPlansAndPricing>
  );
};

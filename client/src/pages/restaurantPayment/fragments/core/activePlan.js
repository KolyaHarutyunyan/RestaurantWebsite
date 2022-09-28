import { StyledActivePlan } from "./style";
import { Icons } from "@eachbase/theme";
import { Button } from "@material-ui/core";
import { standardData, yourPlanFeatures } from "./constants";

export const ActivePlan = () => {
  return (
    <StyledActivePlan>
      <div className="active-plan-wrapper">
        <div className="first-section">
          <p className="title">Standart</p>
          {standardData.map((item, index) => (
            <div key={index} className="items-wrapper">
              <div className="icon-wrapper">{item.icon}</div>
              <p className="standart-text">
                {item.text}{" "}
                <span className={item.text === "Status" ? "status" : ""}>
                  {item.highlightedText}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="second-section">
          <p className="title">Your plan features</p>
          <div className="flex-able-wrapper">
            <div className="first-wrap">
              {yourPlanFeatures.slice(0, 3).map((item, index) => (
                <div key={index} className="items-wrapper">
                  <div className="icon-wrapper">
                    <Icons.CheckPayment />
                  </div>
                  <p className="features-text">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="second-wrap">
              {yourPlanFeatures.slice(3).map((item, index) => (
                <div key={index} className="items-wrapper">
                  <div className="icon-wrapper">
                    <Icons.CheckPayment />
                  </div>
                  <p className="features-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="plan-line" />
      {/* <div>
      <p className="plan-info">Your next payment is <span style={{ color: "black" }}>$25.00 USD</span>, to be charged
        on <span style={{ color: "black" }}>May 02, 2022</span></p>
      <p className="plan-info">Your payment will be automatically renewed each month.</p>
      </div> */}
      <div className="upgrade-button-wrapper">
        <Button className="upgrade">Upgrade</Button>
      </div>
    </StyledActivePlan>
  );
};

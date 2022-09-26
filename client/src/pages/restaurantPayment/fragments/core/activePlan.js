import { ActivePlanContainer } from "./styles";
import { Icons } from "@eachbase/theme";
import { Button } from "@material-ui/core";

export const ActivePlan = ({}) => {
  return (
    <ActivePlanContainer>
      <div className="active-plan-wrapper">
        <div className="first-section">
          <p className="title">Standart</p>
          <div className="items-wrapper">
            <div className="icon-wrapper">
              <Icons.Date />
            </div>
            <p className="standart-text">
              Started Date <span style={{ color: "#000000" }}>02/02.2022</span>
            </p>
          </div>
          <div className="items-wrapper">
            <div className="icon-wrapper">
              <Icons.Status />
            </div>
            <p className="standart-text">
              Status <span style={{ color: "#54C762" }}>Paid</span>
            </p>
          </div>
          <div className="items-wrapper">
            <div className="icon-wrapper">
              <Icons.Price />
            </div>
            <p className="standart-text">
              Price <span style={{ color: "#000000" }}>$25</span>
            </p>
          </div>
        </div>
        <div className="second-section">
          <p className="title">Your plan features</p>
          <div className="flex-able-wrapper">
            <div className="first-wrap">
              <div className="items-wrapper">
                <div className="icon-wrapper">
                  <Icons.CheckPayment />
                </div>
                <p className="features-text">
                  Menu list with items (description ,ingredients)
                </p>
              </div>
              <div className="items-wrapper">
                <div className="icon-wrapper">
                  <Icons.CheckPayment />
                </div>
                <p className="features-text">Feedback</p>
              </div>
              <div className="items-wrapper">
                <div className="icon-wrapper">
                  <Icons.CheckPayment />
                </div>
                <p className="features-text">Analytics</p>
              </div>
            </div>
            <div className="second-wrap">
              <div className="items-wrapper">
                <div className="icon-wrapper">
                  <Icons.CheckPayment />
                </div>
                <p className="features-text">Recommendation</p>
              </div>
              <div className="items-wrapper">
                <div className="icon-wrapper">
                  <Icons.CheckPayment />
                </div>
                <p className="features-text">20 FREE Contactless Cards</p>
              </div>
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
    </ActivePlanContainer>
  );
};

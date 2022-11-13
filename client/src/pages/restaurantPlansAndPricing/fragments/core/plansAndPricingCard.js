import { Button } from "@material-ui/core";
import PulseLoader from "react-spinners/PulseLoader";
import { colors } from "../../../../theme";

export const PlansAndPricingCard = ({
  cardTitle,
  cardSubtitle,
  cardType,
  cardTime,
  cardActionText,
  cardActionHandler,
  loading,
  subscriptionPlan,
  cardList = [],
}) => {
  return (
    <div className="card">
      <p className="title">{cardTitle}</p>
      <p className="sub-title">{cardSubtitle}</p>
      <p className="type">
        {cardType}
        {cardTime && <span className="time">/{cardTime}</span>}
      </p>

      {subscriptionPlan ?
        <Button className="subscribed-button" onClick={cardActionHandler}>
          Subscribed
        </Button>
        :
        <Button className="get-button" onClick={cardActionHandler}>
          {
            loading ?
              <PulseLoader
                className="loader"
                color={'white'}
              />
              :

              cardActionText
          }
        </Button>
      }
      <ul className="packages">
        {cardList.map((cardItem, index) => (
          <li key={index}>
            <div className="svgDiv">{cardItem.icon}</div>
            <p>{cardItem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

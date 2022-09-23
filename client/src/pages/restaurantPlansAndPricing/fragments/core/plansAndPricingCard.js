import { Button } from "@material-ui/core";

export const PlansAndPricingCard = ({
  cardTitle,
  cardSubtitle,
  cardType,
  cardTime,
  cardActionText,
  cardActionHandler,
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
      <Button className="get-button" onClick={cardActionHandler}>
        {cardActionText}
      </Button>
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

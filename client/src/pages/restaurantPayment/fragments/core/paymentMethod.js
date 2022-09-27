import { StyledPaymentMethod } from "./style";
import { Icons } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";
import { addedCards } from "./constants";

export const PaymentMethod = () => {
  return (
    <StyledPaymentMethod>
      <p className="title">Card Information</p>
      <div className="cards-wrapper-section">
        {addedCards.map((card) => (
          <div className="card-wrapper">
            <div className="visa-info">
              <p>{card.type} Card</p>
              {card.icon}
            </div>
            <div className="card-date">
              <p>{card.cardNumbers}</p>
              <p>{card.expirationDate}</p>
            </div>
            <div className="action-wrapper">
              <button type="button" className="edit-btn">
                Edit
              </button>
              <button type="button" className="delete-btn">
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="add-card">
          <button type="button" className="add-card-btn">
            <Icons.AddCard />
            Add Card
          </button>
        </div>
      </div>
      <div className="we-accept-wrapper">
        <p className="we-accept">We Accept</p>
        <Icons.VisaCard />
        <Images.Visa2 />
      </div>
    </StyledPaymentMethod>
  );
};

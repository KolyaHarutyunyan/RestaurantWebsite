import { CardContainer } from "./styles";
import { Icons } from "@eachbase/theme";
import { Images } from "@eachbase/theme/images";

export const PaymentMethod = () => {
  return (
    <CardContainer>
      <p className="title">Card Information</p>
      <div className="cards-wrapper-section">
        <div className="card-wrapper">
          <div className="visa-info">
            <p>Visa Card</p>
            <Icons.VisaCard />
          </div>
          <div className="card-date">
            <p>458923******8965</p>
            <p>06/24</p>
          </div>
          <div className="delete-wrapper">
            <Icons.DeleteCard />
            <p>Delete</p>
          </div>
        </div>
        <div className="add-card">
          <div className="add-card-info">
            <Icons.AddCard />
            <p>Add Card</p>
          </div>
        </div>
      </div>
      <div className="we-accept-wrapper">
        <p className="we-accept">We Accept</p>
        <Icons.VisaCard />
        <Images.Visa2 />
      </div>
    </CardContainer>
  );
};

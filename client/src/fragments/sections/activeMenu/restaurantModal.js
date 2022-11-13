import { Icons } from "@eachbase/theme";
import { RestaurantModalContainer } from "./style";
import { AvailableHours } from "../../../components/availability";

export const RestaurantModal = ({ info, handleOpenClose }) => {
  return (
    <RestaurantModalContainer>
      <div className="line-class">
        <button onClick={handleOpenClose}>
          <Icons.BackButton />
        </button>
      </div>
      <div>
        <div className="rest-info">
          {info?.logo ?
            <img className="restaurant-icon" src={info?.logo?.thumbUrl} alt={"icon"} />
            :
            <div className="restaurant-no-icon">
              <Icons.BuildingIcon />
            </div>
          }
          <p className="restaurant-name">{info?.name}</p>

          <div className="social-info">
            {info?.facebook &&
              <a href={info?.facebook}>
                <Icons.FacebookAk />
              </a>
            }
            {info?.instagram &&
              <a href={info?.instagram}>
                <Icons.Instagram />
              </a>
            }
            {info?.website &&
              <a href={info?.website}>
                <Icons.Website />
              </a>
            }
          </div>

          {info?.description &&
            <div className="item-card">
              <p className="description">
                {info?.description}
              </p>
            </div>
          }

          <div className="item-card">
            <p className="title-desc"> Address: <span>{info?.address?.formattedAddress ? info?.address?.formattedAddress : "Not Set"} </span></p>
            <p className="title-desc"> Phone Number: <span>{info?.phoneNumber ? info?.phoneNumber : "Not Set"} </span></p>
            <div style={{ display: "flex" }}>
              <p className="title-desc"> Working Time:</p>
              <AvailableHours availabilityData={info?.hours} />
            </div>
          </div>
        </div>
      </div>
    </RestaurantModalContainer>
  );
};
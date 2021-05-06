import { Styled } from "./style";
import { BlockTitle } from "./blockTitle";
import { useSelector } from "react-redux";
import { CONSTANTS } from "../../../constants";
import { Icon } from "../../../components";
import { useContext, useState } from "react";
import { TimeLine } from "./timeLine";
import { ModalContext } from "../../../contexts";

export const ExtraDetails = () => {
  let extraDetails = useSelector(({ restaurant }) =>
    restaurant ? restaurant.extraDetails : null
  );
  const [openHours, setOpenHours] = useState(false);
  let { openModal } = useContext(ModalContext);

  if (!extraDetails) {
    return null;
  }
  return (
    <Styled.Block>
      <BlockTitle
        title={"Extra Details"}
        editAction={() => openModal.editRestaurantExtraDetails()}
      />
      <Styled.Line notMt unSet={!extraDetails.webSite}>
        <Icon name={CONSTANTS.SVGNames.Website} />
        <p className="info">{extraDetails.webSite || "Not Set"}</p>
      </Styled.Line>
      <Styled.Line unSet={!extraDetails.phone}>
        <Icon name={CONSTANTS.SVGNames.Call} />
        <p className="info">{extraDetails.phone || "Not Set"}</p>
      </Styled.Line>
      <Styled.Line unSet={!extraDetails.location}>
        <Icon name={CONSTANTS.SVGNames.Map} />
        <p className="info">{extraDetails.location || "Not Set"}</p>
      </Styled.Line>
      <Styled.Line>
        <Icon name={CONSTANTS.SVGNames.Hours} />
        <button
          onClick={() => setOpenHours((current) => !current)}
          className={"hours"}
        >
          hours <Icon name={CONSTANTS.SVGNames.DropdownArrow} />
        </button>
        <Styled.DropMenu
          status={openHours}
          onClick={() => setOpenHours((current) => !current)}
        >
          <div className="bg" />
          <TimeLine day={extraDetails.hours.mon} name="MON" />
          <TimeLine day={extraDetails.hours.tue} name="TUE" />
          <TimeLine day={extraDetails.hours.wed} name="WED" />
          <TimeLine day={extraDetails.hours.thu} name="THU" />
          <TimeLine day={extraDetails.hours.fri} name="FRI" />
          <TimeLine day={extraDetails.hours.sat} name="SAT" />
          <TimeLine day={extraDetails.hours.sun} name="SUN" />
        </Styled.DropMenu>
      </Styled.Line>
    </Styled.Block>
  );
};

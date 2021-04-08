import { Styled } from "./style";
import { BlockTitle } from "./blockTitle";
import { useSelector } from "react-redux";
import { SVGNames } from "../../../constants";
import { Icon } from "../../../components";
import { useState } from "react";
import { TimeLine } from "./timeLine";

export const ExtraDetails = () => {
	let extraDetails = useSelector(state => state.restaurant.extraDetails || {})
	let [ openHours, setOpenHours ] = useState(false)
	return (
		<Styled.Block>
			<BlockTitle title={"Extra Details"} editAction={() => console.log("edit information")}/>
			<Styled.Line notMt unSet={!extraDetails.webSite}>
				<Icon name={SVGNames.Website}/>
				<p className="info">{extraDetails.webSite || "Not Set"}</p>
			</Styled.Line>
			<Styled.Line unSet={!extraDetails.phone}>
				<Icon name={SVGNames.Call}/>
				<p className="info">{extraDetails.phone || "Not Set"}</p>
			</Styled.Line>
			<Styled.Line unSet={!extraDetails.location}>
				<Icon name={SVGNames.Map}/>
				<p className="info">{extraDetails.location || "Not Set"}</p>
			</Styled.Line>
			<Styled.Line>
				<Icon name={SVGNames.Hours}/>
				<button onClick={() => setOpenHours(current => !current)} className={"hours"}>hours <Icon
					name={SVGNames.DropdownArrow}/></button>
				<Styled.DropMenu status={openHours}>
					<TimeLine day={extraDetails.hours.mon} name="MON"/>
					<TimeLine day={extraDetails.hours.tue} name="TUE"/>
					<TimeLine day={extraDetails.hours.wed} name="WED"/>
					<TimeLine day={extraDetails.hours.thu} name="THU"/>
					<TimeLine day={extraDetails.hours.fri} name="FRI"/>
					<TimeLine day={extraDetails.hours.sat} name="SAT"/>
					<TimeLine day={extraDetails.hours.sun} name="SUN"/>
				</Styled.DropMenu>
			</Styled.Line>
		</Styled.Block>
	)
}
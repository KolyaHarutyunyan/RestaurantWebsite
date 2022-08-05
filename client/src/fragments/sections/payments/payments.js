import { Container } from "./styles";
import { Typography, useModal } from "@eachbase/components";
import { Button } from "@material-ui/core";
import { Icons } from "@eachbase/theme";
import { MODAL_NAMES } from "@eachbase/constants";
import { useRouter } from "next/router";

export const Payments = ({ type }) => {
  const router = useRouter();
  const { open } = useModal();
  const token = typeof window !== "undefined" && localStorage.getItem("token");

  const handleStart = ( price ) => {
    if (token) {
      // history.push(`/restaurants/${restaurantId}/${data._id}`)
      router.push(`/checkout?price=${price}`)
      // const accessLink = `${DOMAIN_NAME}/menu?accessid=${business.id}`;
    } else {
      open(MODAL_NAMES.SIGN_IN);
    }
  };

  return (
    <Container>
      <div  className={type ==='plans' ? 'small-wrapper' : 'wrapper'}>
        <div>
        <Typography weight="bold" className="g-title" color="text" size="3rem">
          {type ==='plans' ? 'Plans and pricing' : 'Ready to get started?' }
        </Typography>
        {type !=='plans' &&
        <Typography color="text" className="descr">
          Start for free today. We have plans for every size of businesses.
        </Typography>
        }
        <div style={type ==='plans' ? {marginTop:'24px'} : {}} className="cards-wrapper">
          <div className="card">
            <p className="title">Starter</p>
            <p className="sub-title">The quickest and easiest way to try Menumango</p>
            <p className="type">Free</p>
            <Button className="get-button" onClick={()=> handleStart('free')}>Get Started</Button>
            <ul className="packages">
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>Simple menu (like us picture)</p>
              </li>
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>10 FREE Contactless Cards</p>
              </li>
            </ul>
          </div>
          <div className="card">
            <p className="title">Standart</p>
            <p className="sub-title">The quickest and easiest way to try Menumango</p>
            <p className="type">$25 <span style={{ color: "lightgray", fontSize: "16px" }}>/MO</span></p>
            <Button className="get-button" onClick={()=> handleStart('25')}>Get Started</Button>
            <ul className="packages">
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>Menu list with items
                  (description ,ingredients)</p>
              </li>
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>Feedback</p>
              </li>
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>Analytics</p>
              </li>
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>Recommendation</p>
              </li>
              <li>
                <div className="svgDiv"><Icons.CheckPayment /></div>
                <p>20 FREE Contactless Cards</p>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
};
import { Container } from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";

export const Footer = () => {
  const router = useRouter();

  const [fix, setFix] = useState(false);
  const checkType = () => {
    setFix(document.querySelector("#__next").clientHeight < window.innerHeight);
  };

  useEffect(() => {
    checkType();
    window.addEventListener("resize", checkType);
    return () => window.removeEventListener("resize", checkType);
  }, [router.pathname]);

  const handlePush = (ev) => {
    if (ev === "termsAndConditions") {
      window.location.replace("/termsAndConditions");
      // router.push("/termsAndConditions")
    } else if (ev === "privacyPolicy") {
      window.location.replace("/privacyPolicy");
      // router.push("/privacyPolicy")
    } else if (ev === "contactUs") {
      window.location.replace("/contactUs");
    } else return;
  };
  return (
    <Container>
      <div className="container-footer">
        <div className="copyright">© 2021 Menuz. All Rights Reserved.</div>
        <a className="contact-us-link" onClick={() => handlePush("contactUs")}>
          {"Contact Us"}
        </a>
        <div className="links">
          <a onClick={() => handlePush("termsAndConditions")}>
            {"Terms & Conditions"}
          </a>
          <a onClick={() => handlePush("privacyPolicy")}>{"Privacy Policy"}</a>
          <a onClick={() => handlePush("contactUs")}>{"Contact Us"}</a>
        </div>
        <div className="logo-container">
          <Icons.FooterIcon />
        </div>
      </div>
    </Container>
  );
};

import { Container } from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";
import { useModal } from "@eachbase/components";
import { MODAL_NAMES } from "@eachbase/constants";

export const Footer = () => {
  const router = useRouter();

  const { open } = useModal();

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
    } else return;
  };

  const handleContactUsClick = (e) => {
    e.preventDefault();
    open(MODAL_NAMES.CONTACT_US);
  };

  return (
    <Container>
      <div className="container-footer">
        <div className="copyright">© 2022 Menuz. All Rights Reserved.</div>
        <a className="contact-us-link" onClick={handleContactUsClick}>
          {"Contact Us"}
        </a>
        <div className="links">
          <a onClick={() => handlePush("termsAndConditions")}>
            {"Terms & Conditions"}
          </a>
          <a onClick={() => handlePush("privacyPolicy")}>{"Privacy Policy"}</a>
          <a onClick={handleContactUsClick}>{"Contact Us"}</a>
        </div>
        <div className="logo-container">
          <Icons.FooterIcon />
        </div>
      </div>
    </Container>
  );
};

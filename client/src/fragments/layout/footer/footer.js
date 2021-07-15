import { Container } from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Icons } from "@eachbase/theme";
import Link from "next/link";

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

  return (
    <Container>
      <div className="container-footer">
        <div className="copyright">© 2021 Menuz. All Rights Reserved.</div>
        <div className="links">
          <Link href="/">
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </div>
        <div className="logo-container">
          <Icons.FooterIcon/>
          {/*<p>Menuz</p>*/}
        </div>
      </div>
    </Container>
  );
};

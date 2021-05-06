import { Style } from "./core";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { STYLED } from "@eachbase/theme";
import { Icon } from "@eachbase/components";
import { CONSTANTS } from "@eachbase/constants";
import Link from "next/link";

export const Footer = () => {
  let router = useRouter();

  const [fix, setFix] = useState(false);
  let checkType = () => {
    setFix(document.querySelector("#__next").clientHeight < window.innerHeight);
  };
  useEffect(() => {
    checkType();
    window.addEventListener("resize", checkType);
    return () => window.removeEventListener("resize", checkType);
  }, [router.pathname]);

  return (
    <Style.Footer fix={fix}>
      <Style.Content>
        <Style.CopyRight className="copyRight">
          © 2021 Menuz. All Rights Reserved.
        </Style.CopyRight>
        <Style.Infos className="infos">
          <Link href={"/"}>
            <a>Terms & Conditions</a>
          </Link>
          <hr />
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
        </Style.Infos>
        <Style.Logo>
          <Icon name={CONSTANTS.SVGNames.LogoWhite} />
          <p>Menuz</p>
        </Style.Logo>
      </Style.Content>
    </Style.Footer>
  );
};

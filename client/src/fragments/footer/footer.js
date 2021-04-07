import { Styled } from "./core"
import { useEffect, useState } from "react";
import {useRouter} from "next/router"
import { STYLED } from "@eachbase/theme";
import { Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";
import Link from "next/link"

export const Footer = (props) => {
  console.log(props)
  let router = useRouter()
  console.log(router)
  let [fix, setFix] = useState(false)
  let checkType = () => {
    setFix(document.querySelector("#__next").clientHeight < window.innerHeight)
  }
  useEffect(() => {
    checkType()
    window.addEventListener("resize",checkType)
    return ()=>window.removeEventListener("resize",checkType)
  },[router.pathname])

  return (
    <Styled.Footer fix={fix}>
      <STYLED.Container>
        <Styled.Content >
          <Styled.CopyRight className='copyRight'>© 2021 Menuz. All Rights Reserved.</Styled.CopyRight>
          <Styled.Infos className='infos'>
            <Link href={"/"}>
              <a>Terms & Conditions</a>
            </Link>
            <hr/>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </Styled.Infos>
          <Styled.Logo>
            <Icon name={SVGNames.LogoWhite}/>
            <p>Menuz</p>
          </Styled.Logo>
        </Styled.Content>

      </STYLED.Container>
    </Styled.Footer>
  )
}

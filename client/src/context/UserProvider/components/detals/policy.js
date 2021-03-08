import { memo } from "react";
import { PolicyBlock } from "./formBuilder/styles/style";

export const Policy = memo(
  ({goToAgree=()=>{},goToPrivacy=()=>{}}) => {
    return (
      <PolicyBlock>By signing up, you agree to
        <span className="agree" onClick={goToAgree}>Terms of Use</span> and
        <span className="privacy" onClick={goToPrivacy}>Privacy Policy</span>
      </PolicyBlock>
    )
  }
)
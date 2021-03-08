import { memo } from "react";
import Icon from "../../../../components/icon";
import { SocialBlock } from "./formBuilder/styles/style";

export const Socials = memo(
  ({data})=>{
    return(
      <SocialBlock>
        <p>{data.title}</p>
<div className="icons">
        {
          data.icons.map((item,i)=>
            <a key={i} href={item.link}>
              <Icon name={item.icon}/>
            </a>
          )
        }
</div>
      </SocialBlock>
    )
  }
)
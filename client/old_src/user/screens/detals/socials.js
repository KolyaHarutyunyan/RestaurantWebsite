import { memo } from "react"
import { SocialBlock } from "../styles/screens.style"
import Icon from "../../../components/icon"


export const Socials = memo(
  ( {data} ) =>
    <SocialBlock>
      <p>{data.title}</p>
      <div className="icons">
        {
          data.icons.map(( item, i ) =>
            <a key={i} href={item.link}>
              <Icon name={item.icon}/>
            </a>
          )
        }
      </div>
    </SocialBlock>
)
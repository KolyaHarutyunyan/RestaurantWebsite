import { memo } from "react"
import Link from "next/link"
import header from "../../../../cms/header.json"

export const Logo = memo(
  ( {className,data})=>{
    return (
      <Link href="/" >
        <a className={className}>
          <img {...header.logo} />
          {header.title}
        </a>
      </Link>
    )
  }
)
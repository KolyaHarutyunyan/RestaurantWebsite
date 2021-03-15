import { memo } from "react"
import Link from "next/link"
import { header } from "./costants"

export const Logo = memo(
  ( {className} ) =>
    <Link href="/">
      <a className={className}>
        <img {...header.logo} />
        {header.title}
      </a>
    </Link>
)
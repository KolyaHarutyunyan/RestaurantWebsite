import Link from "next/link";
import { header } from ".";

export const Logo = ({ className }) => (
  <Link href="/">
    <a className={className}>
      <img {...header.logo} />
      {header.title}
    </a>
  </Link>
);

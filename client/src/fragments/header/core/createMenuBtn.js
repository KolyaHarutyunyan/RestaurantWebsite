import { memo } from "react";
import Link from "next/link";
import { Pages } from "../../../utils/pages";
import { Button } from "@material-ui/core";

export const CreateMenuBtn = memo(
  ({className,isAuthed,handlerClick=()=>{}})=>
    isAuthed
      ? <Link href={Pages.createMenu.href}>
        <a className={className}>{Pages.createMenu.title}</a>
      </Link>
      : <Button className={className} onClick={handlerClick}>{Pages.createMenu.title}</Button>

)
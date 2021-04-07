import { memo } from "react"
import { Button } from "@material-ui/core"
import Link from "next/link"
import { Pages } from "@eachbase/constants"





export const CreateMenu = memo(
  ({isAuthed,className,handlerClick})=> isAuthed
    ? <Link href={Pages.createMenu.href}>
      <a className={className}>{Pages.createMenu.title}</a>
    </Link>
    : <Button className={className} onClick={handlerClick}>{Pages.createMenu.title}</Button>

)
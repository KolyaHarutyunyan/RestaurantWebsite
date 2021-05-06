import { Button } from "@material-ui/core";
import Link from "next/link";
import { CONSTANTS } from "@eachbase/constants";

export const CreateMenu = ({ isAuthed, className, handlerClick }) =>
  isAuthed ? (
    <Link href={CONSTANTS.Pages.createMenu.href}>
      <a className={className}>{CONSTANTS.Pages.createMenu.title}</a>
    </Link>
  ) : (
    <Button className={className} onClick={handlerClick}>
      {CONSTANTS.Pages.createMenu.title}
    </Button>
  );

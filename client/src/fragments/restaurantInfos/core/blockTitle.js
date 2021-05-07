import { Styled } from ".";
import { Button } from "@eachbase/components";

export const BlockTitle = ({ logo, hasLogo = false, title, editAction }) => {
  return (
    <>
      {hasLogo && <Styled.Logo bgi={logo}>{!logo && "ICON"}</Styled.Logo>}
      <Styled.BlockTitle hasLogo={hasLogo}>
        <div className="title">{title}</div>
        <Button.Accept className={"editBtn"} onClick={editAction}>
          Edit
        </Button.Accept>
      </Styled.BlockTitle>
    </>
  );
};

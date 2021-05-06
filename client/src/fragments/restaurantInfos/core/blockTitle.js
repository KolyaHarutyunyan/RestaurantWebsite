import { Styled } from ".";
import { Button, Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";

export const BlockTitle = ({ logo, hasLogo = false, title, editAction }) => {
  return (
    <>
      {hasLogo && (
        <Styled.Logo bgi={logo}>
          {!logo && <Icon name={SVGNames.Build} />}
        </Styled.Logo>
      )}
      <Styled.BlockTitle hasLogo={hasLogo}>
        <div className="title">{title}</div>
        <Button.Accept className={"editBtn"} onClick={editAction}>
          Edit
        </Button.Accept>
      </Styled.BlockTitle>
    </>
  );
};

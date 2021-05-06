import { Styled } from "./style";
import { Icon } from "@eachbase/components";
import { SVGNames } from "@eachbase/constants";

export const ActionBtn = ({ onClick, className, type, text = false }) => {
  return (
    <Styled.ActionBtn
      className={className}
      remove={type === "remove"}
      onClick={onClick}
    >
      <Icon name={type === "remove" ? SVGNames.Delete : SVGNames.Edit} />
      <div className="btnTitle">
        {text ? text : type === "remove" ? "Delete" : "Edit"}
      </div>
    </Styled.ActionBtn>
  );
};

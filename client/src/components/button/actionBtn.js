import { Styled } from "./style";
import { Icons } from "@eachbase/components";

export const ActionBtn = ({ onClick, className, type, text = false }) => {
  return (
    <Styled.ActionBtn
      className={className}
      remove={type === "remove"}
      onClick={onClick}
    >
      icon
      <div className="btnTitle">
        {text ? text : type === "remove" ? "Delete" : "Edit"}
      </div>
    </Styled.ActionBtn>
  );
};

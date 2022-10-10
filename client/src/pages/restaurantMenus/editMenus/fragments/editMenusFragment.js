import { StyledEditMenus } from "./style";
import { editMenusBreadcrumbs, editMenusTabs } from "./constants";
import { MuiBreadcrumbs, MuiTabs, MyButton } from "@eachbase/components";
import Router, { useRouter } from "next/router";
import { Images } from "@eachbase/theme/images";

export const EditMenusFragment = () => {
  const router = useRouter();

  return (
    <StyledEditMenus>
      <div className="edit-menus-header">
        <MuiBreadcrumbs breadcrumbs={editMenusBreadcrumbs} />
        <MyButton
          buttonType={"button"}
          buttonClassName={"preview-button"}
          onClickButton={() =>
            Router.push(`/preview?menuId=${router.query.menuId}`)
          }
        >
          Preview
        </MyButton>
      </div>
      <div className="edit-menus-nav">
        <MyButton
          buttonType={"button"}
          buttonClassName={"add-menu-item-button"}
          onClickButton={() => {}}
        >
          <Images.AddIcon /> Add New Menu Item
        </MyButton>
        <MuiTabs className={"edit-menus-tabs"} tabs={editMenusTabs} />
      </div>
    </StyledEditMenus>
  );
};

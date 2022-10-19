import { useEffect } from "react";
import { StyledEditMenus } from "./style";
import { editMenusTabs, getMenusBreadcrumbs } from "./constants";
import { Button, MuiBreadcrumbs, MuiTabs } from "@eachbase/components";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { menusActions, useSagaStore } from "@eachbase/store";

export const EditMenusFragment = () => {
  const menu = useSelector((state) => state.menus.menuById);

  const restaurantMenuSaga = useSagaStore(menusActions.getBusinessMenu);

  const router = useRouter();

  const menuId = router.query.menuId;

  useEffect(() => {
    if (menuId) {
      restaurantMenuSaga.dispatch(menuId);
    }
  }, [menuId]);

  const handlePreview = () => Router.push(`/preview?menuId=${menuId}`);

  return (
    <StyledEditMenus>
      <div className="edit-menus-header">
        <MuiBreadcrumbs breadcrumbs={getMenusBreadcrumbs(menu?.name)} />
        <Button square fullWidth maxWidth={"176px"} onClick={handlePreview}>
          Preview
        </Button>
      </div>
      <div className="edit-menus-nav">
        <MuiTabs className={"edit-menus-tabs"} tabs={editMenusTabs} />
      </div>
    </StyledEditMenus>
  );
};

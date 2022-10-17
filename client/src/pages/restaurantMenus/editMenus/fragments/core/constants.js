export const CATEGORY_FORM = "CATEGORY_FORM";
export const PRODUCT_FORM_ADD = "PRODUCT_FORM_ADD";
export const PRODUCT_FORM_EDIT = "PRODUCT_FORM_EDIT";

export const getFormCardTitle = (label = "") => {
  switch (label) {
    case CATEGORY_FORM:
      return "Edit Category";
    case PRODUCT_FORM_ADD:
      return "Add Menu Items";
    case PRODUCT_FORM_EDIT:
      return "Edit Menu Item";

    default:
      return label;
  }
};

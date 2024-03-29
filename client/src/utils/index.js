export { initAxiosInterceptors } from "./axios";
export { useOutsideAlerter } from "./hooks";
export { EmailValidator } from "./validations";
export { FindError } from "./findError";
export { FindSuccess } from "./findSuccess";
export { FindLoad } from "./findLoad";
export { ImgUploader } from "./imgUploader";
export {
  SideSheetsDrawerContext,
  SideSheetsDrawerContextProvider,
  TabItemsContext,
  TabItemsContextProvider,
} from "./contexts";
export { useFileUpload, useWidth } from "./customHooks";
export { getLimitedVal } from "./getLimitedVal";
export { handleOptionalField } from "./handleOptionalField";

export const userInfo =
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("menuUser"));

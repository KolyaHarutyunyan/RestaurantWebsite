import { getLimitedVal } from "@eachbase/utils";

export const getItemName = (width, name) => {
  return width <= 768 ? getLimitedVal(name) : getLimitedVal(name, 20);
};

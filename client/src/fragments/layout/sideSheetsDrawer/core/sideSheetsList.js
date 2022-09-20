import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { addActive, sideSheetsList } from "./constants";
import { SideSheetsDrawerContext } from "@eachbase/utils";
import { addClosed } from "../constants";

export const SideSheetsList = () => {
  const { open } = useContext(SideSheetsDrawerContext);
  const router = useRouter();
  const [isShown, setIsShown] = useState(false);

  const {
    location: { pathname },
  } = window;

  const handleItemClick = (item) => {
    if (item.path) {
      router.push(item.path);
    } else {
      if (open) {
        setIsShown((pS) => !pS);
      } else {
        router.push(item.pages[0].path);
      }
    }
  };

  return (
    <ul className="side-sheets-list">
      {sideSheetsList.map((sideSheetItem, index) => (
        <li key={index} className="side-sheet-item">
          <div
            className={addClosed(
              `side-sheet-item-button ${addActive(sideSheetItem, pathname)}`,
              !open
            )}
            onClick={() => handleItemClick(sideSheetItem)}
          >
            <div className="side-sheet-item-icon">{sideSheetItem.icon}</div>
            <span className={addClosed("side-sheet-item-text", !open)}>
              {sideSheetItem.text}
            </span>
          </div>
          {sideSheetItem.pages && (
            <ul className="page-list">
              {sideSheetItem.pages.map((page, index) => (
                <li key={index} className="page-item">
                  <span className={addClosed("side-sheet-item-text", !open)}>
                    {page.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

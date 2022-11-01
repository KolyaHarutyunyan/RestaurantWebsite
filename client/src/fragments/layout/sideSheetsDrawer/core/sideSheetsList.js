import React, { useContext, useState } from "react";
import Router from "next/router";
import { addActive, sideSheetsList } from "./constants";
import { SideSheetsDrawerContext } from "@eachbase/utils";
import { addClosed } from "../constants";
import { Images } from "@eachbase/theme/images";

export const SideSheetsList = ({ handleMenuClose }) => {
  const { open } = useContext(SideSheetsDrawerContext);
  const [isShown, setIsShown] = useState(false);

  const {
    location: { pathname },
  } = window;

  const handleSideSheetClick = (item) => {
    if (item.path) {
      if (pathname === item.path) return;
      Router.push(item.path);
      handleMenuClose && handleMenuClose();
    } else {
      if (open) {
        setIsShown((pS) => !pS);
      } else {
        if (pathname === item.pages[0].path) return;
        Router.push(item.pages[0].path);
      }
    }
  };

  return (
    <ul className="side-sheets-list">
      {sideSheetsList.map((sideSheetItem, index) => (
        <li key={index} className="side-sheet-item">
          <div
            className={addClosed(
              `side-sheet-item-button ${
                open && isShown ? "shown" : ""
              } ${addActive(sideSheetItem, pathname)}`,
              !open
            )}
            onClick={() => handleSideSheetClick(sideSheetItem)}
          >
            <div className="side-sheet-item-icon">{sideSheetItem.icon}</div>
            <span className={addClosed("side-sheet-item-text", !open)}>
              {sideSheetItem.text}
            </span>
            {sideSheetItem.pages && <Images.Arrow className="arrow" />}
          </div>
          {sideSheetItem.pages && isShown && (
            <ul className="page-list">
              {sideSheetItem.pages.map((page, index) => (
                <li
                  key={index}
                  className={addClosed(
                    `page-item ${addActive(page, pathname)}`,
                    !open
                  )}
                  onClick={() => handleSideSheetClick(page)}
                >
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

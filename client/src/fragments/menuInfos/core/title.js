import { Styled } from "./style";
import Link from "next/link";
import { Typography, Switch, Button } from "@eachbase/components";
import { useContext } from "react";

export const Title = ({ title, id, status, changeStatus }) => {
  return (
    <>
      <Styled.Navigator>
        <Link href={"/restaurant"}>
          <a>restaurant</a>
        </Link>
        ICON Menu
      </Styled.Navigator>
      <Styled.Title status={status}>
        <Typography>Menu</Typography>
        <div className="ctrl">
          <Button
            type={"remove"}
            className={"action remove"}
            onClick={() => openModal.removeMenu({ id })}
            text={"Delete Menu"}
          />

          <div className="action status">
            <Switch onClick={changeStatus} status={status} />
            <p className="text">{status ? "Deactivate" : "Activate"}</p>
          </div>
        </div>
      </Styled.Title>
    </>
  );
};

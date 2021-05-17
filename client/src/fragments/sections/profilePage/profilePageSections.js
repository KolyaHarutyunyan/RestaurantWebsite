import { Fragment } from "react";
import { Title } from "./title";
import { PrimaryInfo } from "./primaryInfo";
import { Privacy } from "./privacy";
import { DeleteAccount } from "./deleteAccount";
export const ProfilePageSections = () => {
  return (
    <Fragment>
      <Title />
      <PrimaryInfo />
      <Privacy />
      <DeleteAccount />
    </Fragment>
  );
};

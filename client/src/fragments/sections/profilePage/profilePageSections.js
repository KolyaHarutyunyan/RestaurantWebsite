import { Fragment } from "react";
import { Title } from "./title";
import { PrimaryInfo } from "./primaryInfo";
import { Privacy } from "./privacy";
import { DeleteAccount } from "./deleteAccount";
import { useSelector } from "react-redux";
export const ProfilePageSections = () => {
  const profile = useSelector(({ profile }) => profile);

  if (profile) {
    return (
      <Fragment>
        <Title />
        <PrimaryInfo />
        <Privacy />
        <DeleteAccount />
      </Fragment>
    );
  }
  return null;
};

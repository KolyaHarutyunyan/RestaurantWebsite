import { Fragment } from "react";
import { Title } from "./title";
import { PrimaryInfo } from "./primaryInfo";
import { Privacy } from "./privacy";
import { DeleteAccount } from "./deleteAccount";
import { useSelector } from "react-redux";
import {Container} from "./style";
export const ProfilePageSections = () => {
  const profile = useSelector(({ profile }) => profile);

  if (profile) {
    return (
      <Container>
        <Title />
        <PrimaryInfo />
        <Privacy />
        <DeleteAccount />
      </Container>
    );
  }
  return null;
};

import Head from "next/head";
import { Fragment } from "react";
import { ProfilePage } from "@eachbase/pages";

export default function Profile(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      {/* <ProfilePage {...props.pageData}/> */}
      <div>Profile Page</div>
    </Fragment>
  );
}

Profile.getInitialProps = async () => {
  let res = { meta: `<title>inchvor ban</title>`, pageData: null };
  return { ...res };
};

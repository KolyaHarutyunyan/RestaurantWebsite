import Head from "next/head";
import { ProfilePage } from "@eachbase/pages";

export default function Profile(props) {
  return (
    <>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      {/* <ProfilePage {...props.pageData}/> */}
      <div>Profile Page</div>
    </>
  );
}

Profile.getInitialProps = async () => {
  let res = { meta: `<title>inchvor ban</title>`, pageData: null };
  return { ...res };
};

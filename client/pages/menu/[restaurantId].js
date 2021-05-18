import { Fragment } from "react";
import Head from "next/head";
import { MenuPage } from "@eachbase/pages";

export default function Restaurant(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      <MenuPage {...props.pageData} />
    </Fragment>
  );
}

Restaurant.getInitialProps = async () => {
  return { meta: null, pageData: null };
};

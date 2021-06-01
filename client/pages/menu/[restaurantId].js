import { Fragment } from "react";
import Head from "next/head";
import { MenuPage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
export default function Restaurant(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      <Layout>
        <MenuPage {...props.pageData} />
      </Layout>
    </Fragment>
  );
}

Restaurant.getInitialProps = async () => {
  return { meta: null, pageData: null };
};

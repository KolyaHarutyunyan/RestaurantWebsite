import { Fragment } from "react";
import Head from "next/head";
import { MenuPage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
export default function Menu(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <Layout>
        <MenuPage {...props.pageData} />
      </Layout>
    </Fragment>
  );
}

Menu.getInitialProps = async () => {
  return { meta: null, pageData: null };
};

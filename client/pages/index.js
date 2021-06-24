import { Fragment } from "react";
import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
import { resetServerContext } from "react-beautiful-dnd";
export default function Home(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <Layout>
        <HomePage {...props.pageData} />
      </Layout>
    </Fragment>
  );
}

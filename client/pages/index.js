import { Fragment } from "react";
import Head from "next/head";
import { HomePage } from "@eachbase/pages";

export default function Home(props) {
  return (
    <Fragment>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <HomePage {...props.pageData} />
    </Fragment>
  );
}

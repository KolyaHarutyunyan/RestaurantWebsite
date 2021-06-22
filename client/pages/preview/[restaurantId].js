import { Fragment } from "react";
import { PreviewPage } from "@eachbase/pages";
import Head from "next/head";

export default function Preview(props) {
  return (
    <Fragment>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      <PreviewPage {...props.pageData} />
    </Fragment>
  );
}

Preview.getInitialProps = async () => {
  return { meta: null, pageData: null };
};

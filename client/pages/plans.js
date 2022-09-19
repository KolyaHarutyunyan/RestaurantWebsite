import {Fragment} from "react";
import Head from "next/head";
import { Layout } from "@eachbase/fragments";
import { PlansAndPrices } from "@eachbase/pages";

export  const  Plans = (props) => {
  return (
    <Fragment>
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <Layout>
        <PlansAndPrices/>
      </Layout>
    </Fragment>
  );
}

export default Plans;
import { Fragment } from "react";
import Head from "next/head";
import { PlansAndPrices } from "@eachbase/pages";

export const Plans = (props) => {
  return (
    <Fragment>
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <PlansAndPrices />
    </Fragment>
  );
};

export default Plans;

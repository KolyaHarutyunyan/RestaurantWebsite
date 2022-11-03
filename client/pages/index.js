import { Fragment, useEffect } from "react";
import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { businessesActions, useSagaStore } from "../src/store";
import { useSelector } from "react-redux";

export default function Home(props) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  const getBusinessesSaga = useSagaStore(businessesActions.getBusinesses);
  const restaurant = useSelector((state) => state.businesses);

  useEffect(() => {
    if(token) {
      getBusinessesSaga.dispatch();
    }
  }, [token]);

  return (
    <Fragment>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      {!restaurant && <HomePage {...props.pageData} />}
    </Fragment>
  );
}

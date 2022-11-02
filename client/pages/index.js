import { Fragment, useEffect } from "react";
import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { useRouter } from "next/router";

export default function Home(props) {
  const token = typeof window !== "undefined" && localStorage.getItem("token");
  // const route = useRouter();

  // useEffect(() => {
  //   if(token){
  //     route.push("/menus");
  //     // window.location.replace('/menus')
  //   }
  // }, [token]);

  return (
    <Fragment>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>

      {!token && <HomePage {...props.pageData} />}
    </Fragment>
  );
}

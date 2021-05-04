import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { GlobalScss } from "@eachbase/theme";

export default function Home(props) {
  return (
    <>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      <GlobalScss />
      <HomePage {...props.pageData} />
    </>
  );
}

Home.getInitialProps = async () => {
  let res = { meta: null, pageData: null };
  return { ...res };
};

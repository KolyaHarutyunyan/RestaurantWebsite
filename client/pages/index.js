import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
export default function Home(props) {
  return (
    <>
      <Head>{props.meta || <title>welcome menuz</title>}</Head>
      <Layout>
        <HomePage {...props.pageData} />
      </Layout>
    </>
  );
}

Home.getInitialProps = async () => {
  let res = { meta: null, pageData: null };
  return { ...res };
};

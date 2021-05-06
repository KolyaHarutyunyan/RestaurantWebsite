import Head from "next/head";
import { RestaurantPage } from "@eachbase/pages";

export default function Restaurant(props) {
  return (
    <>
      <Head>{props.meta || <title>"welcome menuz"</title>}</Head>
      <RestaurantPage {...props.pageData} />
    </>
  );
}

Restaurant.getInitialProps = async () => {
  let res = { meta: null, pageData: null };
  return { ...res };
};

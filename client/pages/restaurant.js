import { Layout } from "@eachbase/fragments";
import { RestaurantProfile } from "@eachbase/pages";

const Restaurant = () => {
  return (
    <Layout>
      <RestaurantProfile />
    </Layout>
  );
};

export default Restaurant;

// import { Fragment } from "react";
// import Head from "next/head";
// import { RestaurantPage } from "@eachbase/pages";
// import { Layout } from "@eachbase/fragments";

// export default function Restaurant(props) {
//   return (
//     <Fragment>
//       <Head>{props.meta || <title>welcome menuz</title>}</Head>
//       <Layout>
//         <RestaurantPage {...props.pageData} />
//       </Layout>
//     </Fragment>
//   );
// }

// Restaurant.getInitialProps = async () => {
//   return { meta: null, pageData: null };
// };

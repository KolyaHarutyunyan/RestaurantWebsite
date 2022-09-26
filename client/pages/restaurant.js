import { RestaurantProfile } from "@eachbase/pages";

const Restaurant = () => {
  return <RestaurantProfile />;
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
//       <RestaurantPage {...props.pageData} />
//     </Fragment>
//   );
// }

// Restaurant.getInitialProps = async () => {
//   return { meta: null, pageData: null };
// };

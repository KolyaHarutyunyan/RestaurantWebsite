import { Fragment, useEffect } from "react";
import Head from "next/head";
import { HomePage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
import { CardElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

export default function Home(props) {
  const stripePromise = loadStripe(
    "pk_test_51LPm9qL4pro3KzC9ZdcZLKSOQuZCwacegagY17KtxY8QlRxecUhIriHncjwUVLsffspIhIEUcEYWRVDL9YP0KMLy00PslKiMpN"
  );

  const handleSubmit = async (e) => {};

  return (
    <Fragment>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="apple-touch-icon" href="favicon.ico" />

      {/*<form action="" style={{width:'400px', height:'500px', marginTop:'100px'}}*/}
      {/*   onSubmit={handleSubmit}*/}
      {/*>*/}
      {/*  <label htmlFor={'card-element'}>Card</label>*/}
      {/*  <Elements stripe={stripePromise}>*/}
      {/*    <CardElement id={'card-element'}/>*/}
      {/*  </Elements>*/}
      {/*  <button type={'submit'}>Pay</button>*/}
      {/*</form>*/}

      <Head>{props.meta || <title>Welcome menuz</title>}</Head>
      <Layout>
        <HomePage {...props.pageData} />

        {/*<Elements stripe={stripePromise} options={options}>*/}
        {/*  <PaymentElement />*/}
        {/*</Elements>*/}

        {/*<h1>asdasd</h1>*/}
        {/*<button onClick={() => checkout({*/}
        {/*  lineItems: [*/}
        {/*    {*/}
        {/*      price: "price_1LPmbbL4pro3KzC99gEIvIwb",*/}
        {/*      quantity: 1*/}
        {/*    }*/}
        {/*  ]*/}
        {/*})}>aaaa*/}
        {/*</button>*/}
      </Layout>
    </Fragment>
  );
}
// export const getServerSideProps = async ({ query }) => {
//   return { props: { data: [] } };
// };

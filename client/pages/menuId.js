import { Fragment } from "react";
import Head from "next/head";
import { MenuPage } from "@eachbase/pages";

export const Menu = (props) => {
  return (
    <Fragment>
      <Head>{props.meta || <title>Welcome menuz</title>}</Head>

      {/*<MenuPage {...props.pageData} />*/}
    </Fragment>
  );
};

export default Menu;

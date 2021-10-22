import {Fragment} from "react";
import Head from "next/head";
import { Layout } from "@eachbase/fragments";
import {MenuPage} from "@eachbase/pages";

export  const  Menu = (props) => {
    return (
        <Fragment>
            <Head>{props.meta || <title>Welcome menuz</title>}</Head>
            <Layout>
                <MenuPage {...props.pageData} />
            </Layout>
        </Fragment>
    );
}

export default Menu;
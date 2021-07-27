import { Fragment } from "react";
import Head from "next/head";
import { UserMenuPage } from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
export default function UserMenu(props) {
    return (
        <Fragment>
            <Head>{props.meta || <title>Welcome</title>}</Head>
            <Layout>
                <UserMenuPage {...props.pageData} />
            </Layout>
        </Fragment>
    );
}

UserMenu.getInitialProps = async () => {
    return { meta: null, pageData: null };
};

import {Fragment, useEffect} from "react";
import Head from "next/head";
import {PreviewPage, RestaurantPage} from "@eachbase/pages";
import { Layout } from "@eachbase/fragments";
import PrivacyPolicy from "./privacyPolicy";
import {menusActions} from "../src/store";
import {useRouter} from "next/dist/client/router";
import {useDispatch} from "react-redux";

export  const  Preview = (props) => {
    // To
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(() => {
        if(router.query.menuId) {
            dispatch(menusActions.getBusinessMenu(router.query.menuId));
        }
    }, [router.query.menuId,]);
    //
    return (
        <Fragment>
            <Head>{props.meta || <title>welcome menuz</title>}</Head>
            <PreviewPage {...props.pageData} />
        </Fragment>
    );
}

export default Preview;
// Restaurant.getInitialProps = async () => {
//     return { meta: null, pageData: null };
// };

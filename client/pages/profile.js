import Head from "next/head"
import {  ProfilePage } from "@eachbase/pages"

export default function Profile (props) {

  return (
    <>
      <Head>
        {props.meta || <title>"welcome menuz"</title>}
      </Head>
      <ProfilePage {...props.pageData}/>

    </>
  )
}

Profile.getInitialProps = async () => {
  let res = {meta: null, pageData: null}
  return {...res}
}

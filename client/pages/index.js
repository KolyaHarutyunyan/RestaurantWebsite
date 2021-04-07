import Head from 'next/head'
import { HomePage } from "@eachbase/pages"


export default function Home(props) {
  return (
    <>
      <Head>
        {props.meta || <title>welcome menuz</title>}
      </Head>
      <HomePage {...props.pageData}/>
    </>
  )
}

Home.getInitialProps = async () => {
  let res = {meta: null, pageData: null}
  return {...res}
}

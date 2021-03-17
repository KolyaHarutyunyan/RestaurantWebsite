import Head from 'next/head'
import { HomePage } from "@eachbase/pages"
import { useGlobalStyles } from "@eachbase/theme"

export default function Home( props ) {
  let classes = useGlobalStyles()
  return (
    <>
      <Head>
        {props.meta || <title>"welcome menuz"</title>}
      </Head>

      <main className={classes.main}>
        <HomePage {...props.pageData}/>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  let res = {meta: null, pageData: null}
  return {...res}
}

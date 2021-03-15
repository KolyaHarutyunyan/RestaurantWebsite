import Head from 'next/head'
import { HomePage } from "../src/pages"
import useGlobalStyles from "../src/theme/globalStyles";

export default function Home( props ) {
  let classes = useGlobalStyles()
  return (
    <div>
      <Head>
        <title>{props.meta || "welcome menuz"}</title>
      </Head>

      <main className={classes.main}>
        <HomePage {...props.pageData}/>
      </main>
    </div>
  )
}

Home.getInitialProps = async () => {
  let res = {meta: null, pageData: null}
  return {...res}
}

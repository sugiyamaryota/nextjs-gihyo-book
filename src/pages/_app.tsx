import type { AppProps } from 'next/app'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: applesystem,BlinkMacSystemFont,SegoeUI,Roboto,Oxygen,Ubuntu,Cantarell,FiraSans,DroidSans,HelveticaNeue,sansserif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    text-decoration: none;
    transition: .25s;
    color: #000;
  }
  ol,ul {
    list-style: none;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=devicewidth,initialscale=1,shrinktofit=no,maximumscale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/images/landing/looplogo.svg" />
        <title>Loop</title>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

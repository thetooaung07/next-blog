import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>


        <div id="notifications"></div>
      </Html>
    );
  }
}

export default MyDocument;
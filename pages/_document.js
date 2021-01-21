import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <meta charSet="utf-8" /> */}
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="icon" type="image/png" href={require("../static/images/favicon.png")}></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
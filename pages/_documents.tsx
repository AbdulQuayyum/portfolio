import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="MERN Stack looking for a job"
          />
          <meta
            name="keywords"
            content="Full Stack Web Developer, Freelancer, MERN Stack Developer, JavaScript Developer, Alao Abdul-Quayyum, Alao, Abdul-Quayyum, Mobile Developer, How to create a portfolio, portfolio designs, portfolio, flutter, javascript, react-native, react.js"
          />

        </Head>
        <body className="bg-fixed bg-gradient-to-r from-slate-400 to-slate-900 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

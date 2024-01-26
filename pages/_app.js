// pages/_app.js

import Head from "next/head";
import "../styles/global.scss";
import General from "@/context/General";

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Sanagos Safety is a leading safety supplier company dedicated to providing comprehensive safety solutions for businesses and industries nationwide. With over a decade of experience, we have established ourselves as a trusted partner, delivering high-quality safety products as well as safety training to ensure the well-being of both employees and customers."
        />

        <meta
          name="keywords"
          content=" Sanagos Safety, Sanagos, fire extinguisher,nigeria, safety boot, safety helment, fire safety, fire"
        />

        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/final/index.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        {/* <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        /> */}
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        ></link>
        <title>SANAGOS SAFETY</title>

        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      <General>
        <Component {...pageProps} />
      </General>
    </>
  );
}

export default MyApp;

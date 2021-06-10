import { useEffect, useState } from "react";
import { NextIntlProvider } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react"
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { theme } from "src/theme";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import SplashScreen from "@components/SplashScreen";

SwiperCore.use([Navigation, Pagination, A11y]);

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => { setLoading(false)}, 1500);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <NextIntlProvider messages={pageProps.messages}>
        <SplashScreen visible={loading}/>
        <Component {...pageProps} loaded={!loading}/>
      </NextIntlProvider>
    </ChakraProvider>
  )
}

export default MyApp
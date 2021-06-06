import { NextIntlProvider } from "next-intl";
import { ChakraProvider } from "@chakra-ui/react"
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { theme } from "src/theme";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </ChakraProvider>
  )
}

export default MyApp
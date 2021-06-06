
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, SimpleGrid, Text, Link } from "@chakra-ui/layout";
import TopNav from "@components/TopNav";
import NextLink from 'next/link';

import { theme } from "src/theme";

import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  return (
    <>
      <TopNav />

      <Header />
      <Activities />

      <Divider w="60px" h="2px" mx="auto" bg="gray.700"/>

      <Text
        as="h2"
        fontSize={["xl", "2xl", "3xl", "4xl"]}
        color="gray.700"
        textAlign="center"
        fontWeight={{base: "bold", md: "500"}}
        mt={{base: "6", md: 14}}
        mb={{base: "5", md: 14}}
      >
        Vamos nessa?<br/>Então escolha seu continente
      </Text>

      <Slide />
    </>
  )
}

const Header = () => (
  <Box
    bgImage="url('/img/stars.png')"
    bgSize="cover"
  >
    <Flex pos="relative" maxW="1160px" mx="auto" px={["6", "8"]} py={{base: "6", md: "80px"}} justify="space-between">
      <Box>
        <Text
          as="h1"
          fontWeight={{base: "bold", md: "medium"}}
          fontSize={{base: "xl", md: "3xl"}}
          color="gray.50"
        >
          5 Continentes,<br/>infinitas possibilidades.
        </Text>

        <Text
          color="gray.300"
          mt={{base: "2", md: "5"}}
          maxW="520"
        >
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>

      <Image pos="absolute" w="410px" right="16px" src="/img/airplane.svg" d={{base: "none", lg: "block"}}/>
    </Flex>
  </Box>
)

const Activities = () => (
  <SimpleGrid
    w="100%"
    maxW="1160"
    mx="auto"
    mt={{base: "9", md: "100px"}}
    mb={{base: "9", md: "80px"}}
    px={["6", "8"]}
    gap="8"
    minChildWidth={135}
  >
    <Activity src="/img/cocktail.svg">vida noturna</Activity>
    <Activity src="/img/surf.svg">praia</Activity>
    <Activity src="/img/building.svg">moderno</Activity>
    <Activity src="/img/museum.svg">clássico</Activity>
    <Activity src="/img/earth.svg">e mais...</Activity>
  </SimpleGrid>
)
interface ActivityProps {
  src: string;
}

const Activity: React.FC<ActivityProps> = ({src, children}) => (
  <Flex flexDir="column" align="center">
    <Image w={["60px", "85px"]} src={src} alt=""/>
    <Text mt="4" fontWeight="bold" color="gray.700" fontSize={["large", "xl"]}>{children}</Text>
  </Flex>
)

const Slide = () => (
  <Box
    maxW="1160px"
    mx="auto"
    mb="8"
    sx={{
      ".swiper-container": {
        "--swiper-navigation-color": theme.colors.brand[500],
        "--swiper-pagination-color": theme.colors.brand[500],
        "--swiper-navigation-size": "32px",
      },

      ".swiper-button-next": {
        right: {base: "32px", md: "64px"}
      },

      ".swiper-button-prev": {
        left: {base: "32px", md: "64px"}
      },

      ".swiper-pagination-bullet:not(.swiper-pagination-bullet-active)": {
        background: theme.colors.gray[300],
      }
    }}
  >
    <Swiper
      navigation
      pagination={{ clickable: true }}
      color="brand.500"
    >
      <SwiperSlide>
        <SlideItem/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem/>
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem/>
      </SwiperSlide>
    </Swiper>
  </Box>
)

const SlideItem = () => (
  <Box
    pos="relative"
    bg="rgba(0,0,0,0.4)"

    _before={{
      content: '""',
      bgImage:
        "url(https://www.francetvinfo.fr/pictures/8G0G2o4bIm8fEtKZgMaSMkAIE3Q/1200x1200/2019/05/03/phpeNwgZR.jpg)",
      bgSize: "cover",
      pos: "absolute",
      bgPos: "50%",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: 1,
      zIndex: -1
    }}
    h={{base: "250px", md: "350px", lg: "450px"}}
    textAlign="center"

    d="flex"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
  >
    <NextLink href={"/continent/europe"}>
      <Link color="brand.500">
        <Text 
          as="h3"
          color="gray.50"
          fontWeight="bold"
          fontSize={{base: "2xl", md: "xxx-large"}}
        >
          Europa
        </Text>

        <Text
          color="gray.300"
          fontWeight="bold"
          fontSize={{base: "sm", md: "2xl"}}
          mt="3"
        >
          O continente mais antigo
        </Text>
      </Link>
    </NextLink>
  </Box>
)


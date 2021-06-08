
import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, SimpleGrid, Text, Link } from "@chakra-ui/layout";
import TopNav from "@components/TopNav";
import { GetStaticPropsContext } from "next";
import NextLink from 'next/link';

import { theme } from "src/theme";

import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslations } from "use-intl";

interface Continent {
  id: string;
  imageURL: string;
}
interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
  const t = useTranslations('Home');

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
        {t('calling')}
        <br />
        {t('choosecontinent')}
      </Text>

      <Slide continents={continents}/>
    </>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  const response = await fetch(`${process.env.API_URL}/continent/`);
  const continents = await response.json();

  return {
    props: {
      continents,
      messages: require(`src/translations/${locale}/home.json`)
    }
  }
}

const Header = () => {
  const t = useTranslations('Header');
  
  return (
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
            {t('title_p1')}
            <br />
            {t('title_p2')}
          </Text>
  
          <Text
            color="gray.300"
            mt={{base: "2", md: "5"}}
            maxW="520"
          >
            {t('description')}
          </Text>
        </Box>
  
        <Image pos="absolute" w="410px" right="16px" src="/img/airplane.svg" d={{base: "none", lg: "block"}}/>
      </Flex>
    </Box>
  )
}

const Activities = () => {
  const t = useTranslations('Activity');

  return (
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
      <Activity src="/img/cocktail.svg">{t('nightlife')}</Activity>
      <Activity src="/img/surf.svg">{t('beach')}</Activity>
      <Activity src="/img/building.svg">{t('modern')}</Activity>
      <Activity src="/img/museum.svg">{t('classic')}</Activity>
      <Activity src="/img/earth.svg">{t('andmore')}.</Activity>
    </SimpleGrid>
  )
}
interface ActivityProps {
  src: string;
}

const Activity: React.FC<ActivityProps> = ({src, children}) => (
  <Flex flexDir="column" align="center">
    <Image w={["60px", "85px"]} src={src} alt=""/>
    <Text mt="4" fontWeight="bold" color="gray.700" fontSize={["large", "xl"]}>{children}</Text>
  </Flex>
)

interface SlideProps {
  continents: Continent[];
}

const Slide: React.FC<SlideProps> = ({ continents }) => {
  const t = useTranslations('Slider');

  return (
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
        {continents.map(continent => {
          const name = t(`${continent.id}.name`) as string;
          const slogan = t(`${continent.id}.description`) as string;
          
          return (
            <SwiperSlide key={continent.id}>
              <SlideItem {...continent} name={name} slogan={slogan}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}

interface SlideItemProps {
  id: string;
  name: string;
  slogan: string;
  imageURL: string;
}

const SlideItem: React.FC<SlideItemProps> = ({ id, name, slogan, imageURL }) => (
  <Box
    pos="relative"
    bg="rgba(0,0,0,0.4)"

    _before={{
      content: '""',
      bgImage: `url(${imageURL})`,
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
    <NextLink href={`/continent/${id}`}>
      <Link color="brand.500">
        <Text 
          as="h3"
          color="gray.50"
          fontWeight="bold"
          fontSize={{base: "2xl", md: "xxx-large"}}
        >
          {name}
        </Text>

        <Text
          color="gray.300"
          fontWeight="bold"
          fontSize={{base: "sm", md: "2xl"}}
          mt="3"
        >
          {slogan}
        </Text>
      </Link>
    </NextLink>
  </Box>
)


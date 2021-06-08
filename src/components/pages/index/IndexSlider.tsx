import NextLink from 'next/link';
import { useTranslations } from "use-intl";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Box, Text, Link } from "@chakra-ui/layout";

import { theme } from "src/theme";

interface Continent {
  id: string;
  imageURL: string;
}

interface IndexSlideProps {
  continents: Continent[];
}

export const IndexSlide: React.FC<IndexSlideProps> = ({ continents }) => {
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
              <IndexSlideItem {...continent} name={name} slogan={slogan}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}

interface IndexSlideItemProps {
  id: string;
  name: string;
  slogan: string;
  imageURL: string;
}

const IndexSlideItem: React.FC<IndexSlideItemProps> = ({ id, name, slogan, imageURL }) => (
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
import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/layout';
import { Icon, Tooltip } from '@chakra-ui/react';
import TopNav from '@components/TopNav';
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext } from 'next';
import React from 'react';
import { RiInformationLine } from 'react-icons/ri';
import { useTranslations } from 'use-intl';
import Head from "next/head";
interface City {
  id: string;
  name: string;
  country: string;
  countryId: string;
}
interface Continent {
  name: string;
  imageURL: string;
  description: string;
  cities: City[];
  info: {
    cities: string;
    countries: string;
    languages: string;
  };
}
interface ContinentProps {
  continent: Continent;
};

const Continent: React.FC<ContinentProps> = ({continent}) => {
  const t = useTranslations('Continent');

  return (
    <>
      <Head>
        <title>{`${continent.name} | Worldtrip`}</title>
      </Head>
      <TopNav url="/"/>

      <Header title={continent.name} imageSrc={continent.imageURL}/>
      
      <Flex
        mt={{base: "6", lg: "20"}}
        mx="auto"
        px={["6", "8"]}
        maxW="1160"
        justify="space-between"
        direction={{base: "column", lg: "row"}}
      >
        <Text color="gray.700" fontSize={["sm", "md", "xl"]} textAlign="justify">
          {continent.description}
        </Text>
        
        <Flex
          w={{base: "100%", lg: "490px"}}
          minW={{base: "unset", lg: "430px"}}
          maxW="490px"
          mx="auto"
          mt={["4", "6"]}
          ml={{base: "auto", lg: "16"}}
          justify="space-between"
        >
          <Info number={continent.info.countries} name={t('countries') as string} />
          <Info number={continent.info.languages} name={t('languages') as string} />
          <Info number={continent.info.cities} name={t('cities+100') as string} info={t('cities+100_info') as string}/>
        </Flex>
      </Flex>

      <Cities cities={continent.cities} />
    </>
  )
}

export function getStaticPaths({ locales }: GetStaticPathsContext): GetStaticPathsResult {
  const paths = [
    {params: { name: "europe" }},
    {params: { name: "northamerica" }},
    {params: { name: "southamerica" }},
    {params: { name: "africa" }},
    {params: { name: "asia" }},
    {params: { name: "oceania" }},
  ];

  return {
    paths: paths.map(path => locales.map(locale => ({
      ...path,
      locale
    }))).flat(),
    fallback: false
  }
}

export async function getStaticProps({ params, locale }: GetStaticPropsContext) {
  const { name } = params;

  const response = await fetch(`${process.env.API_URL}/continent/${name}?locale=${locale}`);
  const continent = await response.json();

  return {
    props: {
      continent,
      messages: require(`src/translations/${locale}/continent.json`)
    }
  }
}
interface HeaderProps {
  title: string;
  imageSrc: string;
}

const Header: React.FC<HeaderProps> = ({title, imageSrc}) => (
  <Flex
    pos="relative"
    bg="rgba(0,0,0,0.25)"

    _before={{
      content: '""',
      bgImage: `url(${imageSrc})`,
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

    justify="center"
    align="center"

    h={["150px", "200px", "350px", "500px"]}
  >
    <Box
      w="100%"
      px={["6", "8"]}
      maxW="1160"
      mx="auto"
      mt={{base: "0", md: "auto"}}
      mb={{base: "0", md: "16"}}
    >
      <Heading as="h1" h="fit-content" textAlign={{base: "center", md: "start"}} color="gray.50">
        {title}
      </Heading>
    </Box>
  </Flex>
)
interface InfoProps {
  number: string;
  name: string;
  info?: string;
}

const Info: React.FC<InfoProps> = ({number, name, info}) => (
  <Flex dir="row">  
    <Box textAlign={["start", "start", "center"]}>
      <Text
        color="brand.500"
        fontSize={["x-large", "x-large", "4xl"]}
        fontWeight="bold"
      >
        {number}
      </Text>

      <Text
        color="gray.700"
        fontSize={["large", "large", "larger"]}
        fontWeight={['normal', 'normal', 'bold']}
      >
        {name}
      </Text>
    </Box>

    {info && (
      <Tooltip
        label={info}
        aria-label="Tooltip"
        placement="top"
        hasArrow
        arrowSize={10}
        bgColor="gray.700"
        textAlign="center"
      >
        <Box as="span" ml="1" mt={{base: "36px", md: "53px"}}>
          <Icon as={RiInformationLine} color="gray.500" opacity="0.5"/>
        </Box>
      </Tooltip>
    )}
  </Flex>
)

interface CitiesProps {
  cities: City[];
}

const Cities: React.FC<CitiesProps> = ({ cities }) => {
  const t = useTranslations('Cities');

  return (
    <Box mt={{base: "6", lg: "20"}} mb={{base: "10", md: "20"}} mx="auto" px={["6", "8"]} maxW="1160">
      <Text as="h2" fontSize="2xl" color="gray.500" fontWeight="medium">{t('cities+100')}</Text>
  
      <Grid templateColumns="repeat(auto-fit, minmax(256px, 1fr))" gap="5" mt="5">
        {cities.map(city => (
          <Box maxW="256px" mx="auto" key={city.id}>
            <Box 
              bg={`url(/img/cities/${city.id}.jpg)`}
              bgPos="50%"
              bgSize="cover"
              w="256px" h="170px"
            />

            <Flex
              borderRadius="0 0 4px 4px"
              border="1px solid"
              borderColor="brand.300"
              borderTop="0"
              pt="4"
              pb="6"
              px="6"
              align="center"
              justify="space-between"
            >
              <Box>
                <Text color="gray.700" fontSize="large" fontWeight="bold">{city.name}</Text>
                <Text color="gray.500" mt="3">{city.country}</Text>
              </Box>
              <Image boxSize="30px" src={`/img/flags/${city.countryId}.png`} borderRadius="full"/>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default Continent;
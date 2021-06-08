import Head from "next/head";
import { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext } from 'next';
import { useTranslations } from 'use-intl';

import { Flex, Text } from '@chakra-ui/layout';

import TopNav from '@components/TopNav';
import { ContinentHeader } from '@components/pages/continent/ContinentHeader';
import { ContinentInfo } from '@components/pages/continent/ContinentInfo';
import { ContinentCities } from '@components/pages/continent/ContinentCities';
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

      <ContinentHeader title={continent.name} imageSrc={continent.imageURL}/>
      
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
          <ContinentInfo number={continent.info.countries} name={t('countries') as string} />
          <ContinentInfo number={continent.info.languages} name={t('languages') as string} />
          <ContinentInfo number={continent.info.cities} name={t('cities+100') as string} info={t('cities+100_info') as string}/>
        </Flex>
      </Flex>

      <ContinentCities cities={continent.cities} />
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

export default Continent;
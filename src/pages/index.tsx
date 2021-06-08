
import Head from "next/head";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "use-intl";

import { Divider, Text } from "@chakra-ui/layout";

import TopNav from "@components/TopNav";
import { IndexHeader } from "@components/pages/index/IndexHeader";
import { IndexActivities } from "@components/pages/index/IndexActivities";
import { IndexSlide } from "@components/pages/index/IndexSlider";

import { continentsData } from '../continents';
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
      <Head>
        <title>Worldtrip</title>
      </Head>
      <TopNav />

      <IndexHeader />
      <IndexActivities />

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

      <IndexSlide continents={continents}/>
    </>
  )
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  const continents = Object.entries(continentsData).map(([id, continent]) => ({
    id,
    imageURL: continent.imageURL
  }));

  return {
    props: {
      continents,
      messages: require(`src/translations/${locale}/home.json`)
    }
  }
}
import { useTranslations } from "use-intl";

import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, SimpleGrid, Text } from "@chakra-ui/layout";

export function IndexActivities() {
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
      <IndexActivity src="/img/cocktail.svg">{t('nightlife')}</IndexActivity>
      <IndexActivity src="/img/surf.svg">{t('beach')}</IndexActivity>
      <IndexActivity src="/img/building.svg">{t('modern')}</IndexActivity>
      <IndexActivity src="/img/museum.svg">{t('classic')}</IndexActivity>
      <IndexActivity src="/img/earth.svg">{t('andmore')}.</IndexActivity>
    </SimpleGrid>
  )
}

interface IndexActivityProps {
  src: string;
}

const IndexActivity: React.FC<IndexActivityProps> = ({src, children}) => (
  <Flex flexDir="column" align="center">
    <Image w={["60px", "85px"]} src={src} alt=""/>
    <Text mt="4" fontWeight="bold" color="gray.700" fontSize={["large", "xl"]}>{children}</Text>
  </Flex>
)
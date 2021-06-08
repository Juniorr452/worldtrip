import { useTranslations } from "next-intl";

import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

export function IndexHeader() {
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
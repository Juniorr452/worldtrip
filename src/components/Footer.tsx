import React from 'react';

import { Text, Link } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/image";
import { Flex } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
  const t = useTranslations('GlobalFooter');
  return (
    <Flex 
      as="footer"
      mx="auto" 
      mt={"8"}
      p={["6", "8"]}
      bg="gray.50"
      justify="center"
      align="center"
      flexDir="column"
    >
      <Image src="/img/logo.svg" h={["30px", "30px"]} />
      <Text 
        mt="4" 
        fontSize={["smaller", "small"]}
        color="gray.500"
        textAlign="center"
      >
        {t('madeby')}
        <br/>
        <Link color="brand.500" href="https://github.com/Juniorr452/worldtrip">
          {t('github')}
        </Link>
      </Text>
    </Flex>
  )
}

export default Footer;
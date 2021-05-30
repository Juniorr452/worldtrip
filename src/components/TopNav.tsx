import React from 'react';
import NextLink from 'next/link';

import Icon from "@chakra-ui/icon";
import { Flex, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

import { RiArrowLeftSLine } from 'react-icons/ri';

interface TopNavProps {
  url?: string;
}

const TopNav: React.FC<TopNavProps> = ({url}) => {
  return (
    <Flex mx="auto" px={["6", "8"]} align="center" justify="center" h={[50, 100]} w="100%" maxW="1160" position="relative">
      {url && (
        <Link as={NextLink} href={url}>
          <Button position="absolute" left="0" ml={["6", "8"]} type="button">
            <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} color="gray.700" />
          </Button>
        </Link>
      )}
      <Image src="/img/logo.svg" h={["20px", "46px"]}/>
    </Flex>
  )
}

export default TopNav;
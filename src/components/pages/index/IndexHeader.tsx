import { useTranslations } from "next-intl";

import { Box, Flex, Text } from "@chakra-ui/layout";

import { MotionBox, MotionImage } from "@components/motion";
import { useAnimation } from "framer-motion";

interface IndexHeaderProps {
  loaded: boolean;
}

export function IndexHeader({ loaded }) {
  const t = useTranslations('Header');
  const headingControls = useAnimation();
  const airplaneControls = useAnimation();

  if(loaded) {
    headingControls.start('visible', {
      delay: .5,
      duration: 1
    });

    airplaneControls.start('visible', {
      delay: 1.5,
      duration: 1
    });
  }
  
  return (
    <Box
      bgImage="url('/img/stars.png')"
      bgSize="cover"
    >
      <Flex pos="relative" maxW="1160px" mx="auto" px={["6", "8"]} py={{base: "6", md: "80px"}} justify="space-between">
        <MotionBox
          variants={{
            hidden: {opacity: 0, y: 50},
            visible: {opacity: 1, y: 0}
          }}
          initial="hidden"
          animate={headingControls}
        >
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
        </MotionBox>
  
        <MotionImage 
          variants={{
            hidden: {opacity: 0, x: 70, y: 50},
            visible: {opacity: 1, x: 0, y: 0, transition: { duration: 1, delay: .8 }}
          }}
          initial="hidden"
          animate={airplaneControls}
          pos="absolute" 
          w="410px" 
          right="16px" 
          src="/img/airplane.svg" 
          d={{base: "none", lg: "block"}}
        />
      </Flex>
    </Box>
  )
}
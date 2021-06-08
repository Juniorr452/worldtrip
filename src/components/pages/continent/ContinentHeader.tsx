import { Box, Flex, Heading } from '@chakra-ui/layout';

interface ContinentHeaderProps {
  title: string;
  imageSrc: string;
}

export const ContinentHeader: React.FC<ContinentHeaderProps> = ({title, imageSrc}) => (
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
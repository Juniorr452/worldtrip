import { Icon, Tooltip } from '@chakra-ui/react';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { RiInformationLine } from 'react-icons/ri';

interface ContinentInfoProps {
  number: string;
  name: string;
  info?: string;
}

export const ContinentInfo: React.FC<ContinentInfoProps> = ({number, name, info}) => (
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
          <Icon as={RiInformationLine} color="gray.500" />
        </Box>
      </Tooltip>
    )}
  </Flex>
)
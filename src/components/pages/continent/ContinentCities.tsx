import { useTranslations } from 'use-intl';

import { Image } from '@chakra-ui/image';
import { Box, Flex, Grid, Text } from '@chakra-ui/layout';

interface City {
  id: string;
  name: string;
  country: string;
  countryId: string;
}

interface ContinentCitiesProps {
  cities: City[];
}

export const ContinentCities: React.FC<ContinentCitiesProps> = ({ cities }) => {
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
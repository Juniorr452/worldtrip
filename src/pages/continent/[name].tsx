import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, SimpleGrid, Text } from '@chakra-ui/layout';
import TopNav from '@components/TopNav';
import React from 'react';

// import { Container } from './styles';

const Continent: React.FC = () => {
  return (
    <>
      <TopNav url="/"/>
      <Box
        pos="relative"
        bg="rgba(0,0,0,0.25)"

        _before={{
          content: '""',
          bgImage:
            "url(https://www.francetvinfo.fr/pictures/8G0G2o4bIm8fEtKZgMaSMkAIE3Q/1200x1200/2019/05/03/phpeNwgZR.jpg)",
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

        d="flex"
        justifyContent="center"
        alignItems="center"

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
          <Heading as="h1" h="fit-content" textAlign={{base: "center", md: "start"}} color="gray.50">Europa</Heading>
        </Box>
      </Box>

      <Box
        mt={{base: "6", lg: "20"}}
        mx="auto"
        px={["6", "8"]}
        maxW="1160"
        d="flex"
        justifyContent="space-between"
        flexDir={{base: "column", lg: "row"}}
      >
        <Text color="gray.700" fontSize={["sm", "md", "xl"]} textAlign="justify">A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.</Text>
        
        <Box
          w={{base: "100%", lg: "490px"}}
          minW={{base: "unset", lg: "430px"}}
          d="flex"
          justifyContent="space-between"
          maxW="490px"
          mx="auto"
          mt={["4", "6"]}
          ml={{base: "auto", lg: "16"}}
        >
          <Info number="50" name="paises" />
          <Info number="60" name="línguas" />
          <Info number="24" name="cidades +100" />
        </Box>
      </Box>

      <Box mt={{base: "6", lg: "20"}} mb={{base: "10", md: "20"}} mx="auto" px={["6", "8"]} maxW="1160">
        <Text as="h2" fontSize="2xl" color="gray.500" fontWeight="medium">Cidades +100</Text>

        <Grid templateColumns="repeat(auto-fit, minmax(256px, 1fr))" gap="5" mt="5">
          <City />
          <City />
          <City />
          <City />
          <City />
          <City />
          <City />
        </Grid>
      </Box>
    </>
  )
}

interface InfoProps {
  number: string;
  name: string;
}

const Info: React.FC<InfoProps> = ({number, name}) => (
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
)

const City: React.FC = () => (
  <Box maxW="256px" mx="auto">
    <Box bg="url(https://www.francetvinfo.fr/pictures/8G0G2o4bIm8fEtKZgMaSMkAIE3Q/1200x1200/2019/05/03/phpeNwgZR.jpg)" 
    bgPos="50%"
    bgSize="cover"
    w="256px" h="170px"/>

    <Box borderRadius="0 0 4px 4px" border="1px solid" borderColor="brand.300" borderTop="0" pt="4" pb="6" px="6" d="flex" justifyContent="space-between" alignItems="center">
      <Box>
        <Text color="gray.700" fontSize="large" fontWeight="bold">Paris</Text>
        <Text color="gray.500" mt="3">França</Text>
      </Box>
      <Image boxSize="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GLYUhI4oQja0QFO7br6hLYGQ-5IKzeLCLQ&usqp=CAU" borderRadius="full"/>
    </Box>
  </Box>
)

export default Continent;
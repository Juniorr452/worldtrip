import { Image } from '@chakra-ui/image';
import { Spinner } from '@chakra-ui/spinner';
import { AnimatePresence } from 'framer-motion';
import { MotionFlex } from './motion';

interface SplashScreenProps {
  visible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <MotionFlex
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          
          flexDir="column"
          justify="center"
          align="center"

          p="4"
          zIndex="100"
          background="gray.50"

          initial={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <Image 
            src="/img/logo.svg"
            w="100%"
            maxW="300px"
          />
          <Spinner
            mt="4"
            color="brand.500"
          />
        </MotionFlex>
      )}
    </AnimatePresence>
  )
}

export default SplashScreen;
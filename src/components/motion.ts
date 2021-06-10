import { motion } from 'framer-motion';
import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/layout";
import { Image, ImageProps } from "@chakra-ui/image";

export const MotionBox = motion<BoxProps>(Box);
export const MotionFlex = motion<FlexProps>(Flex);
export const MotionImage = motion<ImageProps>(Image);
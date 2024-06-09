import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  ChakraProvider,
  IconButton,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function BeautyFoodToy() {
  const products = [
    {
      id: 1,
      title: 'Best True Wireless Headphone',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/a/5/0/-original-imahy3uqdmgx6qey.jpeg?q=70',
      description: 'Grab Now',
    },
    {
      id: 2,
      title: 'Watches',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/z/r/d/-original-imagywnzhh3dnqvk.jpeg?q=70',
      description: 'From ₹9990',
    },
    {
      id: 3,
      title: 'Best Selling Mobile Speaker',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/external-hard-drive/ssd/q/1/y/sdssde61-1t00-g25m-sandisk-original-imagsgpzfjagzdqf.jpeg?q=70',
      description: 'From ₹499*',
    },
    {
      id: 4,
      title: 'Monitors',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/0/y/r/gw2790-full-hd-27-2024-gw2790-benq-original-imagy6vpevgqgg4u.jpeg?q=70',
      description: 'From ₹6599',
    },
    {
      id: 5,
      title: 'Top Mirrorless Cameras',
      imageUrl: 'https://rukminim2.flixcart.com/image/312/312/k3q76a80/camera/a/9/y/sony-apsc-ilce-6100l-b-in5-mirrorless-original-imafm6msv5uzrmgt.jpeg?q=70',
      description: 'Shop Now!',
    },
    {
      id: 6,
      title: 'Top Selling Dell Keyboard',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/gaming-keyboard/j/8/w/f2023-aula-original-imagr4m2gjqgfgag.jpeg?q=70',
      description: 'From ₹229',
    },
    {
      id: 7,
      title: 'Smart watch',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/1/i/x/-original-imahf5nghgmuatzu.jpeg?q=70',
      description: 'From ₹6599',
    },
  ];

  const scrollRef = React.useRef(null);

  const scroll = (scrollOffset) => {
    const scrollContainer = scrollRef.current;
    const scrollLeft = scrollContainer.scrollLeft;
    const targetScroll = scrollLeft + scrollOffset;
    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <ChakraProvider>
      <Box py={8} px={8} bg="gray.50" ml="10%" maxW="80vw" mt="10px">
        <Heading fontSize="2xl" fontWeight="bold" mb={6} textAlign="left" color="black.600">
          Beauty Food Toy and More
        </Heading>
        <HStack spacing={4} overflowX="hidden" py={4} px={2} maxW="76vw" position="relative">
          <IconButton
            aria-label="Scroll left"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={() => scroll(-200)}
          />
          <HStack
            ref={scrollRef}
            spacing={4}
            overflowX="auto"
            py={4}
            px={2}
            sx={{
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
              'transition': 'transform 0.3s',
            }}
          >
            {products.map((product) => (
              <Box
                key={product.id}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                overflow="hidden"
                minW="200px"
                maxW="200px"
                height="300px"
                flexShrink="0"
                p={4}
                cursor="pointer"
                transition="transform 0.3s"
              >
                <VStack align="center" spacing={4}>
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    borderRadius="md"
                    boxSize="150px"
                    objectFit="cover"
                    transition="transform 0.3s"
                    _hover={{ transform: 'scale(1.1)' }}
                  />
                  <Text fontSize="md" fontWeight="bold" textAlign="center" color="gray.700">
                    {product.title}
                  </Text>
                  <Text fontSize="sm" color="gray.500" textAlign="center">
                    {product.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </HStack>
          <IconButton
            aria-label="Scroll right"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={-2}
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
            onClick={() => scroll(200)}
          />
        </HStack>
      </Box>
    </ChakraProvider>
  );
}

export default BeautyFoodToy;

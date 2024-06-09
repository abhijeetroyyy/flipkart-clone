import React from 'react';
import { Box, Flex, Image, Link, Text, VStack, HStack, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10} px={4}>
      <Flex justify="space-around" wrap="wrap">
        <VStack align="flex-start" spacing={3} mb={4}>
          <Text fontWeight="bold">ABOUT</Text>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Contact Us</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>About Us</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Careers</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Flipkart Stories</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Press</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Flipkart Wholesale</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Corporate Information</Link>
        </VStack>
        <VStack align="flex-start" spacing={3} mb={4}>
          <Text fontWeight="bold">HELP</Text>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Payments</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Shipping</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Cancellation & Returns</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>FAQ</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Report Infringement</Link>
        </VStack>
        <VStack align="flex-start" spacing={3} mb={4}>
          <Text fontWeight="bold">POLICY</Text>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Return Policy</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Terms Of Use</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Security</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Privacy</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Sitemap</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>EPR Compliance</Link>
        </VStack>
        <VStack align="flex-start" spacing={3} mb={4}>
          <Text fontWeight="bold">SOCIAL</Text>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Facebook</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>Twitter</Link>
          <Link href="#" _hover={{ textDecoration: 'none', color: 'blue.300' }}>YouTube</Link>
        </VStack>
      </Flex>
      <Box mt={10}>
        <HStack justify="center" spacing={6}>
          <Text fontSize="sm" color="gray.500">© 2023 Flipkart, All rights reserved.</Text>
          <Flex>
            <Text fontSize="sm" color="gray.500" mr={2}>Need help?</Text>
            <Link href="#" color="blue.300" fontSize="sm">Visit Help Center</Link>
          </Flex>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;

import React from 'react';
import { Flex, Image, Input, Text, Box, Menu, MenuButton, MenuList, MenuItem, Button, useBreakpointValue, InputGroup, InputLeftElement, Container } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  const displayText = useBreakpointValue({ base: 'none', lg: 'block' });

  return (
    <Flex
      as="header"
      boxShadow="md"
      bg="white"
      paddingY={{ base: "0.5rem", md: "4rem 5rem" }}
    >
      <Container maxW="container.xl" paddingX={{ base: "0rem", md: "0rem" }} paddingY={{ base: "0.5rem", md: "1rem" }}>
        <Flex align="center" justify="space-around">
          <Flex align="center">
            <Image
              src="https://rb.gy/z99vnl"
              alt="Logo"
              boxSize={{ base: '100%', md: '40%' }}
              marginRight={{ base: '1rem', md: '3rem' }}
            />
            <Flex align="center" flex="1" display={{ base: 'none', md: 'flex' }}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon boxSize={6} color="gray.500" />
                </InputLeftElement>
                <Input
                  bg="#f0f5ff"
                  placeholder="Search..."
                  width="500px"
                />
              </InputGroup>
            </Flex>
          </Flex>
          <Flex align="center">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bg="white"
                borderWidth="1px"
                borderColor="gray.200"
                padding="0 0.5rem"
                marginRight={{ base: '0.5rem', md: '3rem' }}
                _hover={{ bg: "blue.500", color: "white" }}
              >
                <Flex align="center">
                  <Image
                    src="https://rb.gy/242lj5"
                    alt="User Icon"
                    boxSize="30px"
                    marginRight="0.5rem"
                  />
                  <Text>Login</Text>
                </Flex>
              </MenuButton>
              <MenuList>
                <Box padding="1rem" display="flex" justifyContent="space-between" alignItems="center">
                  <Text>New customer?</Text>
                  <Text color="blue.500" cursor="pointer">Sign Up</Text>
                </Box>
                <MenuItem>My Profile</MenuItem>
                <MenuItem>Flipkart Plus Zone</MenuItem>
                <MenuItem>Orders</MenuItem>
                <MenuItem>Wishlist</MenuItem>
                <MenuItem>Rewards</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
              </MenuList>
            </Menu>
            <Flex align="center">
              <Image
                src="https://shorturl.at/0rXKg"
                alt="Cart Icon"
                boxSize="30px"
                marginRight="0.5rem"
              />
              <Text display={displayText} marginRight={{ base: '0.5rem', md: '3rem' }}>Cart</Text>
              <Image
                src="https://shorturl.at/nZobC"
                alt="Seller Icon"
                boxSize="30px"
                marginRight="0.5rem"
              />
              <Text display={displayText} marginRight={{ base: '0.5rem', md: '3rem' }}>Become a Seller</Text>
            </Flex>
            <Menu>
              <MenuButton
                as={Button}
                bg="white"
                borderWidth="1px"
                borderColor="gray.100"
                padding="0.5rem"
                _hover={{ bg: "gray.100" }}
              >
                <Image
                  src="https://rb.gy/c6eahm"
                  alt="More Icon"
                  boxSize="30px"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Notification Preferences</MenuItem>
                <MenuItem>24x7 Customer Care</MenuItem>
                <MenuItem>Advertise</MenuItem>
                <MenuItem>Download App</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;

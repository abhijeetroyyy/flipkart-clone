import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Link,
  Heading,
} from "@chakra-ui/react";

const categories = [
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100",
    text: "Grocery",
  },
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
    text: "Mobile",
  },
  {
    icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100",
    text: "Fashion",
    submenu: [
      {
        text: "Men's Top Wear",
        submenu: [
          { text: "All" },
          { text: "Men's T-Shirts" },
          { text: "Men's Casual Shirts" },
          { text: "Men's Formal Shirts" },
          { text: "Men's Kurtas" },
          { text: "Men's Ethnic Sets" },
          { text: "Men's Blazers" },
          { text: "Men's Raincoat" },
          { text: "Men's Windcheaters" },
          { text: "Men's Suit" },
          { text: "Men's Fabrics" },
        ],
      },
      {
        text: "Women's Top Wear",
        submenu: [
          { text: "All" },
          { text: "Women's T-Shirts" },
          { text: "Women's Casual Shirts" },
          { text: "Women's Formal Shirts" },
          { text: "Women's Kurtas" },
          { text: "Women's Ethnic Sets" },
          { text: "Women's Blazers" },
          { text: "Women's Raincoat" },
          { text: "Women's Windcheaters" },
          { text: "Women's Suit" },
          { text: "Women's Fabrics" },
        ],
      },
      {
        text: "Men's Bottom Wear",
        submenu: [
          { text: "Jeans" },
          { text: "Trousers" },
          { text: "Shorts" },
          { text: "Track Pants" },
        ],
      },
      {
        text: "Women Ethnic",
        submenu: [
          { text: "Sarees" },
          { text: "Kurtas & Kurtis" },
          { text: "Salwar Suits" },
          { text: "Lehenga Cholis" },
        ],
      },
      {
        text: "Men Footwear",
        submenu: [
          { text: "Casual Shoes" },
          { text: "Sports Shoes" },
          { text: "Formal Shoes" },
          { text: "Sandals & Floaters" },
        ],
      },
      {
        text: "Women Footwear",
        submenu: [
          { text: "Flats" },
          { text: "Heels" },
          { text: "Casual Shoes" },
          { text: "Sports Shoes" },
        ],
      },
      {
        text: "Watches and Accessories",
        submenu: [
          { text: "Watches" },
          { text: "Bags & Backpacks" },
          { text: "Wallets" },
          { text: "Sunglasses" },
        ],
      },
      {
        text: "Women Western",
        submenu: [
          { text: "Tops" },
          { text: "Dresses" },
          { text: "Jeans & Jeggings" },
          { text: "Skirts & Shorts" },
        ],
      },
      {
        text: "Bags, Suitcases & Luggage",
        submenu: [
          { text: "Backpacks" },
          { text: "Trolley Bags" },
          { text: "Travel Duffles" },
          { text: "Laptop Bags" },
        ],
      },
      {
        text: "Kids",
        submenu: [
          { text: "Boys Clothing" },
          { text: "Girls Clothing" },
          { text: "Toys" },
          { text: "Baby Care" },
        ],
      },
      {
        text: "Essentials",
        submenu: [
          { text: "Face Masks" },
          { text: "Hand Sanitizers" },
          { text: "Health Supplements" },
          { text: "Vitamins & Minerals" },
        ],
      },
      {
        text: "Winter",
        submenu: [
          { text: "Sweaters" },
          { text: "Jackets" },
          { text: "Hoodies" },
          { text: "Thermal Wear" },
        ],
      },
    ],
  },
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100",
    text: "Electronics",
    submenu: [
      { text: "Mobiles" },
      { text: "Laptops" },
      { text: "Tablets" },
      { text: "Desktop PCs" },
      { text: "Gaming & Accessories" },
      { text: "Computer Accessories" },
      { text: "Audio" },
      { text: "Cameras" },
      { text: "Network Components" },
      { text: "Smart Home Automation" },
    ],
  },
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100",
    text: "Home & Furniture",
    submenu: [
      { text: "Living Room Furniture" },
      { text: "Bedroom Furniture" },
      { text: "Dining Room Furniture" },
      { text: "Kids Room Furniture" },
      { text: "Office Furniture" },
      { text: "Mattresses" },
      { text: "Home Decor" },
      { text: "Lighting" },
      { text: "Home Furnishing" },
      { text: "Kitchen & Dining" },
    ],
  },
  {
    icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100",
    text: "Appliances",
  },
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100",
    text: "Travel",
  },
  {
    icon: "https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100",
    text: "Beauty, Toys & More",
    submenu: [
      { text: "Beauty & Grooming" },
      { text: "Toys & Games" },
      { text: "Baby Care" },
      { text: "Personal Care Appliances" },
      { text: "Health Care Devices" },
      { text: "Stationery" },
      { text: "Sports & Fitness" },
      { text: "Food & Nutrition" },
    ],
  },
  {
    icon: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100",
    text: "Two Wheelers",
    submenu: [
      { text: "Motorcycles" },
      { text: "Scooters" },
      { text: "Electric Bikes" },
      { text: "Bicycles" },
      { text: "Spare Parts" },
      { text: "Helmets & Riding Gear" },
      { text: "Vehicle Care" },
    ],
  },
];

const CategoryList = () => {
  const popoverContentStyle = {
    width: "250px",
    height: "auto",
  };

  const linkStyles = {
    display: "block",
    py: 1,
    px: 2,
    _hover: { bg: "gray.100", color: "blue.500" },
    cursor: "pointer",
    maxW: "100%",
    fontSize: "sm",
  };

  return (
    <Box py={4} bg="white" marginTop="11px" overflowX={{ base: "auto", md: "visible" }} maxW="80%" marginLeft="10%">
      <Flex
        justify="center"
      >
        <Flex
          justify={{ base: "flex-start", md: "center" }}
          wrap="nowrap" // Setting flexWrap to nowrap to prevent wrapping
          height="auto"
          maxW="90%"
          paddingX={{ base: 4, md: 10 }}
          width="100%"
          mx="auto"
        >
          {categories.map((category, index) => (
            <Box
              key={index}
              align="center"
              py={2}
              px={4}
              maxW="200px"
              mr={4}
              mb={4}
            >
              {category.submenu ? (
                <Popover trigger="hover" placement="bottom-start">
                  <PopoverTrigger>
                    <Box cursor="pointer">
                      <Image
                        src={category.icon}
                        alt={category.text}
                        width={20}
                        height={20}
                      />
                      <Text
                        fontSize="md"
                        fontWeight="semibold"
                        color="gray.800"
                        ml={2}
                      >
                        {category.text}
                      </Text>
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent {...popoverContentStyle}>
                    <PopoverArrow />
                    <PopoverBody>
                      {category.submenu.map((submenuItem, subIndex) =>
                        submenuItem.submenu ? (
                          <Popover
                            key={subIndex}
                            trigger="hover"
                            placement="right-start"
                          >
                            <PopoverTrigger>
                              <Link
                                {...linkStyles}
                                _hover={{ bg: "gray.100", color: "blue.500" }}
                              >
                                {submenuItem.text}
                              </Link>
                            </PopoverTrigger>
                            <PopoverContent {...popoverContentStyle}>
                              <PopoverArrow />
                              <PopoverBody>
                                <Heading size="sm" mb={2}>
                                  More in {submenuItem.text}
                                </Heading>
                                {submenuItem.submenu.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    {...linkStyles}
                                    _hover={{ bg: "gray.100", color: "blue.500" }}
                                  >
                                    {item.text}
                                  </Link>
                                ))}
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        ) : (
                          <Link key={subIndex} {...linkStyles}>
                            {submenuItem.text}
                          </Link>
                        )
                      )}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              ) : (
                <Box cursor="pointer">
                  <Image
                    src={category.icon}
                    alt={category.text}
                    width={20}
                    height={20}
                  />
                  <Text fontSize="md" fontWeight="semibold" color="gray.800" ml={2}>
                    {category.text}
                  </Text>
                </Box>
              )}
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default CategoryList;
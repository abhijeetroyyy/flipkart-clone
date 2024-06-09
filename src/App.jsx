import React from 'react'
import { ChakraProvider,Box } from '@chakra-ui/react'
import Header from './Components/navbar/Header'
import Category from './Components/main/Category'
import ImageSlider from './Components/main/ImageSlider'
import Electronics from './Components/main/Electronics'
import BeautyFoodToy from './Components/main/BeautyFoodToy'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#f1f2f4">
      <Header />
      <Category/>
      <ImageSlider/>  
      <Electronics/>
      <BeautyFoodToy/>
      <Footer/>
      </Box>
    </ChakraProvider>
  )
}

export default App

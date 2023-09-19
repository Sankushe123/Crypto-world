import React from 'react'
import { Spinner, VStack ,Box} from '@chakra-ui/react'
const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={'center'}>
      <Box transition={"scale(3)"}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
    </VStack>
    
  )
}

export default Loader
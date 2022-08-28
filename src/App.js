import Header from '../src/components/Header'
import TimeContainer from '../src/components/TimeContainer'

import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Box
        bg="#c00000"
        h="100vh"
        color="#ffdee3"
        fontFamily="Merienda, cursive"
        className="App"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Header />
        <TimeContainer />
      </Box>
    </ChakraProvider>
  )
}

export default App

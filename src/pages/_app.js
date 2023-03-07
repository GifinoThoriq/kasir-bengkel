import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"

export default function App({ Component, pageProps }) {

  const theme = extendTheme({
    colors: {
      primary:{
        100: "#F1EFEF"
      },
      secondary:{
        100: "#020613"
      },
      accent: {
        100: "#F84444"
      }
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

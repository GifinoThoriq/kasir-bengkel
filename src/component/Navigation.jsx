import Image from 'next/image' 
import { 
  Flex,
  Box,
  Heading,
  Container,
  Button,
  ButtonGroup
} from "@chakra-ui/react"

export default function Navigation() {
    return(
        <Flex justifyContent={"space-around"} alignItems="center" h='70px' bg='secondary.100'>
          <Box>
            <Image
              src={"/logo.png"}
              alt="kasir bengkel logo"
              width={50}
              height={50}
            />
          </Box>
          <ButtonGroup variant='unstyled' color='accent.100' spacing='12'>
            <Button>Home</Button>
            <Button>Tentang</Button>
            <Button>Kontak</Button>
            <Button>Daftar User</Button>
          </ButtonGroup>
        </Flex>
    )
}
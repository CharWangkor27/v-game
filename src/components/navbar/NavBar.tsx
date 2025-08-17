import { Box, HStack, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import SearchInput from "../SearchInput/SearchInput"
import Theme from "../Theme/Theme";



export const NavBar = () => {
  return (
    <HStack width='100%' paddingX={4}>

       <Image src={logo} width="140px"/>
       <Box flex="1">
        <SearchInput/>
      </Box>
       <Theme/>
        
    </HStack>
  )
}

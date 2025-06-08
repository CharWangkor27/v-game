import { Box, HStack, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import SearchInput from "../SearchInput/SearchInput"
import Theme from "../Theme/Theme";


interface Props{
  onSearch : (searchText: string)=>void;
}
export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack width='100%' paddingX={4}>

       <Image src={logo} width="140px"/>
       <Box flex="1">
        <SearchInput onSearch={onSearch} />
      </Box>
       <Theme/>
        
    </HStack>
  )
}

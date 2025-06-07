import { HStack, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import SearchInput from "../SearchInput/SearchInput"


export const NavBar = () => {
  return (
    <HStack>
       <Image src={logo} width="140px"/>
       <SearchInput/>
        
    </HStack>
  )
}

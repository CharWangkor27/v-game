import { HStack, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import SearchInput from "../SearchInput/SearchInput"

interface Props{
  onSearch : (searchText: string)=>void;
}
export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack>
       <Image src={logo} width="140px"/>
       <SearchInput onSearch={onSearch}/>
        
    </HStack>
  )
}

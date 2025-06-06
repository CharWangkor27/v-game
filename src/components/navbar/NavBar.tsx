import { HStack, Image } from "@chakra-ui/react"
import logo from "../../assets/logo.png"


export const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
       <Image src={logo} width="140px"/>
        
    </HStack>
  )
}

import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"


const SearchInput = () => {
  return (
    <InputGroup margin={3} flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘Book</Kbd>}>
    <Input placeholder="Search contacts" borderRadius={20} />
  </InputGroup>
    
  )
}

export default SearchInput

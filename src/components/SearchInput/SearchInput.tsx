import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { useRef } from "react"
import { LuSearch } from "react-icons/lu"

interface Props{
  onSearch : (searchText: string)=>void;
}

const SearchInput = ({onSearch}:Props) => {
  const ref = useRef<HTMLInputElement>(null);

  
  return (
    
    <form style={{ margin:'3px'}} onSubmit={(event)=>{
      event.preventDefault()
      if (ref.current) onSearch(ref.current.value);
    }}>
      <InputGroup  flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘Book</Kbd>}>
      <Input ref = {ref}placeholder="Search contacts" borderRadius={20} />
        </InputGroup>
    </form>
    
  )
}

export default SearchInput

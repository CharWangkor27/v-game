import useBookQueryStore from "../../store";
import { Input, InputGroup, Kbd } from "@chakra-ui/react"
import { useRef } from "react"
import { LuSearch } from "react-icons/lu"


const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useBookQueryStore(s=>s.setSearchText)

  
  return (
    
    <form style={{ margin:'3px'}} onSubmit={(event)=>{
      event.preventDefault()
      if (ref.current) setSearchText(ref.current.value);
    }}>
      <InputGroup  flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘Book</Kbd>}>
      <Input ref = {ref}placeholder="Search contacts" borderRadius={20} />
        </InputGroup>
    </form>
    
  )
}

export default SearchInput

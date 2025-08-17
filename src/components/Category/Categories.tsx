import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useCategories from "../../hooks/useCategories"
import useBookQueryStore from "../../store"



const Categories = () => {
    const {data, isLoading, error} = useCategories()
    const selectedCategoryId = useBookQueryStore(s=>s.bookQuery.categoryId)
    const setSelectedCategoryId = useBookQueryStore(s=>s.setCategoryId)
    if(error) return null;
    if(isLoading) return <Spinner/>
  return (
    <List.Root paddingRight={5}>
        {data?.results.map(category=><ListItem key={category.id} paddingY='5px' listStyle=
        "none">
          <HStack>
            <Image objectFit='cover' boxSize="32px" borderRadius="10px" src={category.image_background}/>
            <Button  width='100%' whiteSpace='normal' justifyContent='flex-start' fontSize="lg" variant='ghost' fontWeight={category.id==selectedCategoryId?'bold':'normal'} onClick={()=>setSelectedCategoryId(category.id)}>{category.name}
            </Button>
          </HStack>
           </ListItem>)}
    </List.Root>
  )
}

export default Categories

import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useCategories, { type Category } from "../../hooks/useCategories"

interface Props{
  onSelectCategory:(category:Category)=>void;
  selectedCategory: Category | null;
}

const Categories = ({selectedCategory,onSelectCategory}:Props) => {
    const {data, isLoading, error} = useCategories()
    if(error) return null;
    if(isLoading) return <Spinner/>
  return (
    <List.Root paddingRight={5}>
        {data?.results.map(category=><ListItem key={category.id} paddingY='5px' listStyle=
        "none">
          <HStack>
            <Image objectFit='cover' boxSize="32px" borderRadius="10px" src={category.image_background}/>
            <Button  width='100%' whiteSpace='normal' justifyContent='flex-start' fontSize="lg" variant='ghost' fontWeight={category.id==selectedCategory?.id?'bold':'normal'} onClick={()=>onSelectCategory(category)}>{category.name}
            </Button>
          </HStack>
           </ListItem>)}
    </List.Root>
  )
}

export default Categories

import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useCategories from "../../hooks/useCategories"


const Categories = () => {
    const {data, isLoading, error} = useCategories()
    if(error) return null;
    if(isLoading) return <Spinner/>
  return (
    <List.Root>
        {data.map(category=><ListItem key={category.id} paddingY='5px' listStyle=
        "none">
          <HStack>
            <Image boxSize="32px" borderRadius="10px" src={category.image_background}/>
            <Text fontSize="lg">{category.name}
            </Text>
          </HStack>
           </ListItem>)}
    </List.Root>
  )
}

export default Categories

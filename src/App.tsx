
import { Grid, GridItem, Heading, HStack} from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import Categories from './components/Category/Categories'
import SortSelector from './components/SortSelector/SortSelector'
import BookHeading from './components/BookHeading/BookHeading'
import BookGrid from './components/BookGrid/BookGrid'






function App() {
  

  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
  templateColumns={
    {
      base:"1fr",
      lg: "200px 1fr"
    }
  } 
    >
    <GridItem area="nav">
      
     <HStack>
      <NavBar/>

     </HStack>
    </GridItem>
    

    <GridItem marginTop={5} area="aside"display={{base:'none' , lg:'block'}} paddingX={5}>
      <Heading marginBottom ={3}as='h1' fontSize='3xl'>Categories</Heading>
      <Categories/>
    </GridItem>
   
   
    <GridItem area="main" marginTop={5}>
      
      <BookHeading/>
      <SortSelector/>
     
    
      <BookGrid/>
    </GridItem>
  </Grid>
}

export default App

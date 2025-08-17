import { Grid, GridItem, Heading} from '@chakra-ui/react'
import Categories from '../components/Category/Categories'
import SortSelector from '../components/SortSelector/SortSelector'
import BookHeading from '../components/BookHeading/BookHeading'
import BookGrid from '../components/BookGrid/BookGrid'

const Homepage = () => {
  return (
    <Grid templateAreas={{
    base:` "main"`,
    lg: ` "aside main"`
  }}
  templateColumns={
    {
      base:"1fr",
      lg: "200px 1fr"
    }
  } 
    >
    

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
  )
}

export default Homepage

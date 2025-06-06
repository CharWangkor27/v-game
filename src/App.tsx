
import { Grid, GridItem } from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import Categories from './components/Category/Categories'



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
    <GridItem area="nav" bg="maroon">
     <NavBar/>
    </GridItem>
    

    <GridItem area="aside"display={{base:'none' , lg:'block'}} paddingX={5}>
      <Categories/>
    </GridItem>
  
   
    <GridItem area="main"><GameGrid/></GridItem>
  </Grid>
}

export default App

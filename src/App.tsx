
import { Grid, GridItem } from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'



function App() {
  

  return <Grid templateAreas={{
    base:`"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav" bg="maroon">
     <NavBar/>
    </GridItem>
    

    <GridItem area="aside" bg="lightblue" display={{base:'none' , lg:'block'}}>Aside</GridItem>
  
   
    <GridItem><GameGrid/></GridItem>
  </Grid>
}

export default App


import { Grid, GridItem } from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import Categories from './components/Category/Categories'
import { useState } from 'react'
import type { Category } from './hooks/useCategories'



function App() {

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  

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
      <Categories selectedCategory={selectedCategory} onSelectCategory={category=>setSelectedCategory(category)}/>
    </GridItem>
  
   
    <GridItem area="main"><GameGrid selectedCategory={selectedCategory}/></GridItem>
  </Grid>
}

export default App

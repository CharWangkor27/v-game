
import { Grid, GridItem, } from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import Categories from './components/Category/Categories'
import { useState } from 'react'
import type { Category } from './hooks/useCategories'
import SortSelector from './components/SortSelector/SortSelector'


export interface BookQuery{
  category : Category | null;
  sortOder : string;
  searchText: string;
}


function App() {

  const [bookQuery, setBookQuery]= useState<BookQuery>({}as BookQuery)
  

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
     <NavBar onSearch={(searchText)=>setBookQuery({...bookQuery,searchText})}/>
    </GridItem>
    

    <GridItem marginTop={5} area="aside"display={{base:'none' , lg:'block'}} paddingX={5}>
      <Categories selectedCategory={bookQuery.category} onSelectCategory={category=>setBookQuery({...bookQuery,category})}/>
    </GridItem>
  
   
    <GridItem area="main" marginTop={5}>
    
      <SortSelector sortOrder = {bookQuery.sortOder}OnSelectSortOrder={(sortOder)=>setBookQuery({...bookQuery,sortOder})}/>
      <GameGrid bookQuery={bookQuery}/>
    </GridItem>
  </Grid>
}

export default App

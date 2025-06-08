
import { Grid, GridItem, Heading, HStack} from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import GameGrid from './components/GameGrid/GameGrid'
import Categories from './components/Category/Categories'
import { useState } from 'react'
import type { Category } from './hooks/useCategories'
import SortSelector from './components/SortSelector/SortSelector'
import BookHeading from './components/BookHeading/BookHeading'



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
    <GridItem area="nav">
      
     <HStack>
      <NavBar onSearch={(searchText)=>setBookQuery({...bookQuery,searchText})}/>

     </HStack>
    </GridItem>
    

    <GridItem marginTop={5} area="aside"display={{base:'none' , lg:'block'}} paddingX={5}>
      <Heading marginBottom ={3}as='h1' fontSize='3xl'>Categories</Heading>
      <Categories selectedCategory={bookQuery.category} onSelectCategory={category=>setBookQuery({...bookQuery,category})}/>
    </GridItem>
   
   
    <GridItem area="main" marginTop={5}>
      
      <BookHeading bookQuery={bookQuery}/>
      <SortSelector sortOrder = {bookQuery.sortOder}OnSelectSortOrder={(sortOder)=>setBookQuery({...bookQuery,sortOder})}/>
     
    
      <GameGrid bookQuery={bookQuery}/>
    </GridItem>
  </Grid>
}

export default App

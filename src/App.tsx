
import { Grid, GridItem, Heading, HStack} from '@chakra-ui/react'
import { NavBar } from './components/navbar/NavBar'
import Categories from './components/Category/Categories'
import { useState } from 'react'
import SortSelector from './components/SortSelector/SortSelector'
import BookHeading from './components/BookHeading/BookHeading'
import BookGrid from './components/BookGrid/BookGrid'



export interface BookQuery{
  categoryId? : number;
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
      <Categories selectedCategoryId={bookQuery.categoryId} onSelectCategory={category=>setBookQuery({...bookQuery,categoryId:category.id})}/>
    </GridItem>
   
   
    <GridItem area="main" marginTop={5}>
      
      <BookHeading bookQuery={bookQuery}/>
      <SortSelector sortOrder = {bookQuery.sortOder}OnSelectSortOrder={(sortOder)=>setBookQuery({...bookQuery,sortOder})}/>
     
    
      <BookGrid bookQuery={bookQuery}/>
    </GridItem>
  </Grid>
}

export default App

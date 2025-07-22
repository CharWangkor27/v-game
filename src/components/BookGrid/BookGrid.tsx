

import useGames from "../../hooks/useBooks";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import GameCardContainer from "../BookCardContainer/BookCardContainer";
import type { BookQuery } from "@/App";
import BookCard from "../BookCard/BookCard";
import React from "react";
import BookCardContainer from "../BookCardContainer/BookCardContainer";

interface Props{
  bookQuery:BookQuery 
}


const BookGrid = ({bookQuery}:Props) => {
    const {data, error, isLoading, isFetchingNextPage,fetchNextPage,hasNextPage} = useGames(bookQuery)
    const skeletons = [1,2,3,4,5,6];
  return (
    <Box  padding="10px">
    {error && <Text>{error.message}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg: 3, xl: 4}} gap={6} >
      {isLoading && skeletons.map(skeleton => 
      <GameCardContainer  key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
      {data?.pages.map((page,index)=>
      <React.Fragment key={index}>
        {page.results.map(book=>
        <BookCardContainer key={book.id}>
          <BookCard book={book}/>
        </BookCardContainer>
        )}

      </React.Fragment>)}
      
    </SimpleGrid>
    {hasNextPage && <Button onClick={()=>fetchNextPage()} marginY={2}>
      {isFetchingNextPage?'Loading...':'Load More'}
      </Button>} 
    </Box>
  )
}

export default BookGrid;

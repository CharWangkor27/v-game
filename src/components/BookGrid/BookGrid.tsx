
import {  SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCardSkeleton from "../BookCardSkeleton/BookCardSkeleton";
import GameCardContainer from "../BookCardContainer/BookCardContainer";
import BookCard from "../BookCard/BookCard";
import React from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import BookCardContainer from "../BookCardContainer/BookCardContainer";
import useBooks from "../../hooks/useBooks";



const BookGrid = () => {
    const {data, error, isLoading,fetchNextPage,hasNextPage} = useBooks()
    const skeletons = [1,2,3,4,5,6];
    const fetchBookCount = data?.pages.reduce((total,page)=>total+page.results.length,0) || 0;
  return (
    <>
    {error && <Text>{error.message}</Text>}
    <InfiniteScroll dataLength={fetchBookCount}
     hasMore = {!!hasNextPage}
     next={()=>fetchNextPage()}
     loader={<Spinner/>}>
    <SimpleGrid columns={{sm:1, md:2, lg: 3, xl: 4}}  padding="10px" gap={6} >
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
    </InfiniteScroll>
    </>
  )
}

export default BookGrid;

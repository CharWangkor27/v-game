

import useGames from "../../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCardSkeleton/GameCardSkeleton";
import GameCardContainer from "../GameCardContainer/GameCardContainer";
import type { BookQuery } from "@/App";

interface Props{
  bookQuery:BookQuery 
}


const GameGrid = ({bookQuery}:Props) => {
    const {data, error, isLoading} = useGames(bookQuery)
    const skeletons = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg: 3, xl: 5}} padding="10px" gap={5} >
      {isLoading && skeletons.map(skeleton => 
      <GameCardContainer  key={skeleton}><GameCardSkeleton/></GameCardContainer>)}
      {data.map(game=> (
      <GameCardContainer key={game.id}>
        <GameCard  game={game} />
      </GameCardContainer>
        ))}
    </SimpleGrid>
    </>
  )
}

export default GameGrid;

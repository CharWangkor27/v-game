import type { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import CriticScore from "../CiticScore/CriticScore"



interface Props{
    game:  Game
}

const GameCard = ({game}:Props) => {
  return(
    <Card.Root>
        <Image src={game.background_image}/>
        <CardBody>
          <HStack>
            <Heading>{game.name}</Heading>
            <CriticScore score = {game.metacritic}/>
          </HStack>
            
        </CardBody>
            
    </Card.Root>
  )
}

export default GameCard

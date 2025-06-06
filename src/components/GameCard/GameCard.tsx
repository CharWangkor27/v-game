import type { Game } from "@/hooks/useGames"
import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import CriticScore from "../CiticScore/CriticScore"



interface Props{
    game:  Game
}

const GameCard = ({game}:Props) => {
  return(
    <Card.Root gap ="2" borderRadius={10} overflow="hidden" width="300px" >
        <Image src={game.background_image}/>
        <CardBody>
            <Heading>{game.name}</Heading>
            <CriticScore score = {game.metacritic}/>
        </CardBody>
            
    </Card.Root>
  )
}

export default GameCard

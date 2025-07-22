import type { Book } from "@/hooks/useBooks"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import CriticScore from "../CiticScore/CriticScore"



interface Props{
    book:  Book
}

const GameCard = ({book}:Props) => {
  return(
    <Card.Root>
        <Image src={book.background_image}/>
        <CardBody>
          <HStack>
            <Heading>{book.name}</Heading>
            <CriticScore score = {book.metacritic}/>
          </HStack>
            
        </CardBody>
            
    </Card.Root>
  )
}

export default GameCard

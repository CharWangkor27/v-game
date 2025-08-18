import type { Book } from "@/hooks/useBooks"
import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react"
import CriticScore from "../CiticScore/CriticScore"
import { Link } from "react-router-dom"



interface Props{
    book:  Book
}

const GameCard = ({book}:Props) => {
  return(
    <Card.Root>
        <Image src={book.background_image}/>
        <CardBody>
          <HStack>
            <Heading>
              <Link to={'/books/'+ book.slug}> {book.name}</Link>
              
              </Heading>
            <CriticScore score = {book.metacritic}/>
          </HStack>
            
        </CardBody>
            
    </Card.Root>
  )
}

export default GameCard

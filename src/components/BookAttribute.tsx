
import { SimpleGrid,Text } from "@chakra-ui/react";
import type { Book } from "../entities/Book";
import CriticScore from "./CiticScore/CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props{
    book: Book
}


const BookAttribute = ({book}:Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
    <DefinitionItem term="Category">
      {book.genres.map(c=><Text key={c.id}>{c.name}</Text>)}
    </DefinitionItem>
    <DefinitionItem term="Number of Downloads">
      <CriticScore score={book.metacritic}/>
    </DefinitionItem>
    <DefinitionItem term="Authors">
      {book.publishers.map(a=><Text key={a.id}>{a.name}</Text>)}
    </DefinitionItem>
    </SimpleGrid>
  )
}

export default BookAttribute

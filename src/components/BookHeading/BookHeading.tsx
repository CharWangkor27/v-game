import type { BookQuery } from "@/App"
import { Heading } from "@chakra-ui/react"
interface Props{
    bookQuery: BookQuery;
}

const BookHeading = ({bookQuery}:Props) => {
    const heading = `${bookQuery.category?.name || ''}  Books`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default BookHeading

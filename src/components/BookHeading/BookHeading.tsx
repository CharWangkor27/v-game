import type { BookQuery } from "@/App"
import { Heading } from "@chakra-ui/react"
import useCategory from "../../hooks/useCategory";
interface Props{
    bookQuery: BookQuery;
}

const BookHeading = ({bookQuery}:Props) => {
  const category = useCategory(bookQuery.categoryId)
    const heading = `${category?.name || ''}  Books`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default BookHeading

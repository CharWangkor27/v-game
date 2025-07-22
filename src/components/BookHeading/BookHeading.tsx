import type { BookQuery } from "@/App"
import useCategories from "../../hooks/useCategories";
import { Heading } from "@chakra-ui/react"
interface Props{
    bookQuery: BookQuery;
}

const BookHeading = ({bookQuery}:Props) => {
  const {data:categories} = useCategories();
  const catergory = categories?.results.find(g=>g.id==bookQuery.categoryId)
    const heading = `${catergory?.name || ''}  Books`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default BookHeading

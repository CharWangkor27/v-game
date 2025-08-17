
import { Heading } from "@chakra-ui/react"
import useCategory from "../../hooks/useCategory";
import useBookQueryStore from "../../store";


const BookHeading = () => {
  const categoryId = useBookQueryStore(s=>s.bookQuery.categoryId)
  const category = useCategory(categoryId)
    const heading = `${category?.name || ''}  Books`
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{heading}</Heading>
  )
}

export default BookHeading

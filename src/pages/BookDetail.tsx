
import { Heading,  Spinner} from "@chakra-ui/react";
import useBook from "../hooks/useBook";
import { useParams } from "react-router-dom"
import ExpandableText from "../components/ExpandableText/ExpandableText";

import BookAttribute from "../components/BookAttribute";


const BookDetail = () => {
  const {slug}=useParams();
  const {data:book, isLoading, error} = useBook(slug!)
  if (isLoading) return <Spinner/>
  if (error || !book) throw error;
  

  return (
    <>
    <Heading>{book.name}</Heading>
    <ExpandableText>{book.description_raw}</ExpandableText>
    <BookAttribute book={book}/>
    </>
  )
}

export default BookDetail

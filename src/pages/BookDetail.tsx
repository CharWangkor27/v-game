
import { Heading, Spinner, Text } from "@chakra-ui/react";
import useBook from "../hooks/useBook";
import { useParams } from "react-router-dom"


const BookDetail = () => {
  const {slug}=useParams();
  const {data:book, isLoading, error} = useBook(slug!)
  if (isLoading) return <Spinner/>
  if (error || !book) throw error;
  

  return (
    <>
    <Heading>{book.name}</Heading>
    <Text>{book.description_raw}</Text>
    </>
  )
}

export default BookDetail

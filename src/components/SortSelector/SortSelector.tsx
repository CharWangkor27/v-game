import useBookQueryStore from "../../store";
import { Button, Menu, Portal, } from "@chakra-ui/react"
import { LuArrowDown } from "react-icons/lu";



const SortSelector = () => {
    const sortOrders = [
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Released date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'}
    ];

    const sortOrder = useBookQueryStore(s=>s.bookQuery.sortOrder);
    const setSortOrder = useBookQueryStore(s=>s.setSortOrder)
    const currentSortOrder = sortOrders.find(order=>order.value===sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='surface'>

           Sort: {currentSortOrder?currentSortOrder?.label:'Relecance'}
           <LuArrowDown/>
        </Button>
      </Menu.Trigger> 
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
                sortOrders.map(item=><Menu.Item 
                    onClick={()=>setSortOrder(item.value)}
                    value={item.value} key={item.value}>{item.label}</Menu.Item>)
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector

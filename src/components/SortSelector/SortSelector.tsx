import { Button, Menu, Portal, } from "@chakra-ui/react"
import { HiSortDescending } from "react-icons/hi";

interface Props{
    OnSelectSortOrder :(sortOrder:string)=>void;
    sortOrder: string;
}

const SortSelector = ({OnSelectSortOrder,sortOrder}:Props) => {
    const sortOrders = [
        {value:'',label:'Relevance'},
        {value:'-added',label:'Date added'},
        {value:'name',label:'Name'},
        {value:'-released',label:'Released date'},
        {value:'-metacritic',label:'Popularity'},
        {value:'-rating',label:'Average rating'}
    ];
    const currentSortOrder = sortOrders.find(order=>order.value===sortOrder);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant='plain'>

           Sort: {currentSortOrder?currentSortOrder?.label:'Relecance'}
           <HiSortDescending/>
        </Button>
      </Menu.Trigger> 
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {
                sortOrders.map(item=><Menu.Item 
                    onClick={()=>OnSelectSortOrder(item.value)}
                    value={item.value} key={item.value}>{item.label}</Menu.Item>)
            }
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}

export default SortSelector

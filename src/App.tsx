import { useState } from "react";
import { useQuery } from "react-query";

// Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// Custom Component
import { Item } from './Item/Item';
import { Cart } from './Cart/Cart'

// Styles
import { Wrapper, StyledButton } from "./App.styles";
import { DrawerIconButton } from "./utility/DrawerIconButton";

// Product fetching related things
// Types
type Rating = {
  rate: number;
  count: number
}
export type CartItemType = {
  id:number;
  category: string;
  description: string;
  image: string;
  price:number;
  title: string;
  amount: number;
  rating: Rating;
}
const getProducts = async (): Promise<CartItemType[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
}

/**
 * Main App function
 * @returns jsx
 */
export const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]); 
  // handle query
  const {data, isLoading, error} = useQuery<CartItemType[]>(
    'products', 
    getProducts
  );
  
  // manipulate data
  const getTotalItems = (items: CartItemType[]) => {
    return items.reduce((acc: number, items)=> acc + items.amount, 0)
  }
  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      // 1. is the item already in the card
      const isItemInTheCart = prev.find(item=> item.id=== clickedItem.id);
      if (isItemInTheCart) {
        return prev.map(item => {
          return item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
        })
      } 
      // if not set the amount
      else {
        return [...prev, { ...clickedItem, amount: 1}]
      }
    })
  };
  
  const handleRemoveFromCart = (id: number): void => {
    setCartItems(prev => {
      return prev.map(item=>{
        return item.id === id ? {...item, amount: item.amount - 1} : item;
      }).filter(item => (item.amount >= 1));
    })
  };
  
  if (isLoading) return <LinearProgress/>
  if (error) return <div>Something went wrong</div>
  
  // render
  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={()=> setCartOpen(false)}> 
        <Cart 
          cartItems={cartItems} 
          removeFromCart={handleRemoveFromCart} 
          addToCart={handleAddToCart}>
        </Cart>
      </Drawer>
      <DrawerIconButton>
        <StyledButton onClick={()=> setCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color='error'> 
            <AddShoppingCartIcon/>
          </Badge>
        </StyledButton>
      </DrawerIconButton>
      
      <Grid container spacing={3}>
        {data?.map((item)=>{
          return <Grid item key={item.id} xs={12} sm={4}> 
            <Item item={item} handleAddToCart={handleAddToCart}/>
          </Grid>
        })}
      </Grid>
    </Wrapper>
  );
}

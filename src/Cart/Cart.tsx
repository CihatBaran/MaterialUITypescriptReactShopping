import { CartItem } from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import { ReactNode } from "react";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
    children?: ReactNode;
}

export const Cart: React.FC<Props> = (props: Props) => {
    return <Wrapper>
        <h2>Your shopping Cart</h2>
        {props.cartItems.length === 0 ? <p>No Items in the cart.</p> : null}
        {props.cartItems.map(item=> (
                <CartItem 
                    key={item.id} 
                    item={item} 
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                />
        ))}
    </Wrapper>
}
import { Button } from "@material-ui/core";
// Types
import { CartItemType } from "../App";
// Styles
import { Wrapper } from "./CartItem.styles";

type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<Props> = (props: Props) => {
    return <Wrapper>
        <div>
            <h3>{props.item.title}</h3>
        </div>
        <div className="price-arrangement">
            <div className="information">
                <p>
                    Price: ${props.item.price}
                </p>
                <p>
                    Total: ${(props.item.amount * props.item.price).toFixed(2)}
                </p>
            </div>
            <div className="buttons">
                <Button size="small" disableElevation variant="contained" onClick={
                    ()=> props.removeFromCart(props.item.id)
                }>
                    -
                </Button>
                <p>
                    {props.item.amount}
                </p>
                <Button size="small" disableElevation variant="contained" onClick={
                    ()=> props.addToCart(props.item)
                }>
                    +
                </Button>
            </div>
            <img src={props.item.image} alt={props.item.title}></img>
        </div>
        
        
    </Wrapper>
}

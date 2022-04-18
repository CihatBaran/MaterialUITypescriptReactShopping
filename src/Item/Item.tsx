import { Button } from "@material-ui/core";

//Types
import { CartItemType } from "../App";
import { Wrapper } from "./Item.styles";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

export const Item: React.FC<Props> = (props: Props) => {
    return <Wrapper>
        <div className="image-conatiner">
            <img src={props.item.image} alt={props.item.title}></img>
        </div>
        <div>
            <h3>
                {props.item.title}
            </h3>
            <p>
                {props.item.description}
            </p>
            <h3>
                {props.item.price}
            </h3>
        </div>
        <Button onClick={()=>{
            props.handleAddToCart(props.item)
        }}>
            Add Item
        </Button>
    </Wrapper>
}
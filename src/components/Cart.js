import ShopItem from "./ShopItem";

const Cart = (props) => {
    
    return(
        <div className ="container">
            {props.cart.map((cartItem) => 
            <ShopItem
            key={cartItem.id}
            shopItem={cartItem}/>
            )}
        </div>
    )
}
export default Cart;
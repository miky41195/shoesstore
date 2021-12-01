import ShopItem from './ShopItem';
const Shop = (props) =>  {
    return(
        <div className ="container">
            {props.shop.map((shopItem) => 
            <ShopItem
            key={shopItem.id}
            shopItem={shopItem}
            onClick={props.onAddItem}/>
            )}
        </div>
    )
}

export default Shop;
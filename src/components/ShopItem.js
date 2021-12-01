import Card from "./Card";

const ShopItem = (props) => {
    const {name,brand,sizes,price} = props.shopItem;

    const addHandler = () => {
        props.onClick(props.shopItem);
    }
    return(
        <Card>
            <div className="info">
                <h2>
                    {name}
                </h2>
                <h4>
                    {brand}
                </h4>
                <h4>
                   available sizes: {sizes.join(' - ')}
                </h4>
            </div>
            <div className="price">
                {price}
            </div>
            <div>
                <button onClick={addHandler}>Buy</button>
            </div>
            
        </Card>
    )
}
export default ShopItem;
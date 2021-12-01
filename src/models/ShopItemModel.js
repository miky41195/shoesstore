class ShopItemModel {
    constructor(id,name,brand,sizes,price){
        this.id = id || Math.random().toString();
        this.name = name;
        this.brand = brand;
        this.sizes = sizes;
        this.price = price;
    }
}

export default ShopItemModel;
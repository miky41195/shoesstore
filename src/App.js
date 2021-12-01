import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import inventory from './inventory.json';
import Shop from './components/Shop';
import ShopItemModel from './models/ShopItemModel';
import Cart from './components/Cart';
import Dialog from './components/Dialog';
function App() {
  const [shopItems,setShopItems] = useState(
    inventory.map(si => new ShopItemModel(si.id,si.name,si.brand,si.sizes,si.price))
  )
  const [cartItems,setCartItems] = useState([]);
  const [showDialog,setShowDialog] = useState(false);
  const [itemToAdd,setItemToAdd] = useState();
  const [isDisabled, setIsDisabled] = useState(true)
  let choosedItem = '';
  const sizeHandler = (e) => {
    choosedItem = JSON.parse(JSON.stringify(itemToAdd));
    choosedItem.sizes = [parseInt(e)];
    console.log(e,choosedItem)
    setIsDisabled(false)
    if(isNaN(choosedItem.sizes[0])){
      setIsDisabled(true)
    }
    //setItemToAdd(newItem);
  }
  const addItemHandler = () => {
    setShowDialog(false);
    setCartItems((previousShopItems) => [...previousShopItems, choosedItem])
    console.log(cartItems)
  }
  const showDialogHandler = (shopItem) => {
    setItemToAdd(shopItem);
    setShowDialog(true);
  }
  return (
    <React.Fragment>
      {
        showDialog &&
      <Dialog dialog={itemToAdd} onBuy={addItemHandler} onSelectChange={sizeHandler} isDisabled={isDisabled} />
      }
      <Header onDisable={cartItems.length > 0 ? false : true}/>
      <Shop shop={shopItems} onAddItem={showDialogHandler}/>
      <Cart cart={cartItems}/>
    </React.Fragment>
  );
}

export default App;
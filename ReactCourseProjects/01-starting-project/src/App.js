import React from "react";
import Header from "./components/Header/Header";
import Cart from "./components/Meals/Cart";
import Meals from "./components/Meals/Meals";
import ContextProvider from "./components/store/CardContextProvider";
function App() {
  const [showCart,setShowcart]=React.useState(false)
  function ShowCartHandler(){
    setShowcart(true)
  }
  function CloseShowCart(){
    setShowcart(false)
  }
  return (
    <ContextProvider>
      {
        showCart && <Cart onClose={CloseShowCart} />
      }
      <Header onShowCart={ShowCartHandler}/>
      <Meals />
    </ContextProvider>
  );
}

export default App;

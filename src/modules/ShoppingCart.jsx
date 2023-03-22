import { useState, useEffect } from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../css/shoppingcart.scss";
import {incrementCart, decrementCart} from '../functions/shopcartFunctions'

export const ShoppingCart = ({ cartItems,gesamtPreis,setGesamtPreis}) => {

  useEffect(() => {
    calculateCard();
  }, [cartItems]);

  const calculateCard = () => {
    let total = cartItems.reduce((acc, cur) => {
      acc = acc + cur.preis;
    });
    setGesamtPreis(total);
  };

  return (
    cartItems && (
      <div className="shoppingCard">
        {cartItems.map((item, i) => (
          <div>
            <p>{item.preis}€</p>
            <p>{item.title}</p>
            <button>+</button>
            <button>-</button>
          </div>
        ))}
        Total : {gesamtPreis}
      </div>
    )
  );
};

// compactCart ist für die schnellAnsicht
export const CompactCart = ({ cartItems,gesamtPreis,setCartItems }) => {
  return (
    <div className="compactCart">
{
    cartItems?.map((item) => (
        <div>
            <p>{item.preis}€</p>
            <p>{item.count}</p>
            <p>{item.title}</p>
            <Button
             onClick={() => decrementCart(cartItems, item,setCartItems)}
             size="small"
             sx={{
               color: "white",
               padding: "8px",
               fontSize: "bold",
               backgroundColor: "#e89637",
               "&:hover": {
                 transform: "scale(1.05)",
                 backgroundColor: "#e89637",
               },
             }}>-</Button>
            <Button
            onClick={() => incrementCart(cartItems, item,setCartItems)}
             size="small"
             sx={{
               color: "white",
               padding: "8px",
               fontSize: "bold",
               backgroundColor: "#e89637",
               "&:hover": {
                 transform: "scale(1.05)",
                 backgroundColor: "#e89637",
               },
             }}>+</Button>
        </div>
    ))
}

Total : {gesamtPreis}

<Button
             size="small"
             sx={{
               color: "white",
               padding: "8px",
               fontSize: "bold",
               backgroundColor: "#e89637",
               "&:hover": {
                 transform: "scale(1.05)",
                 backgroundColor: "#e89637",
               },
             }}>Checkout</Button>
      
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Products, Navbar, Cart, Checkout } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onRemove = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onAdd = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      // localStorage.setItem("cartItems",JSON.stringify(cartItems))

      // JSON.parse(localStorage.getItem("cartItems"))
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const fetchProducts = async () => {
    await fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((receiveData) => setProducts(receiveData));
  };

  const onRemoveProduct = (product) => {
    const exist = cartItems?.find((x) => x.id === product.id);
    if(exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  }

  const onEmptyCart = () => {
         cartItems.forEach(element => {
          setCartItems(cartItems.filter((element) => element.id !== element.id))
         });
  }
  

  // const fetchCart =async () => {
  //     const cart = await fetch("http://localhost:8080/api/cart/getProducts?cart_id="+localStorage.getItem("id"))
  //     .then(response=> response.json())
  //     .then(receiveData => setCart(receiveData))
  //     .then(receiveData=> console.log(receiveData));

  // }

  useEffect(() => {
    fetchProducts();
    if (localStorage.getItem("cartItems")) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <Router>
      <div>
        <Navbar onAdd={onAdd} cartItems={cartItems} />
        <Switch>
          <Route exact path="/">
            <Products onAdd={onAdd} products={products} />
          </Route>

          <Route exact path="/cart">
            <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} onRemoveProduct={onRemoveProduct} onEmptyCart={onEmptyCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

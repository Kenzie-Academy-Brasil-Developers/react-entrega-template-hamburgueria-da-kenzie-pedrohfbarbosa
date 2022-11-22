import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredWord, setFilteredWord] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentSale, setCurrentSale] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const instance = axios.create({
    baseURL: "https://hamburgueria-kenzie-json-serve.herokuapp.com",
    timeout: 3000,
  });

  useEffect(() => {
    instance
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const totalPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(currentSale.reduce((x, y) => x + y.price, 0));

  const handleAddToCart = (product) => {
    const testProduct = currentSale.find((e) => e.id === product.id);

    !testProduct
      ? setCurrentSale(currentSale.concat([product]))
      : setShowToast(true);
  };

  const handleRemoveFromCart = (id) => {
    const newCurrentSale = currentSale.filter((e) => e.id !== id);
    setCurrentSale(newCurrentSale);
  };

  const handleSearch = (search) => {
    setFilteredWord(search);
    const newFilter = products.filter(
      (e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(newFilter);
  };

  const resetToAllProducts = () => {
    setFilteredWord(null);
    setFilteredProducts(null);
  };

  return (
    <div>
      <Header
        handleSearch={handleSearch}
        resetToAllProducts={resetToAllProducts}
      />
      <ProductsList
        filteredWord={filteredWord}
        products={products}
        filteredProducts={filteredProducts}
        handleAddToCart={handleAddToCart}
      />
      <Cart
        currentSale={currentSale}
        cartTotal={totalPrice}
        handleRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

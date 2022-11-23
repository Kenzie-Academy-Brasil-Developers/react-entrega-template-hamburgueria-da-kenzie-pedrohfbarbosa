import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/Header";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import styles from "./styles/style.module.css";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredWord, setFilteredWord] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [currentSale, setCurrentSale] = useState([]);

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

    if (!testProduct) {
      setCurrentSale(currentSale.concat([product]));
      toast.success("Item adicionado ao carrinho com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Item já está no carrinho", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
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

  const clearCard = () => {
    setCurrentSale([]);
  };

  return (
    <div className={styles.app}>
      <Header
        handleSearch={handleSearch}
        resetToAllProducts={resetToAllProducts}
      />
      <div className="container">
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
          clearCard={clearCard}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

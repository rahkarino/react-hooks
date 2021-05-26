import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import Search from "./Search";
import axios from "axios";
// import axios from 'axios'

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://react-hook-main-21333-default-rtdb.firebaseio.com/products.json')
    .then(res => res.json())
    .then(responseData => {
      const loadedProducts = []
      for (const item in responseData) {
        loadedProducts.push({
          id: item,
          title: responseData[item].title,
          amount: responseData[item].amount
        })
      }
      setProducts(loadedProducts)
    })
  }, [])
  const searchProductsHandler = (items) => {
    setProducts(items)
  }
  const addProductHandler = (item) => {
    // axios.post('https://react-hook-main-21333-default-rtdb.firebaseio.com/products.json', item)
    // .then(res => console.log(res)).catch(err => console.log(err))
    fetch("https://react-hook-main-21333-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((responseData) => {
        setProducts((prevState) => {
          return [
            ...prevState,
            {
              id: responseData.name,
              ...item,
            },
          ];
        });
      });
    });
  };
  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />

      <section>
        <Search onLoadProducts={searchProductsHandler} />
        <ProductList products={products} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Products;

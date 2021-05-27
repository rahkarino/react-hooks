import React, { useCallback, useReducer } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import Search from "./Search";
// import axios from 'axios'


const productReducer = (state, action) => {
  switch (action.type) {
    case 'SET': 
      return action.products
    case 'ADD':
      return [...state, action.product]
    default: throw new Error('Error')
  }
}

const Products = () => {
  const [products, dispatch] = useReducer(productReducer, [])
  const searchProductsHandler = useCallback((items) => {
    // setProducts(items)
    dispatch({ type: 'SET', products: items })
  }, [])
  const addProductHandler = (item) => {
    // axios.post('https://react-hook-main-21333-default-rtdb.firebaseio.com/products.json', item)
    // .then(res => console.log(res)).catch(err => console.log(err))
    fetch("https://react-hook-main-21333-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      res.json().then((responseData) => {
        // setProducts((prevState) => {
        //   return [
        //     ...prevState,
        //     {
        //       id: responseData.name,
        //       ...item,
        //     },
        //   ];
        // });
        dispatch({
          type: 'ADD',
          product: {id: responseData.name, ...item}
        })
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

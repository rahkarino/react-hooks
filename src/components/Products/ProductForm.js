import React, { useState } from "react";
import Card from "../UI/Card";

import "./ProductForm.css";

const ProductForm = React.memo((props) => {
  // const [inputState, setInputState] = useState({ title: "", amount: "" });
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddProduct({title: title, amount: amount})

  };
  return (
    <section className="product-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">عنوان</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">تعداد</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="product-form__actions">
            <button type="submit">افزودن</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default ProductForm;

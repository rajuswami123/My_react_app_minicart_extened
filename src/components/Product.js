import React from 'react';
export default function Product(props) {
  const { product, onAdd ,check,onRemove} = props;
  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>{
       <button onClick={() =>  !check(product)?onAdd(product):onRemove(product)} >{!check(product)?"Add to cart":"Remove from cart"}</button>
        }
      </div>
    </div>
  );
}
import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd ,onRemove,valll} = props;
  return (
    <main className="block col-2">
      <h2 className='heading_in_main'>Products</h2>
      <div className="row">
        {products.map((product) => (
  
  <Product className="product-item" key={product.id} product={product} onAdd={onAdd} check = {props.check} onRemove={onRemove} valll={valll} ></Product>
          
          
          
       
        ))}
      </div>
    </main>
  );
}
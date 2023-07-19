// import Header from './components/Header';
// import Main from './components/Main';
// import Basket from './components/Basket';
// import data from './data';
import Firstui from './components/Firstui';
// import { useState } from 'react';
function App() {
//   const { products } = data;
//   const [cartItems, setCartItems] = useState([]);
//   const [Size,setSize] =useState(" ")
//   const [col,setcol] =useState(" ")

//   function Handleclick(){
//    setSize((e)=>e.select.value===data.products.filter(Size))
// }
//   const onAdd = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       setcol('yellow')
//        const aa= cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//         )
//         setCartItems(aa)
     
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
      
//     }
    
//   };
//   const check=(product)=>{
//     const exist = cartItems.find((x) => x.id === product.id);
//     return exist;
//   }
//   const onRemove = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist.qty === 1) {

//       setCartItems(cartItems.filter((x) => x.id !== product.id));
//     } else {
//     setcol('red')

//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//         )
//       );
//     }
//   };
 
  return (
    <div className="App" >
      <Firstui/>
     
      {/* <Header countCartItems={cartItems.length} Handleclick={Handleclick}></Header>
      <div className="row">
        <Main className='products' products={products}  onAdd={onAdd} check= {check} onRemove={onRemove} col={col}></Main>
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </div> */}
      
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

let shoppingCartItems = [
  {
    item: '8F',
    description: 'This is the 8F lounge.',
    density: 500,
  },
  {
    item: '3F',
    description: 'This is the 3F lounge',
    density: 150,
  },
  {
    item: '2F',
    description: 'This is the 2F lounge',
   density: 100, 
  },
  {
    item: '3F',
    description: 'This is the 3F lounge',
    density: 150,
  },

]

function App() {
  return (
    <div className="App">
      <h1>NYU Shanghai Floor Map</h1>
      <h2>Check for available lounges!</h2>
     <ShoppingCart />
    </div>
  );
}

function makeProduct(singleProduct){
return(
  <Product item={singleProduct.item} image={singleProduct.image} description={singleProduct.description} density={singleProduct.density}/>
)
}

function ShoppingCart() {
  const products = shoppingCartItems.map(makeProduct);
  return(
    <div className="cart">
    {products}
    </div>
  );
}

function Product(props) {
  return(
    <div className="product">
      <p className="product-title">{props.item}</p>
      <p className="product-description">{props.description}</p>
      <p className="product-price">{props.density}</p>
      

    </div>
  )
}



export default App;

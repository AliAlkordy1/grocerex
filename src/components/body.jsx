import dataOfJson from "./../data.json"; // Importing the local JSON file
import { useState, useEffect } from "react";
import './../body.css';
export default function Body() {
  const [products, setProducts] = useState([]);

  // Using useEffect to set the products from the imported JSON
  useEffect(() => {
    setProducts(dataOfJson);
  }, []);

  return (
    <>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} className="card-img"/>
            <h2>{product.name}</h2>
            <p id="old-price">old price : {product.price}</p>
            <p>discount Price: {product.discountPrice}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
       
       fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setProducts(result))
 
    }, [])

  const Cards = products.map(product => 
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ background: "white" }}>
          <Button variant="primary">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>

)

  return (
    <>
      <h1>Product DashBoard</h1>
      <div className="row">
        {Cards}
      </div>
    </>
  );
};

export default Product;

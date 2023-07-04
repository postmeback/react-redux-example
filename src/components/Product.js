import { useEffect } from "react";
import { Alert, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { setProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    //dispatch an action for fetchProducts
    dispatch(setProducts());
  }, [dispatch]);

  if (status === "Loading") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return (
      <Alert variant="danger" key="danger">
        Something went wrong.
      </Alert>
    );
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const Cards = products.map((product) => (
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
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product DashBoard</h1>
      <div className="row">{Cards}</div>
    </>
  );
};

export default Product;

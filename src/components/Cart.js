import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove({ id }));
  };

  const increaseCount = (id) => {
    // Implement logic to increase item count
  };

  const decreaseCount = (id) => {
    
  };

  const renderCartItems = cartItems.map((item) => (
    <div className="col-md-4" style={{ marginBottom: "10px" }} key={item.id}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>INR {item.price * item.count}</Card.Text>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              variant="outline-secondary"
              onClick={() => decreaseCount(item.id)}
              disabled={item.count === 0}
            >
              -
            </Button>
            <div className="mx-2">{item.count}</div>
            <Button
              variant="outline-secondary"
              onClick={() => increaseCount(item.id)}
            >
              +
            </Button>
          </div>
        </Card.Body>
        {item.count > 0 && (
          <Card.Footer style={{ background: "white" }}>
            <Button
              variant="danger"
              onClick={() => removeFromCart(item.id)}
            >
              Remove Item
            </Button>
          </Card.Footer>
        )}
      </Card>
    </div>
  ));

  return <div className="row">{renderCartItems}</div>;
};

export default Cart;

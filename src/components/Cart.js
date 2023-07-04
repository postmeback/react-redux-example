import { useSelector } from "react-redux/es/hooks/useSelector";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";


const Cart = () => {

const products = useSelector(state => state.cart);

const dispatch = useDispatch();

const removeFromCart = (id) => {
    dispatch(remove(id));
}

const Cards = products.map(product => 
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
          <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
    )

    return (
        <>
          <div className="row">
            {Cards}
          </div>
        </>
      );
}

export default Cart;
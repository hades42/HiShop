import { Card } from "react-bootstrap";
import React from "react";

const Product = (props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} />
      </a>

      <Card.Body>
        <a href={`/product/${props.product._id}`}>
          <Card.Title as="div">
            <strong>{props.product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            {props.product.rating} from {props.product.numReviews} reviews
          </div>
        </Card.Text>

        <Card.Text as="h3">${props.product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;

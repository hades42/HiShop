import React from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../component/Product.js";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;

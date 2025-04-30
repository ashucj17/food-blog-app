import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchFoodsRequest } from '../redux/actions';
import { Card, Button, Row, Col, Container, Spinner } from 'react-bootstrap';

const FoodList = () => {
  const dispatch = useDispatch();
  const { foods, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchFoodsRequest());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger my-3">Error: {error}</div>;
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Food Blog</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {foods.map(food => (
          <Col key={food.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={food.image} alt={food.name} />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{food.category}</Card.Subtitle>
                <Card.Text>{food.description}</Card.Text>
                <Link to={`/food/${food.id}`}>
                  <Button variant="primary" className="w-100">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodList;

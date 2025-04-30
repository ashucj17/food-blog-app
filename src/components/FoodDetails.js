import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchFoodDetailsRequest } from '../redux/actions';
import { Container, Row, Col, Image, ListGroup, Card, Spinner, Button } from 'react-bootstrap';

const FoodDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentFood, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchFoodDetailsRequest(id));
  }, [dispatch, id]);

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

  if (!currentFood) {
    return <div className="alert alert-info my-3">No food found</div>;
  }

  return (
    <Container className="my-5">
      <Link to="/" className="btn btn-light mb-3">
        &larr; Back to Food List
      </Link>
      <Row>
        <Col md={5}>
          <Image src={currentFood.image} alt={currentFood.name} fluid className="mb-3" />
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>{currentFood.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{currentFood.category}</Card.Subtitle>
              <Card.Text>{currentFood.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={7}>
          <Card className="mb-4">
            <Card.Header as="h5">Ingredients</Card.Header>
            <ListGroup variant="flush">
              {currentFood.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
          <Card>
            <Card.Header as="h5">Instructions</Card.Header>
            <ListGroup variant="flush" as="ol" numbered>
              {currentFood.instructions.map((step, index) => (
                <ListGroup.Item key={index}>{step}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FoodDetails;
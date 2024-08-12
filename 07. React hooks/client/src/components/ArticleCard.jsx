import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ArticleCard({
    id,
    title
}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://icon-library.com/images/article-icon/article-icon-25.jpg" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
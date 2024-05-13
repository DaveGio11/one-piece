import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function HomePage() {
  const [personaggi, setPersonaggi] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function DBChar() {
      try {
        const response = await fetch("https://dragonball-api.com/api/characters");
        const result = await response.json();
        console.log(result);
        setPersonaggi(result.items);
      } catch (error) {
        console.error(error);
      }
    }
    DBChar();
  }, []);

  const goDetails = (id) => {
    navigate(`/Details/${id}`);
  };
  return (
    <>
      <h1>Personaggi DragonBall</h1>
      {personaggi.map((personaggio) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personaggio.image} style={{ maxWidth: "100px" }} />
          <Card.Body>
            <Card.Title>{personaggio.name}</Card.Title>
            <Card.Text>
              Razza: {personaggio.race}; Affiliazione: {personaggio.affiliation}
            </Card.Text>
            <Button onClick={() => goDetails(personaggio.id)} variant="primary">
              Dettagli
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default HomePage;

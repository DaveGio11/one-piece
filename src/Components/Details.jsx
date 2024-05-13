import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

function Details() {
  const [personaggio, setPersonaggio] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function DBPersonggio() {
      try {
        const response = await fetch("https://dragonball-api.com/api/characters/" + `${id}`);
        const data = await response.json();
        setPersonaggio(data);
      } catch {
        console.error("Il personaggio non è stato trovato");
      }
    }
    DBPersonggio();
  }, [id]);

  return (
    <>
      <h1>{personaggio.name}</h1>
      <Carousel>
        {personaggio.transformations.map((transf, index) => (
          <Carousel.Item key={index}>
            <Image src={transf.image} style={{ maxWidth: "100px" }} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default Details;

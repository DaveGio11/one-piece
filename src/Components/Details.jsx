import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchChar } from "../Redux/Actions/detailsAction";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { personaggio, loading, error } = useSelector((state) => state.personaggio);
  useEffect(() => {
    dispatch(fetchChar(id));
  }, [dispatch, id]);

  if (!personaggio) {
    return <div>Non trovato</div>;
  }
  return (
    <>
      <h1>{personaggio.name}</h1>
      <Carousel>
        {personaggio.transformations &&
          personaggio.transformations.map((transf, index) => (
            <Carousel.Item key={index}>
              <Image src={transf.image} style={{ maxWidth: "100px" }} />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default Details;

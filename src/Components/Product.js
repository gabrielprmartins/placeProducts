import React from "react";
import { useParams } from "react-router-dom";
import Head from "./Head";
import styles from "./Product.module.css";
import Loading from "./Loading";

const Product = () => {
  const { id } = useParams();

  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useState(() => {
    async function fetchData(url) {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (erro) {
        setError(erro);
      } finally {
        setLoading(false);
      }
    }
    fetchData(`https://fakestoreapi.com/products/${id}`);
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>Ocorreu um erro.</p>;
  if (!data) return null;
  return (
    <section className={`${styles.product} animeUp`}>
      <Head
        title={`placeProducts | ${data.title}`}
        description={`Buy the ${data.title} now. With the most company of Products in the America Latina.`}
      />
      <img src={data.image} alt={data.title} />
      <div className={styles.productInfo}>
        <p className={styles.price}>
          {data.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default Product;

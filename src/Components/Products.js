import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import styles from "./Products.module.css";
import Loading from "./Loading";

const Products = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
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
    fetchData("https://fakestoreapi.com/products");
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Ocorreu um erro.</p>;
  if (!data) return null;
  return (
    <section className="animeUp">
      <Head
        title="placeProducts"
        description="placeProducts - The most company of Products in America Latina."
      />
      <div className={styles.products}>
        {data.map(({ id, image, title, price }) => (
          <Link to={`product/${id}`} className={styles.product} key={id}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>
              {price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;

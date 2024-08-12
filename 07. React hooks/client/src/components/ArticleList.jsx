import { useFetch } from "../hooks/useFetch";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ArticleCard from "./ArticleCard";
import styles from "../App.module.css";
import Spinner from "react-bootstrap/esm/Spinner";


export default function ArticleList() {
    const {
        data: articles,
        isFetching,
        refetch,
      } = useFetch("http://localhost:3030/jsonstore/advanced/articles/list", []);
    
  return (
    <>
    {isFetching ? (
        <Spinner />
      ) : (
        <div className={styles["article-list"]}>
          {articles.map((article) => (
            <ArticleCard key={article._id} {...article} />
          ))}
        </div>
      )}
      <Button variant="primary" onClick={refetch}>Refresh</Button>{" "}
    </>
  )
}
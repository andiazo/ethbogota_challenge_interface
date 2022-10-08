import Content from "../components/Content";
import styles from '../styles/Home.module.css'

export default function index(props) {
  return (
    <>
    <main className={styles.main}>
        <h1 className={styles.title}>
          {props.title}
        </h1>
      <div>
        <Content data={props.data} />
      </div>
    </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  ).then((response) => response.json());
  const title = "ABC Básico"
  return {
    props: { data, title}
  };
};
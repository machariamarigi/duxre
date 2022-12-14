import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectValue,
} from "../store/slices/counterSlice";
import { RootState } from "../store/store";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Duxre</title>
        <meta name="description" content="Nextjs with redux" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>The value of count is {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment with 10
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

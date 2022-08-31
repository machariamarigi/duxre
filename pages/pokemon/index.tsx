import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemon,
  selectFilteredPokemon,
  selectSearch,
  setSearch,
} from "../../store/slices/pokemonSlice";
import getStore from "../../store/store";
import styles from "../../styles/Pokemon.module.css";

const Pokemon = ({ initialState }) => {
  const dispatch = useDispatch();

  const search = useSelector(selectSearch);
  const pokemon = useSelector(selectFilteredPokemon);

  return (
    <div className={styles.main}>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className={styles.search}
        />
      </div>
      <div className={styles.container}>
        {pokemon.slice(0, 20).map((p) => (
          <div key={p.id} className={styles.image}>
            <img
              src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${p.image}`}
              alt={p.name}
            />
            <h2>{p.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const store = getStore();
  await store.dispatch(getPokemon());

  return {
    props: {
      initialState: store.getState(),
    },
  };
}

export default Pokemon;

/** @format */
import Image from 'next/image';
import { useRouter } from 'next/router';
import {  getOnePokemonData } from '../../lib/pokemon';
import styles from './pokemon-detail.module.css';
import { IPokemon, IMove, ITypes, IStats } from '../../interfaces/interface';
import { GetStaticPaths } from 'next';


export default function Pokemon({ pokemon }: IPokemon) {
  const router = useRouter();
   if (router.isFallback) {
     return <div>Loading...</div>;
   }
  return (
    <div className={styles.pokemonDetailsWrapper}>
      <button className={styles.button} onClick={() => router.back()}>
        back to home
      </button>
      <h1>{pokemon.name}</h1>
      <div>
        <div className={styles.pokemonImg}>
          {pokemon.sprites.back_default && (
            <Image
              src={`${pokemon.sprites.back_default}`}
              height={100}
              width={100}
              alt={pokemon.name}
              className={styles.img}
            />
          )}
        </div>

        <div className={styles.otherDetailsWrapper}>
          <div className={styles.title}>Species</div>
          <div className={styles.value}>
            <span className={styles.span}>name:</span> {pokemon.species.name}
          </div>
          <div className={styles.value}>
            <span className={styles.span}>url:</span> {pokemon.species.url}
          </div>
        </div>
        <hr />
        <div className={styles.otherDetailsWrapper}>
          <div className={styles.title}>Weight</div>
          <div className={styles.value}>{pokemon.weight}</div>
        </div>
        <hr />

        <div className={styles.otherDetailsWrapper}>
          <div className={styles.title}>Stats</div>
          {pokemon.stats.map((stat: IStats, index: number) => {
            return (
              <div key={index} className={styles.statsWrapper}>
                <div className={styles.value}>
                  <span className={styles.span}>base_stat:</span>
                  {stat.base_stat}
                </div>
                <div className={styles.value}>
                  <span className={styles.span}>effort:</span> {stat.effort}
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className={styles.otherDetailsWrapper}>
          <div className={styles.title}>Moves</div>
          <div className={styles.value}>
            {pokemon.moves.map((m: IMove) => {
              return (
                <div key={m.move.name} className={styles.movesWrapper}>
                  <div className={styles.value}>
                    <span className={styles.span}>name:</span>
                    {m.move.name}
                  </div>
                  <div className={styles.value}>
                    <span className={styles.span}>url:</span> {m.move.url}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <hr />

        <div className={styles.otherDetailsWrapper}>
          <div className={styles.title}>Types</div>
          {pokemon.types.map((t: ITypes) => {
            return (
              <div key={t.type.name} className={styles.typesWrapper}>
                <div className={styles.value}>
                  <span className={styles.span}>name:</span> {t.type.name}
                </div>
                <div className={styles.value}>
                  <span className={styles.span}>url:</span> {t.type.url}
                </div>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
}

export async function getStaticProps(context: { params: { pokemonId : string } }){
  const { params } = context;
  const pokemon = await getOnePokemonData(params.pokemonId);
  return {
    props: { pokemon },
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: { pokemonId: '1' },
      },
    ],
    fallback: true,
  };
};

import styles from './Pokemon.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  pokemon: { pokemonImg: string; id: string; name: string; };
}
const Pokemon = ({ pokemon }: IProps) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} passHref>
      <li className={styles.listItem}>
        <div>
          {pokemon.pokemonImg && (
            <Image
              src={`${pokemon.pokemonImg}`}
              height={150}
              width={150}
              alt={pokemon.name}
            />
          )}
        </div>
        <div>{pokemon.name}</div>
      </li>
    </Link>
  );
};

export default Pokemon;

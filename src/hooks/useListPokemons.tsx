import { useEffect, useState } from "react";
import { getPokemons } from "../services";

export interface IPokemonList {
  id: number;
  name: string;
  photo: string;
  url: string;
  types: string[];
}

const useListPokemons = () => {
  const [loading, setLoading] = useState(true);
  let [listPokemons, setListPokemons] = useState<IPokemonList[]>([]);

  useEffect(() => {
    getPokemons()
      .then((list) => {
        setListPokemons(list);
      })
      .finally(() => setLoading(false));
  }, []);

  return {
    listPokemons,
    loading,
    setLoading,
  };
};

export default useListPokemons;

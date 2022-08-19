import { useEffect, useState } from "react";
import IPokemon from "../interfaces/Pokemon";
import { getPokemons } from "../services";

const useListPokemons = () => {
  const [loading, setLoading] = useState(true);
  let [listPokemons, setListPokemons] = useState<IPokemon[]>([]);

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

import { upperFirstLetter } from "../../utils";
import { Storage } from "@ionic/storage";
import IPokemon from "../../interfaces/Pokemon";

const getPokemons = async () => {
  const store = new Storage();
  await store.create();
  const tempSt = await store.get("pokemons");
  let list: IPokemon[] = [];

  if (tempSt) {
    return tempSt as IPokemon[];
  } else {
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    let pokeData = [];

    //Pegar os dados completos do Pokemon
    //Atualmente, apenas os tipos
    for (let i = 0; i < data.pokemon_entries.length; i++) {
      pokeData[i] = await getPokemonDetails(data.pokemon_entries[i]);
    }

    const temp = pokeData.map((poke: IPokemon) => {
      return {
        ...poke,
        name: upperFirstLetter(poke.name),
        types: poke.types,
      };
    });

    list = temp as IPokemon[];
    await store.set("pokemons", list);

    return list;
  }
};

const getPokemonDetails = async (poke: any) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${poke.entry_number}/`
  );
  const details = await res.json();
  let types: string[] = [];
  types = [...details.types.map((t: any) => t.type.name)];

  if (types.length === 1) {
    types[1] = types[0];
  }
  details.types = types;
  return details;
};

export { getPokemons };

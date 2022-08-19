import { IPokemonList } from "../../hooks/useListPokemons";
import { upperFirstLetter } from "../../utils";
import { Storage } from "@ionic/storage";

const getPokemons = async () => {
  const store = new Storage();
  await store.create();
  const tempSt = await store.get("pokemons");
  let list: IPokemonList[] = [];

  if (tempSt) {
    return tempSt as IPokemonList[];
  } else {
    const res = await fetch("https://pokeapi.co/api/v2/pokedex/2/");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    let pokeData = data.pokemon_entries;

    //Pegar os dados completos do Pokemon
    //Atualmente, apenas os tipos
    for (let i = 0; i < pokeData.length; i++) {
      pokeData[i].types = await getPokemonTypes(pokeData[i]);
    }

    const temp = pokeData.map((poke: any) => {
      return {
        id: poke.entry_number,
        name: upperFirstLetter(poke.pokemon_species.name),
        photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.entry_number.toString()}.png`,
        url: `https://pokeapi.co/api/v2/pokemon/${poke.entry_number.toString()}/`,
        types: poke.types,
      };
    });

    list = temp as IPokemonList[];
    await store.set("pokemons", list);

    return list;
  }
};

const getPokemonTypes = async (poke: any) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${poke.entry_number}/`
  );
  const details = await res.json();
  let types: string[] = [];
  types = [...details.types.map((t: any) => t.type.name)];

  if (types.length === 1) {
    types[1] = types[0];
  }
  return types;
};

export { getPokemons };

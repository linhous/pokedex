import { IonCol } from "@ionic/react";
import { IPokemonList } from "../../hooks/useListPokemons";
import { threeNumbers } from "../../utils";
import "./index.css";

interface IPokemonCard {
  poke: IPokemonList;
  callBack: () => void;
}

const PokemonCard = ({ poke, callBack }: IPokemonCard) => {
  const showTypes = (types: string[]) => {
    let uniqType = [...new Set(types)];
    const res = uniqType.map((type) => (
      <span className={type} key={type}>
        {type}
      </span>
    ));

    return res;
  };

  return (
    <IonCol sizeLg="3" sizeMd="4" size="6" key={poke.id} className="col">
      <div
        className="card-pokemon"
        style={{
          background: `linear-gradient(var(--${poke.types[0]}), var(--${poke.types[1]}))`,
        }}
        onClick={callBack}
      >
        <div
          className="img"
          style={{
            backgroundImage: `url(${poke.photo})`,
            backgroundSize: "contain",
          }}
        ></div>
        <h3>{poke.name}</h3>
        <p>{threeNumbers(poke.id)}</p>
        <div className="types">{showTypes(poke.types)}</div>
      </div>
    </IonCol>
  );
};

export default PokemonCard;

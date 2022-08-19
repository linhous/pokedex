import {
  IonCol,
  IonGrid,
  IonRow,
  IonSearchbar,
  useIonAlert,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { AppShell, Loading, PokemonCard } from "../../components";
import { useListPokemons } from "../../hooks";
import IPokemon from "../../interfaces/Pokemon";
import "./index.css";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const { loading, setLoading, listPokemons } = useListPokemons();
  const [presentAlert] = useIonAlert();
  const [filterList, setFilterList] = useState<IPokemon[]>([]);

  const moreDetails = () => {
    presentAlert({
      header: "Aviso",
      message: "Função disponível em breve...",
      buttons: ["OK"],
    });
  };

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      setFilterList(
        listPokemons.filter(
          (poke) =>
            poke.name.toLowerCase().includes(searchText.toLowerCase()) ||
            poke.id.toString().includes(searchText)
        )
      );
      setLoading(false);
    }
  }, [searchText]);

  return (
    <AppShell title="Pokédex">
      <IonGrid className="grid">
        <IonRow>
          <IonCol size="12">
            <IonSearchbar
              placeholder="Digite o nome ou número da pokédex"
              value={searchText}
              onIonChange={(e) => setSearchText(e.detail.value!)}
              showCancelButton="never"
              showClearButton="focus"
            ></IonSearchbar>
          </IonCol>
        </IonRow>
        <IonRow>
          {loading ? (
            <Loading />
          ) : searchText ? (
            filterList.map((poke) =>
              PokemonCard({ poke: poke, callBack: moreDetails })
            )
          ) : (
            listPokemons.map((poke) =>
              PokemonCard({ poke: poke, callBack: moreDetails })
            )
          )}
        </IonRow>
      </IonGrid>
    </AppShell>
  );
};

export default Home;

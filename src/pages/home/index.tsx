import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { AppShell } from "../../components";
import "./index.css";

const Home = () => {
  return (
    <AppShell title="Pokédex">
      <IonGrid className="grid">
        <IonRow>
          <IonCol className="col">
            <div className="card-pokemon grass">
              <div>img</div>
              <h3>Pokémon</h3>
              <p>001</p>
            </div>
          </IonCol>
          <IonCol className="col">
            <div className="card-pokemon fire">
              <div>img</div>
              <h3>Pokémon</h3>
              <p>002</p>
            </div>
          </IonCol>
        </IonRow>
      </IonGrid>
    </AppShell>
  );
};

export default Home;

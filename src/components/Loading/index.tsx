import { IonProgressBar } from "@ionic/react";
import "./index.css";

const Loading = () => {
  return (
    <div className="loading">
      <IonProgressBar type="indeterminate" />
      <div className="loading-text">
        Aguarde, carregando...
        <br />
        Esse processo pode demorar um pouco!
      </div>
    </div>
  );
};

export default Loading;

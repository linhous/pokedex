import { IonProgressBar } from "@ionic/react";
import "./index.css";

const Loading = () => {
  return (
    <div className="loading">
      <IonProgressBar type="indeterminate" />
      <div className="loading-text">Carregando...</div>
    </div>
  );
};

export default Loading;

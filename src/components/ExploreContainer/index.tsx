import "./index.css";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Disponível em breve...</p>
    </div>
  );
};

export default ExploreContainer;

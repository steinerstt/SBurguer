import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../../../styles/components/Buttons";
import { ContainerCleanSearch } from "./styles";

export const CleanSearch = () => {
  const { textSearch } = useParams();
  const navigate = useNavigate();

  const handleCleanSearch = (): void => {
    navigate("/dashboard");
  };

  return (
    <ContainerCleanSearch>
      <span>{textSearch}</span>

      <Button type="button" variant="primaryMedium" onClick={handleCleanSearch}>
        Limpar Pesquisa
      </Button>
    </ContainerCleanSearch>
  );
};

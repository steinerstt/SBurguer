import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import { ContainerWrapper } from "../../../styles/components/Containers";
import { Header } from "../../Global/Header";
import { ListSnacks } from "../../Global/ListSnacks";
import { iSnack } from "../Dashboard/@types";
import { CleanSearch } from "./CleanSearch";

export const Search = () => {
  const { textSearch } = useParams();
  const [snacksSearch, setSnacksSearch] = useState<iSnack[] | []>([]);

  useEffect(() => {
    const handleGetSnacksSearch = async (): Promise<void> => {
      try {
        const response = await api.get(`/snacks/search/${textSearch}`);
        setSnacksSearch(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    handleGetSnacksSearch();
  }, [textSearch]);

  return (
    <>
      <Header />
      <ContainerWrapper>
        <CleanSearch />
        <ListSnacks snacks={snacksSearch} />
      </ContainerWrapper>
    </>
  );
};

import { FormEvent, useRef } from "react";
import { CgSearch } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../styles/components/Buttons";
import { iInputSearchProps } from "./@types";
import { ContainerInputSearch } from "./styles";

export const InputSearch = ({ handleOpenInput }: iInputSearchProps) => {
  const refInput = useRef({} as HTMLInputElement);
  const navigate = useNavigate();

  const handleSubmitSearch = (e: FormEvent): void => {
    e.preventDefault();
    const textSearch: string = refInput.current.value.trim();

    if (textSearch != "") {
      navigate(`/search/${textSearch}`);
    }
  };

  const handleHiddenInput = (): void => {
    const existTextInput: string = refInput.current.value.trim();

    if (!existTextInput) {
      handleOpenInput();
    }
  };

  return (
    <ContainerInputSearch onSubmit={handleSubmitSearch}>
      <input
        type="text"
        placeholder="Digite sua pesquisa"
        onBlur={handleHiddenInput}
        autoFocus
        ref={refInput}
      />
      <Button type="submit" variant="primaryMedium">
        <CgSearch />
      </Button>
    </ContainerInputSearch>
  );
};

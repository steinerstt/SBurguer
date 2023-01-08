import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { InputSearch } from "./InputSearch";
import { ContainerSearch } from "./styles";

export const Search = () => {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false);

  const handleOpenInput = (): void => {
    setIsInputOpen(!isInputOpen);
  };

  return (
    <ContainerSearch>
      {!isInputOpen && (
        <button type="button" onClick={handleOpenInput}>
          <CgSearch />
        </button>
      )}

      {isInputOpen && <InputSearch handleOpenInput={handleOpenInput} />}
    </ContainerSearch>
  );
};

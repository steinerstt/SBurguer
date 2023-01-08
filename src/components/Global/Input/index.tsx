import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { iAttributesInput, iInputProps } from "./@types";
import { InputCommon } from "./Common";
import { InputPassword } from "./Password";
import { ContainerInput, ContainerInputLabel, TextInputError } from "./styles";

export const Input = ({
  textLabel,
  textRef,
  register,
  msgError,
  ...rest
}: iInputProps) => {
  const [inputWithString, setInputWithString] = useState<boolean>(false);
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [isInputWithClass, setIsInputWithClass] = useState<boolean>(false);

  useEffect(() => {
    const handleInputWithClass = (): void => {
      if (inputWithString || isInputFocus) {
        setIsInputWithClass(true);
      } else {
        setIsInputWithClass(false);
      }
    };
    handleInputWithClass();
  }, [inputWithString, isInputFocus]);

  const handleValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;

    if (value != "") {
      setInputWithString(true);
    } else {
      setInputWithString(false);
    }
  };

  const onFocus = () => {
    setIsInputFocus(!isInputFocus);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleValueInput(e);
    register?.onChange(e);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    onFocus();
    register?.onBlur(e);
  };

  const strClassInputFocus: string = isInputWithClass ? "input__focus" : "";

  const attributesInput: iAttributesInput = {
    id: textRef,
    register: register,
    onChange: onChange,
    onFocus: onFocus,
    onBlur: onBlur,
    className: strClassInputFocus,
    rest: rest,
  };

  const { type } = rest;
  return (
    <>
      <ContainerInput>
        <ContainerInputLabel>
          {type == "password" && <InputPassword attributes={attributesInput} />}
          {type != "password" && <InputCommon attributes={attributesInput} />}

          <label htmlFor={textRef}>{textLabel}</label>
        </ContainerInputLabel>
        <TextInputError>{msgError}</TextInputError>
      </ContainerInput>
    </>
  );
};

import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { iInputPasswordProps } from "./@types";
import { ButtonViewPassword } from "./styles";

export const InputPassword = ({ attributes }: iInputPasswordProps) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const { id, register, onChange, onFocus, onBlur, className, rest } =
    attributes;

  const handleShowPassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <input
        id={id}
        {...register}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${className}`}
        {...rest}
        type={isShowPassword ? "text" : "password"}
      />

      <ButtonViewPassword type="button" onClick={handleShowPassword}>
        {isShowPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
      </ButtonViewPassword>
    </>
  );
};

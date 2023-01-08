import { iInputCommonProps } from "./@types";

export const InputCommon = ({ attributes }: iInputCommonProps) => {
  const { id, register, onChange, onFocus, onBlur, className, rest } =
    attributes;

  return (
    <input
      id={id}
      {...register}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`${className}`}
      {...rest}
    />
  );
};

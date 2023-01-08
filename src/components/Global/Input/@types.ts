import { ChangeEvent, FocusEvent, InputHTMLAttributes, Ref } from "react";
import { ChangeHandler } from "react-hook-form";

interface iRegister {
  onBlur: ChangeHandler;
  onChange: ChangeHandler;
  ref: Ref<any>;
  name: string;
}

interface iInputHTMLAttributes extends InputHTMLAttributes<HTMLInputElement> {}

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
  textLabel: string;
  textRef: string;
  register?: iRegister;
  msgError?: string;
}

export interface iAttributesInput {
  id: string;
  register?: iRegister;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  className: string;
  rest: iInputHTMLAttributes;
}

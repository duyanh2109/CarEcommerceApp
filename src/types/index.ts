import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManuFactureProps {
  manufacture: string;
  setManufacture: (manufacture: string) => void;
}
export interface Carprops {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: Carprops;
}

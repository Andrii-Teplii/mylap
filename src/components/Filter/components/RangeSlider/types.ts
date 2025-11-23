import { ReactNode } from "react";

export type RangeSliderTypes = {
  min: number;
  max: number;
  values: number[];
  onChange: (values: number[]) => void;
};

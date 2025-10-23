import { FilterValue } from "@/mocData/utills";

export type CheckBoxFilterProp = {
  title: string;
  arrOptions: FilterValue;
  arrActiveOptions: FilterValue;
  onSelect: (item: string) => void;
  onConfirm?: () => void;
  quantityAvailable?: number;
};

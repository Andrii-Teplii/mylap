import { MocDataItem } from "./typeDataItem";

const filterFields = [
  "price",
  "brand",
  "display_size",
  "display_resolution",
  "display_type",
  "display_refreshRate",
  "cpu_name",
  "cpu_brand",
  "ram_type",
  "ram_size",
  "mem_ssd_size",
  "mem_hdd_size",
  "graphicsCard_discrete_brand",
  "graphicsCard_discrete_model",
  "graphicsCard_discrete_memory",
  "graphicsCard_integrate_brand",
  "graphicsCard_integrate_model",
  "camera_mp",
  "camera_ir",
] as const;

export type FilterValue = string[] | number[] | boolean[] | null[];
export type FilterKey = (typeof filterFields)[number];

export const getFiltersData = (arrProducts: MocDataItem[]) => {
  const result = {} as Record<FilterKey, FilterValue>;

  for (let i = 0; i < filterFields.length; i++) {
    const field = filterFields[i] as FilterKey;

    for (let j = 0; j < arrProducts.length; j++) {
      const objValue = arrProducts[j][field as keyof MocDataItem];

      if (objValue !== null && objValue !== undefined) {
        if (!!result[field]) {
          !result[field].includes(objValue) && result[field].push(objValue);
        } else {
          result[field] = [objValue];
        }
      }
    }
  }
  return result;
};

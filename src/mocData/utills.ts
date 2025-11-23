import { MocDataItem } from "./typeDataItem";

export type FilterFieldsType = {
  price: number[];
  brand: string[];
  display_size: string[];
  display_resolution: string[];
  display_type: string[];
  display_refreshRate: string[];
  cpu_name: string[];
  cpu_brand: string[];
  ram_type: string[];
  ram_size: string[];
  mem_ssd_size?: string[];
  mem_hdd_size?: string[];
  graphicsCard_discrete_brand?: string[];
  graphicsCard_discrete_model?: string[];
  graphicsCard_discrete_memory?: string[];
  graphicsCard_integrate_brand?: string[];
  graphicsCard_integrate_model?: string[];
  camera_mp?: string[];
  camera_ir?: boolean[];
};

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

export type FilterKey = (typeof filterFields)[number];

export const getFiltersData = (arrProducts: MocDataItem[]) => {
  const result = {} as FilterFieldsType;

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

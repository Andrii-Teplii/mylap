export type Display = {
  display_size: number; // Наприклад, "15.6"
  display_resolution: string; // Наприклад, "1920x1080"
  display_type: string; // Тип матриці, напр. "IPS"
  display_finish: string; // "матовий", "глянцевий" і т.п.
  display_sensor: boolean; // Чи сенсорний екран
  display_refreshRate: number; // Наприклад, "144" Гц
};

export type CPU = {
  cpu_name: string; // Наприклад, "i7-9750H"
  cpu_brand: string; // "Intel", "AMD"
  cpu_gen: number; // Наприклад, "9-го"
  cpu_power: number; // TDP, напр. "45" Вт
};

export type RAM = {
  ram_type: string; // DDR4, DDR5
  ram_size: number; // Обсяг у ГБ
  ram_emptySlot: number; // Кількість вільних слотів
};

type StorageSSD = {
  mem_ssd_size: number | null; // ГБ
  mem_ssd_type: "NVMe" | "M2";
  mem_ssd_emptySlots: number; // Слоти для розширення
};

type StorageHDD = {
  mem_hdd_size: number | null; // ГБ
  mem_hdd_emptySlots: number; // Слоти для розширення
};

export type Memory = StorageSSD | StorageHDD;

type DiscreteGPU = {
  graphicsCard_discrete_brand: string | null;
  graphicsCard_discrete_model: string;
  graphicsCard_discrete_memory: number; // ГБ
};

type IntegratedGPU = {
  graphicsCard_integrate_brand: string | null;
  graphicsCard_integrate_model: string;
};

export type GraphicsCard = DiscreteGPU | IntegratedGPU;

export type Camera = {
  camera_mp: number | null; // Мегапікселі
  camera_ir: boolean; // Інфрачервона камера (для розпізнавання обличчя)
};

export type Ports = {
  ports_usbTypeA: number | null;
  ports_usbTypeC: number | null;
  ports_HDMI: number | null;
  ports_DisplayPort: number | null;
  ports_dvd: boolean;
  ports_audioJack: number | null;
  ports_rj45: boolean;
};

export type Keyboard = {
  keyboard_numBlock: boolean;
  keyboard_light: string; // Наприклад, "rgb"
};

export type Network = {
  network_bluetooth: string; // Наприклад, "5.0"
  network_wifi: string; // Назва модуля
  network_sim: string | null;
};

export type Battery = {
  battery_twb: number; // Час безперевного перегляду відео(напр. 3)
};

export type Dimensions = {
  dimensions_w: number; // ширина в мм
  dimensions_d: number; // глибина в мм
  dimensions_h: number; // висота в мм
  dimensions_kg: number; // вага в кг
};

export type MocDataItem = {
  id: string;
  title: string;
  brand: string;
  price: number;
  sellPrice: null | number;
  description: string;
  images: string[];
  originalBox: boolean;
} & Display &
  CPU &
  RAM &
  Memory &
  GraphicsCard &
  Camera &
  Ports &
  Keyboard &
  Network &
  Battery &
  Dimensions;

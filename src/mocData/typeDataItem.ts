export type Display = {
  display_size: string; // Наприклад, "15.6"
  display_resolution: string; // Наприклад, "1920x1080"
  display_type: string; // Тип матриці, напр. "IPS"
  display_finish: string; // "матовий", "глянцевий" і т.п.
  display_sensor: boolean; // Чи сенсорний екран
  display_refreshRate: string; // Наприклад, "144" Гц
};

export type CPU = {
  cpu_name: string; // Наприклад, "i7-9750H"
  cpu_brand: string; // "Intel", "AMD"
  cpu_gen: string; // Наприклад, "9-го"
  cpu_power: string; // TDP, напр. "45" Вт
};

export type RAM = {
  ram_type: string; // DDR4, DDR5
  ram_size: string; // Обсяг у ГБ
  ram_emptySlot: string; // Кількість вільних слотів
};

type StorageSSD = {
  mem_ssd_size: string | null; // ГБ
  mem_ssd_type: "NVMe" | "M2";
  mem_ssd_emptySlots: string; // Слоти для розширення
};

type StorageHDD = {
  mem_hdd_size: string | null; // ГБ
  mem_hdd_emptySlots: string; // Слоти для розширення
};

export type Memory = StorageSSD | StorageHDD;

type DiscreteGPU = {
  graphicsCard_discrete_brand: string | null;
  graphicsCard_discrete_model: string;
  graphicsCard_discrete_memory: string; // ГБ
};

type IntegratedGPU = {
  graphicsCard_integrate_brand: string | null;
  graphicsCard_integrate_model: string;
};

export type GraphicsCard = DiscreteGPU | IntegratedGPU;

export type Camera = {
  camera_mp: string | null; // Мегапікселі
  camera_ir: boolean; // Інфрачервона камера (для розпізнавання обличчя)
};

export type Ports = {
  ports_usbTypeA: string | null;
  ports_usbTypeC: string | null;
  ports_HDMI: string | null;
  ports_DisplayPort: string | null;
  ports_dvd: boolean | null;
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
  battery_twb: string; // Час безперевного перегляду відео(напр. 3)
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

export interface Display {
    size: string; // Наприклад, "15.6"
    resolution: string; // Наприклад, "1920x1080"
    type: string; // Тип матриці, напр. "IPS"
    finish: string; // "матовий", "глянцевий" і т.п.
    sensor: boolean; // Чи сенсорний екран
    refreshRate: string; // Наприклад, "144" Гц
}

export interface CPU {
    name: string; // Наприклад, "i7-9750H"
    brand: string; // "Intel", "AMD"
    gen: string; // Наприклад, "9-го"
    power: string; // TDP, напр. "45" Вт
}

export interface RAM {
    type: string; // DDR4, DDR5
    size: string; // Обсяг у ГБ
    emptySlot: string; // Кількість вільних слотів
}

interface StorageSSD {
    size: string; // ГБ
    type:'NVMe'|'M2';
    emptySlots: string; // Слоти для розширення
}

interface StorageHDD {
    size: string; // ГБ
    emptySlots: string; // Слоти для розширення
}

export interface Memory {
    ssd: StorageSSD|null;
    hdd: StorageHDD|null;
}

interface DiscreteGPU {
    brand: string;
    model: string;
    memory: string; // ГБ
}

 interface IntegratedGPU {
    brand: string;
    model: string;
}

export interface GraphicsCard {
    discrete: DiscreteGPU|null;
    integrate: IntegratedGPU;
}

export interface Camera {
    mp: string; // Мегапікселі
    ir: boolean; // Інфрачервона камера (для розпізнавання обличчя)
}

export interface Ports {
    usbTypeA: string|null;
    usbTypeC: string|null;
    HDMI: string|null;
    DisplayPort: string|null;
    dvd: boolean|null;
    audioJack: number|null;
    rj45:boolean
}

export interface Keyboard {
    numBlock: boolean;
    light: string; // Наприклад, "rgb"
}

export interface Network {
    bluetooth: string; // Наприклад, "5.0"
    wifi: string; // Назва модуля
    sim: string | null;
}

export interface Battery {
    twb: string; // Час безперевного перегляду відео(напр. 3)
}

export interface Dimensions {
    w: number; // ширина в мм
    d: number; // глибина в мм
    h: number; // висота в мм
    kg: number; // вага в кг
}

export interface MocDataItem {
    id:string;
    title: string;
    brand:string
    price:number,
    sellPrice:null|number,
    description:string,
    images: string[];
    display: Display;
    cpu: CPU;
    ram: RAM;
    mem: Memory;
    graphicsCard: GraphicsCard;
    camera: Camera|null;
    ports: Ports;
    keyboard: Keyboard;
    network: Network;
    battery: Battery;
    Dimensions: Dimensions;
    originalBox: boolean;
}
import { MocDataItem } from "./typeDataItem";

const filterFields = [
    'price',
    'brand',
    'display.size',
    'display.resolution',
    'display.type',
    'display.refreshRate',
    'cpu.name',
    'cpu.brand',
    'ram.type',
    'ram.size',
    'mem.ssd.size',
    'mem.hdd.size',
    'graphicsCard.discrete.brand',
    'graphicsCard.discrete.model',
    'graphicsCard.discrete.memory',
    'graphicsCard.integrate.brand',
    'graphicsCard.integrate.model',
    'camera'
]

type FilterValue = (string|null|number|boolean)[]

function getValueByPath(obj:Record<string,FilterValue>, path:string) {
  // Handle cases where the object is null/undefined or the path is invalid
  if (!obj || typeof obj !== 'object' || typeof path !== 'string') {
    return undefined;
  }

  // Split the path string into individual keys
  const keys = path.split('.');

  // Traverse the object
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    // If the current object is null/undefined or doesn't have the key, return undefined
    if (current === null || typeof current !== 'object' || !current.hasOwnProperty(key)) {
      return null;
    }
    current = current[key];
  }

  // Return the final value found at the end of the path
  return current;
}

export const getDataFilter = (arrayProducts:MocDataItem[]) =>{
    

    const filters:Record<string,(string|null|number|boolean)[]> = {}

   for(let i=0; i<arrayProducts.length; i++){
    const product = arrayProducts[i];
    const keys = Object.keys(product)

    for(let j=0; j<filterFields.length; j++){
       const path = filterFields[j]
       if(!filters[path]){
           filters[path] = [getValueByPath(product,path)]
       }else{
            filters[path].push(getValueByPath(product,path))
       }
    }
   }
   console.log(filters)
} 
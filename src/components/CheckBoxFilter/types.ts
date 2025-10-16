export type CheckBoxFilterProp = {
    title:string;
    arrOptions:[string],
    arrActiveOptions:[string],
    onSelect:(item:string)=>void,
    onConfirm?:()=>void,
    quantityAvailable?:number,
}
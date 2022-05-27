type Model ={
  type:string,
  name:string,
  serial:number | string,
  color:string,
  handside:string,
  features:string[],
  description:string[]
}
export interface IProduct{
  category:string,
  model:Model[]
}
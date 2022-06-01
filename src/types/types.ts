type Model ={
  id:string | number,
  type:string,
  name:string,
  serial:number | string,
  color:string,
  price:number,
  handside:string,
  img:string,
  photo:string[],
  features:string[],
  description:string[]
}
export interface IProduct{
  category:string,
  model:Model
}

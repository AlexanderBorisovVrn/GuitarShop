export interface IFormValues {
  [k: string]: string | number;
}

export interface IField {
  id:string
  name:string,
  type:'radio' | 'text' | 'password',
  initialValue:string|number
  
}
export interface IUser {
  username: string;
  password: string;
}



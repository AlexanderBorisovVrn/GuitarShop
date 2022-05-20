import { ReactNode } from "react";

export default function List({children}:{children:ReactNode}){
  const direction = 'row'? 'row':'column'
  return (
    <ul style={{display:"flex",flexDirection:direction,flexWrap:'wrap',listStyle:'none'}}>
      {children}
    </ul>
  )
}
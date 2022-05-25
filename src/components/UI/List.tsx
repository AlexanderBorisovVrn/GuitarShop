import { ReactNode } from "react";
import CSS from 'csstype';

type ListDirection = 'row' | 'column' | undefined | 'row-reverse' | 'column-reverse'
type Props = {children:ReactNode,direction?:ListDirection}

export default function List({children,direction='row'}: Props) {
const style:CSS.Properties={display:'flex',flexDirection:direction,flexWrap:'wrap',listStyle:'none'}

  return (
    <ul style={style}>
      {children}
    </ul>
  )
}
import {ReactNode} from 'react'
import CSS from 'csstype';
type Props= {
  children:ReactNode,
  alignItems?:'center' | 'flex-start',
  sx?:CSS.Properties
}


export default function ListItem({children,alignItems='center',sx}:Props) {
  const style:CSS.Properties={display:'flex',alignItems:alignItems,flexWrap:'wrap'}
  const currentStyles = {...style,...sx}
  
  return (
    <li  style={currentStyles}>{children}</li>
  )
}
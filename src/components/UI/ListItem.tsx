import {ReactNode} from 'react'
import CSS from 'csstype';
type Props= {
  children:ReactNode,
  alignItems?:'center' | 'flex-start',
  styles?:CSS.Properties
}


export default function ListItem({children,alignItems='center',styles}:Props) {
  const style:CSS.Properties={display:'flex',alignItems:alignItems,flexWrap:'wrap'}
  const currentStyles = {style,...styles}
  
  return (
    <li  style={currentStyles}>{children}</li>
  )
}
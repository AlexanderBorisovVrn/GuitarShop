import React from 'react'

type Props = {}

export default function Loader({}: Props) {
  return (
    <div style={{display:'flex',minHeight:'100wh',alignItems:'center',justifyContent:"center"}}>Loading...</div>
  )
}
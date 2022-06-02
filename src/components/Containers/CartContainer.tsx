import React from "react";

type Props = {
  left:React.ReactNode,
  right:React.ReactNode
};

export default function CartContainer({left,right}: Props) {
  const partStyles = {borderRadius:'5px'}
  return (
    <div
      className="Container"
      style={{ display: "grid", gridTemplateColumns: " 65% 1fr", gap: "1rem" }}
    >
      <section style={partStyles}></section>

      <section style={partStyles}></section>
    </div>
  );
}

import React from "react";
import CSS from "csstype";

type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
  styles?: CSS.Properties;
};

export default function GridContainer({ left, right, styles }: Props) {
  const partStyles = { borderRadius: "5px" };
  const containerStyles = {
    display: "grid",
    gridTemplateColumns: " 65% 1fr",
    gap: "1rem",
  };

  return (
    <div className="Container" style={{ ...containerStyles, ...styles }}>
      <section style={partStyles}>{left}</section>

      <section style={partStyles}>{right}</section>
    </div>
  );
}

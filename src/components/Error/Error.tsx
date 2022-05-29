import React from "react";

type Props = {};

export default function Error({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48px",
      }}
    >
      Sorry,ERROR!!!11
    </div>
  );
}

import React from "react";
type Props = {
  user?: string;
};
export default function AuthPanel({ user }: Props) {
  const displayAuth = user?<>{user}</>:<i className="fa-solid fa-user"></i>
  return <div style={{display:'flex'}}>{displayAuth}</div>;
}

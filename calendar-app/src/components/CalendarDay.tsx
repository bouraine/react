import React from "react";

interface Props {
  type?: "we" | "abs" | "";
}

const Day: React.FC<Props> = ({ type, children }) => {
  const ColorClass = type === "we" ? "bg-light" : type === "abs" ? "bg-secondary" : "";
  return <td className={ColorClass}>{children}</td>;
};

export default Day;

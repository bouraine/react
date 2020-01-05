import React from "react";
import { StarTwoTone } from "@material-ui/icons";

interface Props {
  type: "abs" | "we" | "";
}

const Day: React.FC<Props> = ({ type }) => {
  const colorClass = type === "we" ? "bg-light" : "";
  return <td className={colorClass}>{type === "abs" && <StarTwoTone color="primary" fontSize={"small"} />}</td>;
};

export default Day;

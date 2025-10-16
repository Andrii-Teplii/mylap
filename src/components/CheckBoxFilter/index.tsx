import React, { FC, useState } from "react";
import { CheckBoxFilterProp } from "./types";

export function CheckBoxFilter({
  title,
  arrOptions,
  arrActiveOptions,
  onSelect,
  onConfirm,
  quantityAvailable,
}: CheckBoxFilterProp) {
  const [activeFilter, setActiveFilter] = useState<boolean>(false);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {arrOptions.map((item, index) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}

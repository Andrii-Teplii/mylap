import { Arrow } from "@/assets/icons/arrow";
import React, { FC, useState } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { RangeSliderTypes } from "./types";
import { Range } from "react-range";

export const RangeSlider: FC<RangeSliderTypes> = ({
  min,
  max,
  values,
  onChange,
}) => {
  const [value, setValue] = useState<[number, number]>([min, max]);

  return (
    <div>
      <Range
        label="Select your value"
        step={1}
        min={min}
        max={max}
        values={value}
        onChange={(values) => {
          console.log(values);
          onChange(values);
          setValue([values[0], values[1]]);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              width: "100%",
              backgroundColor: "#334566",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: "12px",
              width: "12px",
              backgroundColor: "#4a90e2",
              borderRadius: "6px",
            }}
          />
        )}
      />
    </div>
  );
};

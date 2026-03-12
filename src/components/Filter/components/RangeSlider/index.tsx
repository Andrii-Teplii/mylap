import { Arrow } from "@/assets/icons/arrow";
import React, { FC, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { RangeSliderTypes } from "./types";
import { Range, getTrackBackground } from "react-range";

export const RangeSlider: FC<RangeSliderTypes> = ({
  min,
  max,
  values,
  onChange,
}) => {
  const [value, setValue] = useState<[number | "", number | ""]>([0, max]);

  useEffect(() => {
    console.log([
      +value[0] < 0 ? 0 : +value[0] > +value[1] ? +value[1] : +value[0],
      +value[1] > max ? max : +value[1] < +value[0] ? +value[0] : +value[1],
    ]);
  }, [value]);

  const checkMaxPrice = () => {
    if (value[1] < value[0]) {
      setValue([value[0], value[0]]);
      return [value[0], value[0]];
    }
    if (+value[1] > max) {
      setValue([value[0], max]);
      return [value[0], max];
    }
  };

  const checkMinPrice = () => {
    if (+value[0] < 0) {
      setValue([0, value[1]]);
      return [0, value[1]];
    }
    if (+value[0] > +value[1]) {
      setValue([value[1], value[1]]);
      return [value[1], value[1]];
    }
  };

  return (
    <div className={styles.priceBlock}>
      <h3 className={styles.priceBlockTitle}>Ціна</h3>
      <Range
        step={1}
        min={0}
        max={max}
        values={[
          +value[0] < 0 ? 0 : +value[0] > +value[1] ? +value[1] : +value[0],
          +value[1] > max ? max : +value[1] < 0 ? 0 : +value[1],
        ]}
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

              background: getTrackBackground({
                values: [
                  +value[0] < 0
                    ? 0
                    : +value[0] > +value[1]
                    ? +value[1]
                    : +value[0],
                  +value[1] > max ? max : +value[1] < 0 ? 0 : +value[1],
                ],
                colors: ["#334566", "#1252D4", "#334566"],
                min: 0,
                max: max,
              }),
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
              display: "flex",
              justifyContent: "center",
              ...props.style,
              height: "12px",
              width: "12px",
              backgroundColor: "#4a90e2",
              borderRadius: "6px",
            }}
          />
        )}
      />
      <div className={styles.priceBlockInputContainer}>
        <input
          className={styles.input}
          type="number"
          max={9999999}
          min={1}
          value={value[0]}
          onKeyDown={(v) => {
            if (v.key === "Enter") {
              checkMinPrice();
            }
          }}
          onBlur={() => {
            checkMinPrice();
          }}
          onChange={(v) => {
            setValue([v.target.value !== "" ? +v.target.value : "", value[1]]);
          }}
          placeholder={value[0] + ""}
        />
        <input
          className={styles.input}
          type="number"
          value={value[1]}
          max={9999999}
          onKeyDown={(v) => {
            if (v.key === "Enter") {
              checkMaxPrice();
            }
          }}
          onBlur={() => {
            checkMaxPrice();
          }}
          onChange={(v) => {
            setValue([value[0], v.target.value !== "" ? +v.target.value : ""]);
          }}
          placeholder={value[1] + ""}
        />
      </div>
    </div>
  );
};

"use client";

import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { FilterKey, FilterValue, getFiltersData } from "@/mocData/utills";
import { arrayProducts } from "@/mocData/data";
import { CheckBoxFilter } from "../CheckBoxFilter";
import { Formik } from "formik";

export default function Filter() {
  const filtersData = getFiltersData(arrayProducts);
  const [stateDisplayBlock, setStateDisplayBlock] = useState<boolean>(false);

  const emptyFilter = useMemo(() => {
    const acc = {} as Record<FilterKey, FilterValue>;
    for (const key in filtersData) {
      acc[key as FilterKey] = [];
    }
    console.log(acc);
    return acc;
  }, [filtersData]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Фільтри</h1>
      <Formik initialValues={emptyFilter} onSubmit={() => {}}>
        {({ values, handleSubmit, errors, setFieldValue }) => (
          <div>
            <CheckBoxFilter
              title="Бренд"
              arrActiveOptions={values.brand}
              arrOptions={filtersData.brand}
              onSelect={() => {}}
            />
            <div className={styles.groupFilter}>
              <h2 className={styles.groupFilterTitle}>Дисплей</h2>
              <CheckBoxFilter
                title="Розмір"
                arrActiveOptions={values.display_size}
                arrOptions={filtersData.display_size}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Розширення"
                arrActiveOptions={values.display_resolution}
                arrOptions={filtersData.display_resolution}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Тип"
                arrActiveOptions={values.display_type}
                arrOptions={filtersData.display_type}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Частота оновлення"
                arrActiveOptions={values.display_refreshRate}
                arrOptions={filtersData.display_refreshRate}
                onSelect={() => {}}
              />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

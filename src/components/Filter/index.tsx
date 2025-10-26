"use client";

import React, { useMemo, useState } from "react";
import styles from "./styles.module.css";
import { FilterKey, FilterValue, getFiltersData } from "@/mocData/utills";
import { arrayProducts } from "@/mocData/data";
import { CheckBoxFilter } from "../CheckBoxFilter";
import { Formik } from "formik";
import { ContainerBlocks } from "./components/ContainerBlocks";

export default function Filter() {
  const filtersData = getFiltersData(arrayProducts);

  type ListBlockType =
    | "display"
    | "cpu"
    | "ram"
    | "mem"
    | "discreteGraphicsCard"
    | "integratedGraphicsCard"
    | "camera";

  const [stateBlocks, setStateBlocks] = useState<
    Record<ListBlockType, boolean>
  >({
    display: false,
    cpu: false,
    ram: false,
    mem: false,
    discreteGraphicsCard: false,
    integratedGraphicsCard: false,
    camera: false,
  });

  const emptyFilter = useMemo(() => {
    const acc = {} as Record<FilterKey, FilterValue>;
    for (const key in filtersData) {
      acc[key as FilterKey] = [];
    }
    return acc;
  }, [filtersData]);

  const changeStateBlock = (nameBlock: ListBlockType) => {
    const a = { ...stateBlocks };
    a[nameBlock] = !stateBlocks[nameBlock];
    setStateBlocks(a);
  };

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
            <ContainerBlocks
              title="Дисплей"
              isActive={stateBlocks.display}
              handleChangeState={() => changeStateBlock("display")}
            >
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
            </ContainerBlocks>
            <ContainerBlocks
              title="Процесор"
              isActive={stateBlocks.cpu}
              handleChangeState={() => changeStateBlock("cpu")}
            >
              <CheckBoxFilter
                title="Бренд"
                arrActiveOptions={values.cpu_brand}
                arrOptions={filtersData.cpu_brand}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Модель"
                arrActiveOptions={values.cpu_name}
                arrOptions={filtersData.cpu_name}
                onSelect={() => {}}
              />
            </ContainerBlocks>
            <ContainerBlocks
              title="Дискретна відеокарта"
              isActive={stateBlocks.discreteGraphicsCard}
              handleChangeState={() => changeStateBlock("discreteGraphicsCard")}
            >
              <CheckBoxFilter
                title="Бренд"
                arrActiveOptions={values.graphicsCard_discrete_brand}
                arrOptions={filtersData.graphicsCard_discrete_brand}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Модель"
                arrActiveOptions={values.graphicsCard_discrete_model}
                arrOptions={filtersData.graphicsCard_discrete_model}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Память"
                arrActiveOptions={values.graphicsCard_discrete_memory}
                arrOptions={filtersData.graphicsCard_discrete_memory}
                onSelect={() => {}}
              />
            </ContainerBlocks>
            <ContainerBlocks
              title="Інтегрована відеокарта"
              isActive={stateBlocks.integratedGraphicsCard}
              handleChangeState={() =>
                changeStateBlock("integratedGraphicsCard")
              }
            >
              <CheckBoxFilter
                title="Бренд"
                arrActiveOptions={values.graphicsCard_discrete_brand}
                arrOptions={filtersData.graphicsCard_discrete_brand}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Модель"
                arrActiveOptions={values.graphicsCard_discrete_model}
                arrOptions={filtersData.graphicsCard_discrete_model}
                onSelect={() => {}}
              />
            </ContainerBlocks>
            <ContainerBlocks
              title="Оперативна память"
              isActive={stateBlocks.ram}
              handleChangeState={() => changeStateBlock("ram")}
            >
              <CheckBoxFilter
                title="Тип"
                arrActiveOptions={values.ram_type}
                arrOptions={filtersData.ram_type}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Об'єм"
                arrActiveOptions={values.ram_size}
                arrOptions={filtersData.ram_size}
                onSelect={() => {}}
              />
            </ContainerBlocks>
            <ContainerBlocks
              title="Постійна память"
              isActive={stateBlocks.mem}
              handleChangeState={() => changeStateBlock("mem")}
            >
              <CheckBoxFilter
                title="Об'єм SSD"
                arrActiveOptions={values.mem_ssd_size}
                arrOptions={filtersData.mem_ssd_size}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Об'єм HDD"
                arrActiveOptions={values.mem_hdd_size}
                arrOptions={filtersData.mem_hdd_size}
                onSelect={() => {}}
              />
            </ContainerBlocks>
            <ContainerBlocks
              title="Камера"
              isActive={stateBlocks.camera}
              handleChangeState={() => changeStateBlock("camera")}
            >
              <CheckBoxFilter
                title="Розширення"
                arrActiveOptions={values.camera_mp}
                arrOptions={filtersData.camera_mp}
                onSelect={() => {}}
              />
              <CheckBoxFilter
                title="Розпізнавання по обличчю"
                arrActiveOptions={values.camera_ir}
                arrOptions={filtersData.camera_ir}
                onSelect={() => {}}
              />
            </ContainerBlocks>
          </div>
        )}
      </Formik>
    </div>
  );
}

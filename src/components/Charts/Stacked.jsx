import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();

  const getLegendSettings = (currentMode) => {
    return currentMode === "Dark"
      ? {
          visible: true,
          background: "#33373E",
          textStyle: { fontFamily: "Archivo", color: "rgb(156,163,175)" },
        }
      : { visible: true, textStyle: { fontFamily: "Archivo" } };
  };

  const legendSettings = getLegendSettings(currentMode);

  return (
    // ? How to change the font family and add margin between items ...
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, textStyle: { fontFamily: "Archivo" } }}
      legendSettings={legendSettings}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;

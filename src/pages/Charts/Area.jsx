import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();

  const getLegendSettings = (currentMode) => {
    return currentMode === "Dark"
      ? {
          visible: true,
          textStyle: { fontFamily: "Archivo", color: "rgb(156,163,175)" },
        }
      : { visible: true, textStyle: { fontFamily: "Archivo" } };
  };

  const legendSettings = getLegendSettings(currentMode);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in Percentage %" />
      <div className="w-full">
        <ChartComponent
          id="area-chart"
          height="420px"
          primaryXAxis={AreaPrimaryXAxis}
          primaryYAxis={AreaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={legendSettings}
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Area;

import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import { Header } from "../../components";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { useStateContext } from "../../contexts/ContextProvider";

const Bar = () => {
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
      <Header category="Bar" title="Olympic Medal Counts - RIO 2016" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartBar={{ border: { width: 0 } }}
          tooltip={{ enable: true, textStyle: { fontFamily: "Archivo" } }}
          legendSettings={legendSettings}
          background={currentMode === "Dark" ? "#33373E" : "#FFF"}
        >
          <Inject
            services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default Bar;

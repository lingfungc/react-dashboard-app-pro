import React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PyramidSeries,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
import { Header } from "../../components";

const Pyramid = () => {
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
    <div className="m-4 md:m-10 mt-24  p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={legendSettings}
          tooltip={{ enable: true, textStyle: { fontFamily: "Archivo" } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject
            services={[
              AccumulationDataLabel,
              AccumulationTooltip,
              PyramidSeries,
              AccumulationLegend,
              AccumulationSelection,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: "Drop", fill: "red" }}
              dataLabel={{
                visible: true,
                position: "Inside",
                name: "text",
                font: { fontFamily: "Archivo" },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Pyramid;

import React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesDirective,
  AccumulationSeriesCollectionDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  PieSeries,
  Inject,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";

const PieChart = ({ id, data, legendVisiblity, height }) => {
  const { currentMode } = useStateContext();

  const getLegendSettings = (currentMode) => {
    return currentMode === "Dark"
      ? {
          visible: legendVisiblity,
          background: "#33373E",
          textStyle: { fontFamily: "Archivo", color: "rgb(156,163,175)" },
        }
      : { visible: legendVisiblity, textStyle: { fontFamily: "Archivo" } };
  };

  const legendSettings = getLegendSettings(currentMode);

  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={legendSettings}
      height={height}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      tooltip={{ enable: true, textStyle: { fontFamily: "Archivo" } }}
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="10%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontFamily: "Archivo",
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;

import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Category,
  Tooltip,
  Legend,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";
import { Header } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  const getLegendSettings = (currentMode) => {
    return currentMode === "Dark"
      ? {
          mode: "Range",
          background: "#33373E",
          textStyle: { fontFamily: "Archivo", color: "rgb(156,163,175)" },
        }
      : { mode: "Range", textStyle: { fontFamily: "Archivo" } };
  };

  const legendSettings = getLegendSettings(currentMode);

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header
        category="Color Mappping"
        title="USA CLIMATE - WEATHER BY MONTH"
      />

      <div className="w-full">
        <ChartComponent
          id="charts"
          primaryXAxis={ColorMappingPrimaryXAxis}
          primaryYAxis={ColorMappingPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          legendSettings={legendSettings}
          tooltip={{ enable: true, textStyle: { fontFamily: "Archivo" } }}
          background={currentMode === "Dark" ? "#33373E" : "#fff"}
        >
          <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />

          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={colorMappingData[0]}
              name="USA"
              xName="x"
              yName="y"
              type="Column"
              cornerRadius={{
                topLeft: 10,
                topRight: 10,
              }}
            />
          </SeriesCollectionDirective>

          <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default ColorMapping;

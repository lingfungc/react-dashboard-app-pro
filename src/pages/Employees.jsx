import { useEffect, React } from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  // Edit,
  Inject,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
  const { currentMode } = useStateContext();

  useEffect(() => {
    const gridTable = document.getElementById("grid-comp_content_table");
    const svgPathElements = document.querySelectorAll(".e-row svg path");

    if (currentMode === "Light") {
      gridTable.style.backgroundColor = "white";
      gridTable.style.color = "black";

      svgPathElements.forEach((e) => {
        e.setAttribute("stroke", "#000");
      });
    } else {
      gridTable.style.backgroundColor = "rgb(51 55 62)";
      gridTable.style.color = "white";

      svgPathElements.forEach((e) => {
        e.setAttribute("stroke", "#fff");
      });
    }
  });

  return (
    <div
      id="employees-grid"
      className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >
      <Header category="Page" title="Employees" />
      <GridComponent
        id="grid-comp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;

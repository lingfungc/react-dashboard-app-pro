import { useEffect, React } from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const Orders = () => {
  const { currentMode } = useStateContext();

  useEffect(() => {
    const gridTable = document.getElementById("grid-comp_content_table");

    if (currentMode === "Light") {
      gridTable.style.backgroundColor = "white";
      gridTable.style.color = "black";
    } else {
      gridTable.style.backgroundColor = "rgb(51 55 62)";
      gridTable.style.color = "white";
    }
  });

  return (
    <div
      id="orders-grid"
      className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >
      <Header category="Page" title="Orders" />
      <GridComponent
        id="grid-comp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;

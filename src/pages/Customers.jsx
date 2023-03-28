import React from "react";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Search,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";

const Customers = () => {
  let grid;
  const created = () => {
    document
      .getElementById(grid.element.id + "_searchbar")
      .addEventListener("keyup", () => {
        grid.search(event.target.value);
      });
  };

  return (
    <div
      id="customers-grid"
      className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl"
    >
      <Header category="Page" title="Customers" />
      <GridComponent
        id="grid-comp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete", "Search"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        ref={(g) => (grid = g)}
        created={created}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;

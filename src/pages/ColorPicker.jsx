import { useEffect, React } from "react";

import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

// * Change the color of the pen accordingly
const change = (args) => {
  const previewPenLight = document.getElementById("preview-light");
  const previewPenDark = document.getElementById("preview-dark");

  if (previewPenLight) {
    previewPenLight.style.backgroundColor = args.currentValue.hex;
  } else {
    previewPenDark.style.backgroundColor = args.currentValue.hex;
  }
};

const ColorPicker = () => {
  const { currentMode } = useStateContext();

  return (
    <div
      id="calendar"
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl"
    >
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div
          id={currentMode === "Light" ? "preview-light" : "preview-dark"}
          className="preview-pen"
        />

        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">
              Inline Pallete
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>

          <div>
            <p className="text-2xl font-semibold mt-2 mb-4 dark:text-gray-200">
              Inline Picker
            </p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;

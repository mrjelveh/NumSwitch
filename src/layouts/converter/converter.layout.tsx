import React from "react";
import {
  ConverterKey,
  createConverter,
} from "../../utils/converter-creator";
import SelectorGroup from "../selector-group/selector-group.layout";
import { Button } from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import { Option } from "../../components/select/select.shared";
import "./converter.styles.scss";

const Converter: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [outputValue, setOutputValue] = React.useState("");
  const [fromSelectValue, setFromSelectValue] = React.useState("");
  const [toSelectValue, setToSelectValue] = React.useState("");
  const [converterKey, setConverterKey] = React.useState<ConverterKey | null>(
    null
  );

  const fromOptions: Option[] = [
    { value: "decimal", label: "Decimal", disabled: false },
    { value: "binary", label: "Binary", disabled: false },
  ];

  const toOptions: Option[] = [
    { value: "roman", label: "Roman", disabled: false },
  ];

  const handleFromSelectChange = (value: string) => {
    setFromSelectValue(value);
    if (value && toSelectValue) {
      const key = (value + "-to-" + toSelectValue) as ConverterKey;
      setConverterKey(key);
    } else {
      setConverterKey(null);
    }
  };

  const handleToSelectChange = (value: string) => {
    setToSelectValue(value);
    if (value && fromSelectValue) {
      const key = (fromSelectValue + "-to-" + value) as ConverterKey;
      setConverterKey(key);
    } else {
      setConverterKey(null);
    }
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleButtonClick = () => {
    if (converterKey) {
      const converter = createConverter(converterKey);
      const result = converter.convert(parseInt(inputValue));
      setOutputValue(result);
    }
  };

  return (
    <div className="ns-converter">
      <div className="ns-converter__flex-container">
        <div>
          <SelectorGroup
            fromSelectArray={fromOptions}
            toSelectArray={toOptions}
            fromSelectValue={fromSelectValue}
            toSelectValue={toSelectValue}
            handleFromSelectChange={handleFromSelectChange}
            handleToSelectChange={handleToSelectChange}
            className="ns-converter__selector-group"
          />
          <div className="ns-converter__flex-wrapper">
            <Input type="number" onChange={handleInputChange} fullWidth value={inputValue} />
            <Button
              label="Convert"
              size="default"
              secondary
              onClick={handleButtonClick}
              disabled={converterKey === null || inputValue.length === 0}
            />
          </div>
          <div
            className={`ns-converter__output ${toSelectValue === "roman" && "gideon-roman"}`}
          >
            {outputValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;

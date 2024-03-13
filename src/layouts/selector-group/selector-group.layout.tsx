import React from 'react';
import Select from '../../components/select/select.component';
import { Option } from '../../components/select/select.shared';

type SelectorGroup = {
    fromSelectArray: Option[];
    toSelectArray: Option[];
    fromSelectValue: string;
    toSelectValue: string;
    handleFromSelectChange: (value: string) => void;
    handleToSelectChange: (value: string) => void;
    className?: string;
};

const SelectorGroup: React.FC<SelectorGroup> = (
    { fromSelectArray, toSelectArray, fromSelectValue, toSelectValue, handleFromSelectChange, handleToSelectChange, className }
) => {
    return (
        <div className={['ns-selector-group', className ? className : ''].join(' ').trim()}>
            <Select options={fromSelectArray} value={fromSelectValue} onChange={handleFromSelectChange} />
            <span> TO </span>
            <Select options={toSelectArray} value={toSelectValue} onChange={handleToSelectChange} />
        </div>
    );
}

export default SelectorGroup;
import React from "react";

const Select = ({ id, label, options, onChange }) => (
    <div className="select-component">
        <label>{label}</label>
        <select id={id} className="form-control" onChange={(e) => onChange(e)}>
            {options.map((option) =>
                <option key={`option-${option.value}`} value={option.value}>{option.name}</option>
            )}
        </select>
    </div>
);

export default Select;
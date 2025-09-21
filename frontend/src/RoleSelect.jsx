import React from "react";
import Select from "react-select";

const roleOptions = [
  { value: "Citizen", label: "Citizen", color: "#28a745" },
  { value: "Admin", label: "Admin", color: "#dc3545" },
  { value: "Officer", label: "Officer", color: "#007bff" },
];

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",
  ":before": {
    content: '" "',
    display: "block",
    marginRight: 8,
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: color,
  },
});

const colourStyles = {
  control: (styles) => ({
    ...styles,
    fontSize: "14px",
    backgroundColor: "white",
    borderRadius: "6px",
    borderColor: "#ced4da",
    minHeight: "38px",
  }),
  option: (styles, { data, isFocused, isSelected }) => ({
    ...styles,
    ...dot(data.color),
    backgroundColor: isSelected
      ? "#f0f0f0"
      : isFocused
      ? "#f8f9fa"
      : undefined,
    color: "black",
    cursor: "pointer",
    fontSize: "14px",
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    ...dot(data.color),
    color: "black",
  }),
  placeholder: (styles) => ({ ...styles, color: "#6c757d" }),
};

export default function RoleSelect({ value, onChange, ...props }) {
  const selectedOption = roleOptions.find((opt) => opt.value === value) || null;

  return (
    <Select
      value={selectedOption}
      onChange={(opt) => onChange(opt.value)}
      options={roleOptions}
      styles={colourStyles}
      placeholder="Select"
      {...props}
    />
  );
}

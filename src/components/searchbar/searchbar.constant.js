export const dropDownStyle = {
  control: (baseStyle) => ({
    ...baseStyle,
    color: "#FFFFFF",
    fontFamily: "Nunito",
    width: "100%",
    height: "56px",
    backgroundColor: "#1E1E29",
    borderColor: "#1E1E29",
    borderWidth: "4px",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "none",
    },
    boxShadow: "none",
    position: "relative",
    padding: "0px 10px",
  }),
  valueContainer: (baseStyle) => ({
    ...baseStyle,
    padding: "0",
    textOverflow: "ellipsis",
    maxWidth: "90%",
    whiteSpace: "nowrap",
    overflow: "hidden",
  }),
  placeholder: (baseStyle) => ({
    ...baseStyle,
    color: "#7F7F98",
    fontSize: "16px",
    fontWeight: "",
    textAlign: "left",
    whiteSpace: "nowrap",
    maxWidth: "90%",
    textOverflow: "ellipsis",
    overflow: "hidden",
  }),
  input: (baseStyle) => ({
    ...baseStyle,
    color: "#FFFFFF",
  }),
  indicatorSeparator: () => ({ display: "none" }),
  option: (baseStyle) => ({
    ...baseStyle,
    padding: "0.5rem 1rem",
    backgroundColor: "#3b3b54",
    margin: "0px 0px 2px 0px",
    borderColor: "#000000",
    color: "#D9D9D9",
    textAlign: "left",
    borderRadius: "3px",
  }),
  menu: (baseStyle) => ({
    ...baseStyle,
    backgroundColor: "transparent",
    position: "absolute", // Set the position to absolute
    width: "100%", // Set the width to 100% to expand across the parent container
    zIndex: 9999,
  }),
  singleValue: (baseStyle) => ({
    ...baseStyle,
    color: "#FFFFFF",
    textAlign: "left",
  }),
  dropdownIndicator: (baseStyle) => ({
    ...baseStyle,
    display: "none",
  }),
  loadingIndicator: (baseStyle) => ({
    ...baseStyle,
    color: "#FFFFFF",
  }),
  clearIndicator: (baseStyle) => ({
    ...baseStyle,
    color: "#FFFFFF",
    cursor: "pointer",
  }),
};

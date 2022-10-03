import PropTypes from "prop-types";
import Box from "@mui/material/Box";

export const settingsBreadcrumbs = [
  { path: "/settings", text: "Restuarant Settings" },
];

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, backgroundColor: "#FFFFFF", padding: "24px 0px" }}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const restaurantData = {
  name: "Breakfast Menu",
  description: null,
  logo: null,
  website: null,
  facebook: null,
  instagram: null,
};

import { useState } from "react";
import { StyledMuiTabs } from "./style";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabProps, TabPanel } from "./constants";

export const MuiTabs = ({ tabs = [], className }) => {
  const [value, setValue] = useState(0);

  return (
    <StyledMuiTabs>
      <Box className={`tabs-box ${className}`}>
        <Box className="tabs-wrapper">
          <Tabs
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            aria-label="basic tabs example"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                className="tab"
                label={tab.label}
                {...tabProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        <Box className="tab-panels-wrapper">
          {tabs.map((tab, index) => (
            <TabPanel key={index} value={value} index={index}>
              {tab.item}
            </TabPanel>
          ))}
        </Box>
      </Box>
    </StyledMuiTabs>
  );
};
